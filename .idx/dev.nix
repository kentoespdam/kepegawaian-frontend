{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs
    pkgs.yarn
    pkgs.nodePackages.pnpm
    pkgs.bun
  ];
  idx.extensions = [
    "patbenatar.advanced-new-file"
    "formulahendry.auto-rename-tag"
    "biomejs.biome-nightly"
    "sleistner.vscode-fileutils"
    "wix.vscode-import-cost"
    "pulkitgangwar.nextjs-snippets"
    "csstools.postcss"
    "bradlc.vscode-tailwindcss"
  ];
  idx.workspace.onCreate = {
    npm-install = "npm install";
  };
  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        id = "web";
        manager = "web";
      }
      # {
      #   id = "ios";
      #   manager = "ios";
      # }
    ];
  };
}
