
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/productos"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 437, hash: 'd883f5107e17d97cf23d45ef428d9a5318355c7e77934817ddf9b56b1e78a91f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '261f48b53b40b75026569f257e781eadb181820a02a617f840fe81bd1c0d7599', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17306, hash: '9724448ea736836d066a856de08564540ce02fe9d8d3b9965c9af3c1a826b090', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 17297, hash: '73d620584ecd123952109286307ade961cf5629da1b2c1c041a715fb9f5253f0', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 19783, hash: '6cd37f397da2594aab28437ee484cc69c4bbff17b7a20958b9299a80151d1b71', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 22721, hash: '4984cc3d307eb68330124d7bfca8086fa40e5ef911dcf35fc7f049a5c1b24051', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
