package land.chipmunk.parker2991.nitoribot;

import land.chipmunk.parker2991.nitoribot.logger.Logger;
import land.chipmunk.parker2991.nitoribot.modules.*;
import land.chipmunk.parker2991.nitoribot.util.ComponentUtil;
import land.chipmunk.parker2991.nitoribot.listeners.*;
import net.kyori.adventure.text.Component;

import org.geysermc.mcprotocollib.network.ProxyInfo;
import org.geysermc.mcprotocollib.protocol.MinecraftProtocol;
import org.geysermc.mcprotocollib.network.Session;
import org.geysermc.mcprotocollib.network.event.session.DisconnectingEvent;
import org.geysermc.mcprotocollib.network.event.session.DisconnectedEvent;
import org.geysermc.mcprotocollib.network.event.session.PacketErrorEvent;
import org.geysermc.mcprotocollib.network.event.session.SessionAdapter;
import org.geysermc.mcprotocollib.network.session.ClientNetworkSession;
import org.geysermc.mcprotocollib.network.factory.ClientNetworkSessionFactory;
import org.geysermc.mcprotocollib.network.packet.Packet;
import org.geysermc.mcprotocollib.auth.GameProfile;
import org.geysermc.mcprotocollib.protocol.packet.ingame.serverbound.ServerboundPlayerLoadedPacket;
import org.geysermc.mcprotocollib.protocol.packet.login.clientbound.ClientboundLoginFinishedPacket;
import org.geysermc.mcprotocollib.protocol.packet.ingame.clientbound.ClientboundLoginPacket;
import org.geysermc.mcprotocollib.protocol.packet.ingame.serverbound.ServerboundPlayerLoadedPacket;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.Scanner;
import java.nio.file.Paths;
import java.util.Map;

public class Bot extends SessionAdapter {
  public final ListenerManager listenerManager = new ListenerManager();

  public boolean loggedIn = false;

  public int entityId;

  public final ScheduledExecutorService executor = Main.executor;

  public final ExecutorService executorService = Main.executorService;

  public ClientNetworkSession session;

  public GameProfile profile;

  public Config config;

  public Config.Options options;

  public List<Bot> bots;

  public ChatModule chat;

  public ConsoleModule console;

  public SelfcareModule selfcare;

  public PositionModule position;

  public CommandCoreModule core;

  public PlayerListModule players;

  public RegistryModule registry;

  public CommandManagerModule commandManager;

  public ExtrasMessagingModule extrasMessaging;

  public MCServerModule mcServer;

  public ProxyInfo randomProxyIp () throws IOException {
    String result = null; // stub

    Path proxiesPath = Paths.get("proxies.txt");

    int countLines = Math.round(
      Files.lines(proxiesPath).count()
    );

    Random random = new Random();

    int randomIndex = random.nextInt(countLines);

    String[] getIp = Files.lines(proxiesPath)
      .skip(randomIndex)
      .findAny()
      .get()
      .split(":");

    String ip = getIp[0];
    int port = new Integer(getIp[1]);

    return new ProxyInfo(
      ProxyInfo.Type.SOCKS5,
      new InetSocketAddress(ip, port)
    );
  }

  public void loadModules () {
    try {
      this.chat = new ChatModule(this);
      this.selfcare = new SelfcareModule(this);
      this.position = new PositionModule(this);
      this.core = new CommandCoreModule(this);
      this.registry = new RegistryModule(this);
      this.players = new PlayerListModule(this);
      new LoggingModule(this);
      new ChatCommandHandlerModule(this);
      this.commandManager = new CommandManagerModule(this);
      this.extrasMessaging = new ExtrasMessagingModule(this);
      new TextDisplayModule(this);
      this.mcServer = new MCServerModule(this);
    } catch (Exception e) {}
  }

  public Bot (Config.Options options, List<Bot> bots, Config config) {
    this.options = options;
    this.bots = bots;
    this.config = config;

    try {
      connect();
    } catch (Exception e) {}
  };

  public void connect () throws IOException {
    final MinecraftProtocol protocol = new MinecraftProtocol(options.username);

    if (options.useProxy) session = ClientNetworkSessionFactory.factory()
      .setAddress(
         options.host,
         options.port
      )
      .setProxy(randomProxyIp())
      .setProtocol(protocol)
      .create();

    else session = ClientNetworkSessionFactory.factory()
      .setAddress(
        options.host,
        options.port
      )
      .setProtocol(protocol)
      .create();
      session.addListener(this);
    loadModules();
    session.connect(false);
  }

  @Override
  public void disconnecting (DisconnectingEvent event) {
    String reason = event + "";
    session.disconnect(reason);
  }

 // ServerboundPlayerLoadedPacket

  @Override
  public void packetSent (Session session, Packet packet) {
    for (Listener listener : listenerManager.listeners) {
      listener.packetSent(session, packet);
    }
  }

  @Override
  public void packetError (PacketErrorEvent error) {
    error.setSuppress(true);
  }

  @Override
  public void packetReceived (Session session, Packet packet) {
    try {
      if (packet instanceof ClientboundLoginPacket) this.session.send(
        ServerboundPlayerLoadedPacket.INSTANCE
      );

      if (packet instanceof ServerboundPlayerLoadedPacket) {
        System.out.println(packet);
      }

      for (Listener listener : listenerManager.listeners) {
        listener.packetReceived(session, packet);
      }

      if (packet instanceof ClientboundLoginFinishedPacket) getProfile((ClientboundLoginFinishedPacket) packet);
      else if (packet instanceof ClientboundLoginPacket) getEntityId((ClientboundLoginPacket) packet);
    } catch (Exception e) { }
  }


  public void getProfile (ClientboundLoginFinishedPacket packet) {
    profile = packet.getProfile();

    loggedIn = true;
  }

  public void getEntityId (ClientboundLoginPacket packet) {
    entityId = packet.getEntityId();
  }

  @Override
  public void disconnected (DisconnectedEvent event) {
    listenerManager.clearListener();

    loggedIn = false;

    Component component = event.getReason();

    String reason = ComponentUtil.componentToAnsi(component);

    int reconnectDelay = options.reconnectDelay;

    Logger.RECONNECT(this, reason);

    executor.schedule(() -> {
      try {
        connect();
      } catch (IOException e) {
        throw new RuntimeException(e);
      }
    }, reconnectDelay, TimeUnit.MILLISECONDS);
  }
}