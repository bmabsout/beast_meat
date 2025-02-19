{
  description = "Beast Meat Butchery & Catering Website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: {
    devShells.x86_64-linux.default =
      let
        pkgs = nixpkgs.legacyPackages.x86_64-linux;
      in
      pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_20
          nodePackages.pnpm
          nodePackages.vercel
        ];

        shellHook = ''
          echo "🥩 Welcome to Beast Meat development environment!"
        '';
      };
  };
}
