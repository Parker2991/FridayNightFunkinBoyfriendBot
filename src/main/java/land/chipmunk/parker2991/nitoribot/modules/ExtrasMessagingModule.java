package land.chipmunk.parker2991.nitoribot.modules;

/*
 i will work on this module some other time,
 i have been messing with it and trying to get it to work for 3 days straight
 so this is currently stubbed
 */

import land.chipmunk.code.kaboomstandardsorganization.messaginglib.mcprotocollib.MCProtocolLibMessenger;

import land.chipmunk.parker2991.nitoribot.Bot;
import land.chipmunk.parker2991.nitoribot.listeners.*;
import org.geysermc.mcprotocollib.network.Session;
import org.geysermc.mcprotocollib.network.packet.Packet;

import java.util.ArrayList;
import java.util.List;

public class ExtrasMessagingModule extends Listener {
  private Bot bot;

  public final List<String> channels = new ArrayList<>();

  public static final String TEST_CHANNEL = "test";

  public void register (String channel) {

  }

  public void unregister (String channel) {

  }

  public void sendMessage (MCProtocolLibMessenger messenger, String channel, String message) {

  }

  @Override
  public void extrasMessagingReceived (MCProtocolLibMessenger message) {
    /*var findPlayer = bot.players.getPlayerUUID(player).profile.getName();
    bot.chat.tellraw("@a[tag=nitoribot_debug]",
      Component.text(
        "Recieved: " + message + "\n" +
          "From: " + findPlayer + "\n" +
          "Channel: " + channel
      )
    );*/
  }

  @Override
  public void packetSent(Session session, Packet packet) {

  }


/*

messenger.receivePayloads(
      TEST_CHANNEL,
      (_, _, payload) -> {
        Logger.info(
          "Received {}",
          payload.toString(StandardCharsets.UTF_8)
        );
        messenger.sendMessage(TEST_CHANNEL, payload);
      }
    );

    messenger.sendMessage(
      TEST_CHANNEL,
      wrappedBuffer("echo".getBytes(StandardCharsets.UTF_8))
    );
 */

  public ExtrasMessagingModule (Bot bot) {
    this.bot = bot;
    bot.listenerManager.addListener(this);
  }
}