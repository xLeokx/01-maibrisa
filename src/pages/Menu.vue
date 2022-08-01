<template>
  <div class="appMenu">
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!--INITIAL LOGO
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 initiallogo"></div>
      </div>
    </div>-->

    <!--MENU INICIAL-->
    <div class="container-fluid">
      <!--
    <div class="submitHeader"></div> -->
      <div class="row" style="height: 100vh">
        <div class="col-6">
          <router-link to="/Snacks">
            <div class="claimSteps" id="stepOne">
              <img src="~@/assets/platos.png" class="claimStepNumber" alt="" />
              <p class="claimStepTitle">PLATOS</p>
            </div>
          </router-link>
        </div>
        <div class="col-6">
          <router-link to="/Beverages">
            <div class="claimSteps" id="stepTwo">
              <img src="~@/assets/bebida.png" class="claimStepNumber" alt="" />
              <p class="claimStepTitle">BEBIDAS</p>
            </div>
          </router-link>
        </div>
        <div class="col-6" style="position: absolute; bottom: 0px">
          <router-link to="/CocktailsMenu">
            <div class="claimSteps" id="stepThree">
              <img
                src="~@/assets/bebidacon.png"
                class="claimStepNumber"
                alt=""
              />
              <p class="claimStepTitle">COCTELES</p>
            </div>
          </router-link>
        </div>
        <div class="col-6" style="position: absolute; bottom: 0px; right: 0px">
          <router-link to="/NonAlcoholicCocktails">
            <div class="claimSteps" id="stepOne">
              <img
                src="~@/assets/bebidasin.png"
                class="claimStepNumber"
                alt=""
              />
              <p class="claimStepTitle">COCTELES SIN</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexMenu",
  data() {
    return {
      idioma: null,
    };
  },
  created() {
    this.idioma = navigator.browserLanguage || navigator.language;
    console.log(this.idioma);
  },
};
</script>
<style>
.appMenu {
  background-image: url("../assets/logoinitial.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: auto;
  text-align: center;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.submitHeader {
  margin: 60px 0;
}
.submitHeader h1 {
  font-size: 26px;
}
.submitHeader p {
  font-size: 18px;
}
.claimSteps {
  margin-top: 35px !important;
  margin-bottom: 35px !important;
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.733);
  border: 2px solid #e2b053;
  border-radius: 5px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  display: table;
}
.claimStepNumber {
  margin-top: 40px;
  font-size: 38px;
  color: #444444;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  display: table-cell;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}
.claimStepTitle {
  color: #252525;
  font-family: cursive;
  font-weight: 400;
  font-size: 18px;
  margin-top: 110px;
}
.claimStepText {
  text-align: center;
  margin-left: 33.3%;
  width: 33.3%;
}

.initiallogo {
  background-image: url("../assets/logoinitial.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: auto;
  text-align: center;
  overflow: hidden;
}
/*@keyframes clipMe {
  0% {
    border-color: rgba(58, 58, 58, 0.295);
    background: rgba(255, 255, 255, 0.151);
  }
  50% {
    border-color: #e2b053;
    background: rgba(248, 248, 248, 0.973);
  }
  100% {
    border-color: rgba(58, 58, 58, 0.37);
    background: rgba(255, 255, 255, 0.151);
  }
} */
</style>
