{ pkgs }: {
	deps = [
    pkgs.python39Full
    pkgs.nodejs
    pkgs.nodejs-18_x
    pkgs.nodejs-16_x
     pkgs.nodejs-19_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}