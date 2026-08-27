package land.chipmunk.parker2991.nitoribot.command;

import land.chipmunk.parker2991.nitoribot.data.PlayerProfileData;
import land.chipmunk.parker2991.nitoribot.Bot;
import land.chipmunk.parker2991.nitoribot.util.ComponentUtil;

import net.kyori.adventure.text.Component;

import org.cloudburstmc.math.vector.Vector3d;

public class CommandSource {
  private Bot bot;

  public PlayerProfileData sender;

  public boolean inGame;

  public CommandSource (Bot bot, PlayerProfileData sender) {
    this.bot = bot;
    this.sender = sender;
  }


  public void sendFeedback (Component message) {
    String convertToJson = ComponentUtil.componentToJSON(message);
    Vector3d playerPos = sender.position.position();

    String formatCommand = String.format(
      "minecraft:summon text_display %s %s %s {tag:[%s], text:%s}",
      playerPos.getX(),
      playerPos.getY(),
      playerPos.getZ(),
      "NitoriBot",
      convertToJson
    );

    String selector = String.format(
      "@p[nbt={UUID:%s}]",
      sender.entityUUID
    );

    bot.chat.tellraw(selector, message);
  }

}
