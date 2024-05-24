package land.chipmunk.parker2991.fnfboyfriendbot;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;

public class serverterminal {
    public static void main(String[] args) {
        try {
            ProcessBuilder processBuilder = new ProcessBuilder(Arrays.asList("ash", "-c", "ls"));
            Process process = processBuilder.start();

            InputStream inputStream = process.getInputStream();
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                System.out.println(new String(buffer, 0, bytesRead));
            }

            int exitCode = process.waitFor();
            System.out.println("Child process close all stdio with code " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}


