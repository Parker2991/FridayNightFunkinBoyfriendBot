version = "v9.0.0"
group = "nitoribot"
description = "NitoriBot"
plugins {
  id("com.gradleup.shadow") version "9.2.2"
  kotlin("jvm") version "2.3.10"
  id("maven-publish")
  application
}

kotlin {
  jvmToolchain(25)
}

repositories { 

  mavenCentral()

  maven("https://repo.opencollab.dev/maven-releases/")

  maven("https://repo.opencollab.dev/maven-snapshots/")

  maven("https://jitpack.io/")

  maven("https://repo.opencollab.dev/main/")

  maven("https://maven.maxhenkel.de/repository/public/")

 // maven("https://libraries.minecraft.net")

 /* maven("https://code.optmstc.dev/api/packages/kso/maven") {
    content {
      includeGroupAndSubgroups("land.chipmunk.code")
    }
  }*/

  //maven("https://libraries.minecraft.net")

//  maven("https://code.chipmunk.land/api/packages/kaboomstandardsorganization/maven/")
}

dependencies {
  implementation("org.geysermc.mcprotocollib:protocol:26.2-SNAPSHOT")
  implementation("org.slf4j:slf4j-api:2.0.13")
  implementation("org.tinylog:slf4j-tinylog:2.7.0")
  implementation("org.tinylog:tinylog-impl:2.7.0")
  implementation("org.yaml:snakeyaml:2.2")
  implementation("net.kyori:adventure-text-serializer-ansi:4.26.1")
  implementation("net.kyori:adventure-text-serializer-plain:4.26.1")
  implementation("net.kyori:adventure-text-serializer-legacy:4.26.1")
  implementation("net.kyori:adventure-text-serializer-gson:4.26.1")
  implementation("net.dv8tion:JDA:6.4.1")
  implementation("de.connect2x.trixnity:trixnity-client:5.0.0")
  implementation("org.pircbotx:pircbotx:2.1")
  implementation("org.jline:jline:4.1.0")
}

application {
  mainClass.set("land.chipmunk.parker2991.nitoribot.Main")
}
