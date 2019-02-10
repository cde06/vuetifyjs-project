<template>
  <v-app id="inspire">
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      dark
      clipped
      fixed
      app
    >
      <v-list id="main-menu-list" dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <div>
        <img id="main-logo" src="@/assets/logo-gemaltox150.png" />
      </div>
      <div
        style="border-left: 1px solid #9e9e9e;height: 32px;margin-top: 5px; margin-left:14px;"
      ></div>
      <v-toolbar-title>Connectivity</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content id="main-content">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <!-- <HelloWorld /> -->
            <v-tooltip right>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  props: {
    source: { type: String, default: undefined }
  },
  // components: {
  //   HelloWorld
  // },
  // data() {
  //   return {
  //     //
  //   };
  // }
  data: () => ({
    drawer: null
  })
};
</script>
<style scoped>
#main-content {
  background-color: #e5e6e6;
}
#navigation-drawer {
  background-color: #3c3c3c;
}
#main-menu-list {
  margin-top: 16px;
}
#main-logo {
  margin-left: 15px;
  padding: 5px;
  float: left;
}
</style>
