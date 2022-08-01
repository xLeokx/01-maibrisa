<template>
  <div>
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
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.733);

  border: 1px solid #e2b053;
  border-radius: 15px;
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
@media (min-width: 1200px) {
  .submitHeader {
    margin: 60px 40px;
  }
}
@media (max-width: 991px) {
  .claimSteps {
    margin: 30px auto;
  }
  .submitHeader {
    margin-top: 60px;
    margin-bottom: 0;
    text-align: center;
  }
}
.initiallogo {
  background-image: url("../assets/logoinitial.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 70vh;
  margin: auto;
  padding: auto;
  text-align: center;
  overflow: hidden;
}
</style>
