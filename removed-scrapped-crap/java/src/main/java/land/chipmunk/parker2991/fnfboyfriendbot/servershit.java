package land.chipmunk.parker2991.fnfboyfriendbot;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class servershit {
    public static void main(String[] args) {
        try {
            InetAddress inetAddress = InetAddress.getLocalHost();
            System.out.println("Hostname \u203a " + inetAddress.getHostName());
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        System.out.println("Working Directory \u203a " + System.getProperty("user.dir"));
        System.out.println(System.getProperty("os.arch"));
        System.out.println("OS \u203a " + System.getProperty("os.name"));
        System.out.println("OS Version/distro \u203a " + System.getProperty("os.version"));
        System.out.println("Kernel Version \u203a " + System.getProperty("os.kernel.version"));
        System.out.println("Cores \u203a " + Runtime.getRuntime().availableProcessors());
        System.out.println("CPU \u203a " + System.getProperty("sun.cpu.isalist"));
        System.out.println("Server Free memory " + (Runtime.getRuntime().freeMemory() / 1048576) + " MiB " +
                Runtime.getRuntime().totalMemory() / 1048576 + " MiB");
        System.out.println("Device uptime \u203a " + formatUptime(System.currentTimeMillis() / 1000L));
        System.out.println("Java version \u203a " + System.getProperty("java.version"));
    }

    private static String formatUptime(long uptime) {
        long days = uptime / 86400;
        long hours = (uptime % 86400) / 3600;
        long minutes = ((uptime % 86400) % 3600) / 60;
        long seconds = ((uptime % 86400) % 3600) % 60;

        return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
}
