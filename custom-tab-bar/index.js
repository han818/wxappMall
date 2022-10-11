Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#31869B",
      fontWeight:'bold',
      "list": [
        {
            "pagePath": "pages/home/home",
            "text": "首页",
            "iconPath": "/pages/images/home.png",
            "selectedIconPath": "/pages/images/home.png"
        },
        {
            "pagePath": "pages/introduce/introduce",
            "text": "介绍",
            "iconPath": "/pages/images/introduce.png",
            "selectedIconPath": "/pages/images/introduce.png"
        },
        {
            "pagePath": "pages/paycar/paycar",
            "text": "购物",
            "iconPath": "/pages/images/paycar.png",
            "selectedIconPath": "/pages/images/paycar.png"
        },
        {
            "pagePath": "pages/self/self",
            "text": "我的",
            "iconPath": "/pages/images/self.png",
            "selectedIconPath": "/pages/images/self.png"
        }
      ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        console.log(e);
        const idx = e.currentTarget.dataset.index
        const path = e.currentTarget.dataset.path
        // this.setData({
        //   selected: idx
        // })
        wx.switchTab({
          url: path,
        });
      }
    },
    
  })