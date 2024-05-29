{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs
    pkgs.yarn
    pkgs.nodePackages.pnpm
    pkgs.bun
  ];
  env={
    NEXT_PUBLIC_URL = "https://9000-idx-kepegawaian-frontend-1716945467365.cluster-bs35cdu5w5cuaxdfch3hqqt7zm.cloudworkstations.dev/?monospaceUid=152808";
    APP_HOSTNAME = "9000-idx-kepegawaian-frontend-1716945467365.cluster-bs35cdu5w5cuaxdfch3hqqt7zm.cloudworkstations.dev";
    PROTOCOL = "https";
    PORT = 443;
    NEXT_PUBLIC_APPWRITE_HOSTNAME = "appwrite.perumdamts.id";
    NEXT_PUBLIC_APPWRITE_ENDPOINT = "https://appwrite.perumdamts.id";
    NEXT_PUBLIC_APPWRITE_PROJECT_ID = "65cd62cc3385d8434a53";
    NEXT_PUBLIC_APPWRITE_API_KEY = "061b4abb7743ecc570cc693483b36bc0f50616b2631c5f7cec3825e15cd196d703434b9c7d6a9bb0d44ef7d8ca9eb9d570a916c2e4867993b37fc29d9579278acdba9d2ad485eca0381e975aedf5f3217cf6653f4234265975c38186aa53ef572702a298e16576843d7dfd47cb77a649fff0f4460876c52b4c7d84c0b2c74706";
    DEFAULT_MAIL_DOMAIN = "perumdamts.com";
    AUTH_SECRET = "BBB93D29D946B29EDA92A5742518B";
    NEXT_PUBLIC_API_URL = "https://dev-api-kepegawaian.perumdamts.id";
    TZ = "Asia/Jakarta";
  };
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
    npm-install = "bun install";
  };
  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "bun"
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
