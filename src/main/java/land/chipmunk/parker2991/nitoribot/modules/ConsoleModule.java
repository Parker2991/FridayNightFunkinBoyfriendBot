package land.chipmunk.parker2991.nitoribot.modules;

import land.chipmunk.parker2991.nitoribot.Bot;

//import org.jline
import land.chipmunk.parker2991.nitoribot.Main;
import org.jline.reader.*;
import org.jline.terminal.*;

import javax.sound.sampled.Line;
import java.util.List;

public class ConsoleModule implements Completer {
  private Bot bot;

  private List<Bot> servers;

  public LineReader reader;

  public Terminal terminal;

  public String server = "all";

  public String readLine (String message) {
    return "";
  }

  @Override
  public void complete (LineReader reader, ParsedLine line, List<Candidate> candidates) {

  }

  public void handleLine (String line) {

  }
  public ConsoleModule (Bot bot) {
    try {
      this.bot = bot;

      this.servers = bot.bots;

      terminal = TerminalBuilder.builder().build();

      reader = LineReaderBuilder.builder().terminal(terminal).build();

      Main.executorService.submit(() -> {
        while (true) {
          reader.readLine("> ");
        }
      });
    } catch (Exception e) {}
  }
}
