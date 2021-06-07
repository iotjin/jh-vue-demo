<template>
  <div>
    <div>百度地图</div>

    <baidu-map class="map-view" :center="markerPoint" :zoom="16">
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
        @locationSuccess="locationSuccess"
      ></bm-geolocation>

      <bm-marker
        :position="markerPoint"
        :dragging="true"
        @click="infoWindowOpen"
      >
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
          style="font-size: 13px"
        >
          北京xxxx <br /><br />
          地址：北京市
        </bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      markerPoint: { lng: 116.4, lat: 39.9 },
      show: false,
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 17;
    },

    infoWindowClose() {
      this.show = false;
    },

    infoWindowOpen() {
      this.show = true;
    },

    locationSuccess(point, AddressComponent, marker) {
      console.log("定位成功");
      console.log(point);
      console.log(AddressComponent);
      console.log(marker);
    },
  },
};
</script>

<style>
.map-view {
  width: 100%;
  height: 300px;
}
</style>