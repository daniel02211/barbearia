/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ADICIONAMOS A CONFIGURAÇÃO DE IMAGENS AQUI
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io", // <--- O domínio utfs.io é adicionado
        port: "",
        pathname: "/f/**", // Restringe a otimização ao caminho das suas imagens (opcional, mas recomendado)
      },
    ],
  },
};

module.exports = nextConfig;
