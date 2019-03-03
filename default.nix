with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "mocca-front";
  buildInputs = [
    nodejs-10_x
  ];
  shellHook = ''
    export LC_ALL=en_US.UTF-8
    export LANG=en_US.UTF-8
  '';
}
