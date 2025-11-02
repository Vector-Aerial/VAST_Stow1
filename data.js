var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen1",
      "name": "kitchen1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.4166245147194232,
        "pitch": 0.02284794657155942,
        "fov": 1.6962881762296276
      },
      "linkHotspots": [
        {
          "yaw": 0.11478378572779313,
          "pitch": 0.7024172194667031,
          "rotation": 0,
          "target": "1-kitchen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen2",
      "name": "kitchen2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0901863224084245,
          "pitch": 0.5242808630511142,
          "rotation": 0,
          "target": "0-kitchen1"
        },
        {
          "yaw": -2.2334422609795723,
          "pitch": 0.8024173791133009,
          "rotation": 7.0685834705770345,
          "target": "2-kitchen3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen3",
      "name": "kitchen3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.242011613547657,
          "pitch": 0.6284774782279232,
          "rotation": 0,
          "target": "0-kitchen1"
        },
        {
          "yaw": 2.3734515523461566,
          "pitch": 0.9021622079241602,
          "rotation": 0,
          "target": "1-kitchen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.002558329252524416,
          "pitch": 0.3427940755626562,
          "rotation": 0,
          "target": "5-hall2"
        },
        {
          "yaw": 1.5539600127000117,
          "pitch": 0.9165619836232999,
          "rotation": 0,
          "target": "2-kitchen3"
        },
        {
          "yaw": -2.077517909787007,
          "pitch": 0.4096159252690743,
          "rotation": 2.356194490192345,
          "target": "4-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-livingroom",
      "name": "livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5619383639604143,
          "pitch": 0.3296754433872451,
          "rotation": 0.7853981633974483,
          "target": "2-kitchen3"
        },
        {
          "yaw": 2.349298946109344,
          "pitch": 0.44536627063023815,
          "rotation": 5.497787143782138,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hall2",
      "name": "hall2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6737788088950527,
          "pitch": 0.3999856656419283,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Stow1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
