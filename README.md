This is a [Next.js](https://nextjs.org/) project to serve as a ISG frontend for a WordPress CMS instance.

## Getting Started

### CMS backend

The CMS backend is created and configured by running the following inside an UpCloud VPS instance (Ubuntu 20.04 LTS).

```bash
wget https://sek.p.serverside.fi/wptpl/create-wordpress.sh
# ex. bash create-wordpress.sh template2 majestic-baklava-28ec08
bash create-wordpress.sh <campaign-host-name> <netlify-site-id>
```

### Frontend app

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

