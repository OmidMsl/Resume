'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fc6364ca6c97d38121b708c726a41891",
"index.html": "66410f7e43a67ced2e501c7f4df7478c",
"/": "66410f7e43a67ced2e501c7f4df7478c",
"main.dart.js": "5e3d568b8101c87896630108916978ef",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "548f69ad6275835d60df8f9c93f43f3d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "3c283439b87ddad51598e1a72008cef4",
"assets/fonts/Vazir.ttf": "f5ee3f2f7422a0d0ef67d7c5bc7742d9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/IRANSansNum.ttf": "669177836d145526c0238fb731f36246",
"assets/fonts/ResomeIcons.ttf": "e5b3d2eb962bc05dbb96098884105510",
"assets/AssetManifest.json": "042fc105be4ea2e0050da8a7712cca4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "bbd26e5a18ab0deb17dd7db7b17d80d7",
"assets/images/ModelSim.png": "3af2cfc1a8ee306000d23cd91481bcba",
"assets/images/image.jpg": "089fc068d964a265dabda9b184134a5c",
"assets/images/XilinxISE.jpg": "d5b958d84c16bb0fc832af76357bdcaf",
"assets/images/testgram.png": "fcfc30936e5854d456cf49e6cb766836",
"assets/images/hut.png": "59500b5bfe4c9f5bc6a4c850974936ea",
"assets/images/gns3.png": "24a52bf3c731d8685a9476327703de0e",
"assets/images/peg_solitaire/peg_solitaire_screenshot_3.png": "104062f9a4de43efed57851388b3c0ab",
"assets/images/peg_solitaire/peg_solitaire_screenshot_5.png": "2631e268f21e3daf8c83bc2564d179c2",
"assets/images/peg_solitaire/peg_solitaire_screenshot_1.png": "bd198a04d93973ae91a12f4a5f6260ef",
"assets/images/peg_solitaire/peg_solitaire_screenshot_2.png": "3b20287d326819a8d6da11a626cb9c43",
"assets/images/peg_solitaire/peg_solitaire_screenshot_4.png": "0090c8664df73f338400f7682831fb19",
"assets/images/XilinxVivado.jpg": "03db55af8779d62ce9dffc875983a6e1",
"assets/images/proteus.png": "c6f4a7b3c3aaa79df539c9d14c6de24a",
"assets/images/java.png": "b21fc11693059293447a977f1be82c66",
"assets/images/cpp.png": "bee53a59a415e920e62d71520666134c",
"assets/images/Virtualbox.png": "0e9e8c0391aec772a9e9dcc84c23bda1",
"assets/images/Sampad.png": "58b6469defd30a00ce7acb4eb6cf1cdb",
"assets/images/findMinimumRoute/findMinimumRoute_screenshot_1.png": "54ca94cd4b6fa6bf8c8585b16406dfbf",
"assets/images/findMinimumRoute/findMinimumRoute_screenshot_2.png": "252d2cd12e1b966fbaf4baeb8e045fdc",
"assets/images/findMinimumRoute/findMinimumRoute_screenshot_3.png": "0ca732852d31551d9778fb76560ad659",
"assets/images/findMinimumRoute/findMinimumRoute_screenshot_4.png": "c00c20d9dd59d364137d953b7668c2d7",
"assets/images/ma/ma_screenshot_2.png": "59190109039269ade417dd2101a771b9",
"assets/images/ma/ma_screenshot_8.png": "ccaa626b20c6a509d7fe27b5a76897a2",
"assets/images/ma/ma_screenshot_3.png": "68e5af3cd8312738019befe6a10e2d22",
"assets/images/ma/ma_screenshot_6.png": "72045417afaa6023facc1b861868abaa",
"assets/images/ma/ma_screenshot_7.png": "57dff799d24cd7dd81378f9c060f383f",
"assets/images/ma/ma_screenshot_9.png": "20562a9d48450df151cb6dc2ec1624b6",
"assets/images/ma/ma_screenshot_10.png": "ead047162cfa27cf53f4946b25107d63",
"assets/images/ma/ma_screenshot_4.png": "ed726cb4a2858f20a13617ec994fca91",
"assets/images/ma/ma_screenshot_1.png": "84ffe30f0951cbafdc1b233b65975e72",
"assets/images/ma/ma_screenshot_5.png": "fe0cf57152254138e0b73a999b92a72c",
"assets/images/spec.png": "d10bdaf0c22fd5511295b139b462a29f",
"assets/images/bazar_en.png": "06685bd491ebe6e742509f351a25c153",
"assets/images/c.png": "5d3ac30346b3bed584faefed4f139a13",
"assets/images/findMinimumRoute.png": "4964b5ee8fc0d1a327c7b789bc4e36fa",
"assets/images/sql.png": "4872d9f434456569cf3e65a4134546ce",
"assets/images/vs_code.png": "44ae3f5a5ab320f1f81d41a9a028edd1",
"assets/images/Photoshop.jpg": "8e58c00e4704a3cd588c3badec4d4ec6",
"assets/images/android_app.png": "75e7f95f86cc012a39067593b31819f9",
"assets/images/english_leitner_box.png": "cd7d7ff7ff826ea56653d6792d7305a7",
"assets/images/download.png": "5004c448336b34f4d16e10c39188669c",
"assets/images/leitner/leitner_screenshot_2.png": "e31fff05751b2fe7fd87a91307e5b6ed",
"assets/images/leitner/leitner_screenshot_5.png": "2906482a95e9631ce0a99a4ba1138481",
"assets/images/leitner/leitner_screenshot_1.png": "da472479d2102ea5b41695598c9cc6cb",
"assets/images/leitner/leitner_screenshot_6.png": "bc3c80eecb2ef7a48e8ffba112a8d274",
"assets/images/leitner/leitner_screenshot_3.png": "1a434c6796879d714ee2fcaf7eff1706",
"assets/images/leitner/leitner_screenshot_4.png": "e887032cf674057f7ec26ca995f1df8c",
"assets/images/peg_solitaire.png": "9ffb26e8984346cd73d3927584ae0475",
"assets/images/vhdl.png": "e17f3d3d9072f1f5482fdfcbd43f6d3e",
"assets/images/network.png": "cca10a514ba6e5996dac7ae4fa654b0c",
"assets/images/parscoders.png": "7598b2b67c31b5255d075bf4aa63c884",
"assets/images/clobber.png": "8d1b978d484969a77c37dc5e3f90661f",
"assets/images/testgram/testgram_screenshot_3.png": "d74ab277ad5d7ec4ab582a5dc64f63a9",
"assets/images/testgram/testgram_screenshot_2.png": "54897a1d98fb8a07598e97c9b53503c4",
"assets/images/testgram/testgram_screenshot_1.png": "9c83c060250b841d95a2f743d6b95dcf",
"assets/images/Dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/images/PhpMyAdmin.png": "e6c0e677196a5cfae52e184809f45bf5",
"assets/images/bazar_fa.png": "e96f1bb78d9e9571baf5e39572afedd6",
"assets/images/material_design.jpg": "5e01f68129c32881c9cc2f673f6aa71b",
"assets/images/mysql.png": "d76ff1872d0f758b4739fdd4d27d0cac",
"assets/images/github.png": "daec1509beec1e2f50066fa7696f9cce",
"assets/images/assembly.png": "5698a9f2d08ea6909c57cade3edbb86e",
"assets/images/sql_server.png": "c49d87884f05cb7482515211b92daaff",
"assets/images/clobber/clubber_screenshot_3.png": "211605340eb3f16d94e9e23b97fbaa9b",
"assets/images/clobber/clubber_screenshot_1.png": "8f1618930bd1b9977099069496ae0ada",
"assets/images/clobber/clubber_screenshot_4.png": "e259b784e25132d51d33021889eb1253",
"assets/images/clobber/clubber_screenshot_2.png": "0a135a3c6a4e239700cd018db193ee6d",
"assets/images/Matlab.png": "5a305d7125e486422a74298e6de62408",
"assets/images/android.png": "ffb450265cd0435090b8f90c792854ab",
"assets/images/android_studio.png": "45a632028692f1b089914439b45af71a",
"assets/images/clion.png": "4f81c77701fe3958d39e38bf36d90f22",
"assets/images/Adobe_XD.png": "dddf28fe8c3cc12111c8068f1d1db134",
"assets/images/SQLite.png": "2495c7d94445a10a4dd9dd31dc2c5746",
"assets/images/screenshots.png": "87466c471372991446adf45314c3038f",
"assets/images/ma_app.png": "4fe03f67d81142c61444b806894c1b43",
"assets/images/cisco%2520packet%2520tracer.png": "b0fb75019c0a39d19543ff0e0feccd8e",
"assets/images/code_language.jpg": "ed45a30792e3e497b8b1347e939188df",
"assets/images/python.png": "e35b6480dd6bca95af1310c6b75795bf",
"assets/images/huta/huta_screenshot_1.png": "f78a09598e79bcf9bf045b443d3952ba",
"assets/images/huta/huta_screenshot_4.png": "96b7c68c729a945999d53ddbad7fad43",
"assets/images/huta/huta_screenshot_3.png": "13fc4c594cc4eaf11ec663a4a634d82f",
"assets/images/huta/huta_screenshot_2.png": "d213e7bf74f31b5970d409ba37870072",
"assets/images/huta/huta_screenshot_5.png": "5dfeff4c18a00eeffc55d3b8c55775be",
"assets/images/Adobe_Premiere.png": "84a7ad2fc7f4de2e34460093ccc24e9b",
"assets/images/Spyder.png": "c189f593fdb29b858049adb12cac4c5c",
"assets/images/little_calculator/little_calculator_screenshot_2.png": "76c12c4a3a959742632a7aa8a5bc32f0",
"assets/images/little_calculator/little_calculator_screenshot_3.png": "e8c43c07850adaff4c697a3f384aaa66",
"assets/images/little_calculator/little_calculator_screenshot_1.png": "b282f47de175967150a9130f2d0321c5",
"assets/images/spec/spec_screenshot_7.png": "9c55230830b318c2dd8ee2e89f84e397",
"assets/images/spec/spec_screenshot_5.png": "5ed1b7289f589c1fd2b464c1effea9a4",
"assets/images/spec/spec_screenshot_2.png": "517fdc50b47ba08699f430edcd73ec88",
"assets/images/spec/spec_screenshot_6.png": "5789620e9d98d7f81ba0443320176f47",
"assets/images/spec/spec_screenshot_4.png": "f8bb7c372b0ac612eef806e3a4dd12e8",
"assets/images/spec/spec_screenshot_8.png": "ebcea82b6182f25bc91c3cbed58dae6b",
"assets/images/spec/spec_screenshot_3.png": "4c546e4c756b8736f124c58aa62fabde",
"assets/images/spec/spec_screenshot_1.png": "7c3697a45f3e868928f411afe29853d1",
"assets/images/idea.jpg": "d4a2712be3dd472c33e0a2ed7b629e65",
"assets/images/software.png": "53ac3b864d18bec387d791b1dc50ddbe",
"assets/images/devcpp.png": "6639eebad9917f1b02f35514c7493e19",
"assets/images/CodeVisionAVR.png": "7f912861ec502759cffb7a2f83c2b7b3",
"assets/images/XAMPP.png": "286e6a01eb0ac34ed93e67986ba6ca74",
"assets/images/NetBeans.png": "8449797aea0a5a3edb8b748d9195bfc5",
"assets/images/php.png": "3e7c27e9948a657caf5c38ac1e4bbef7",
"assets/images/hut_assistant.png": "c4a4dfa4d1b3320e83d91b51d89c2406",
"assets/images/code.png": "d6ec5f4ea081da7ace958a2bbddd4ed3",
"assets/images/little_calculator.png": "4d33756986caa51db7c0a3f6fa454b90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
