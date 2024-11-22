package land.chipmunk.parker2991.fnfboyfriendbot;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.yaml.snakeyaml.Yaml;
import com.google.common.util.concurrent.ThreadFactoryBuilder;
import java.io.*;
import java.util.List;
import java.util.Set;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Bot config = null;
        Path configPath = Paths.get("config.yml");
        try {
            Yaml yaml = new Yaml();
            config = yaml.load(Files.readString(configPath));
            System.out.println(config);
        } catch (IOException e) {
            System.out.println(e.toString());
        }
        List<Bots> bots = new ArrayList<>();
        for (Options options : config.bots) {
          final Bot client = new Bot(options, bots);
          bots.add(client);
        }
    }

    private static class Options {
  
    }
}
