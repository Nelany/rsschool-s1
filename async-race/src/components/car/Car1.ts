export const Car1 = {
  lightColor(color: string): string {
    if (/^#[0-9a-fA-F]{6}$/.test(color)) {
      const sliceColor = color.slice(1);

      const newSliceColor = sliceColor.replace(/(..)/g, (match) => `${match[0]}f`);

      return `#${newSliceColor}`;
    }
    return color;
  },

  svg(color: string, id: string) {
    const lightColor = Car1.lightColor(color);
    const svg = `<svg class="car" id="car-${id}"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   style="enable-background:new"

   viewBox="0 0 1920 600"

   version="1.1"
   inkscape:version="0.48.4 r9939"
   sodipodi:docname="car-lamborgini-green.svg">
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.25"
     inkscape:cx="1460.1805"
     inkscape:cy="414.47844"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:window-width="1440"
     inkscape:window-height="853"
     inkscape:window-x="-3"
     inkscape:window-y="-3"
     inkscape:window-maximized="1"
     inkscape:snap-bbox="true"
     inkscape:bbox-paths="true"
     inkscape:bbox-nodes="true"
     inkscape:snap-bbox-edge-midpoints="true"
     inkscape:snap-bbox-midpoints="true"
     inkscape:object-paths="true"
     inkscape:snap-intersection-paths="true"
     inkscape:object-nodes="true"
     inkscape:snap-smooth-nodes="true"
     inkscape:snap-global="true"
     showguides="true"
     inkscape:guide-bbox="true"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:snap-midpoints="true"
     inkscape:snap-object-midpoints="true"
     inkscape:snap-center="true" />
  <defs
     id="defs4">
    <linearGradient
       id="linearGradient33024">
      <stop
         style="stop-color:#858585;stop-opacity:1;"
         offset="0"
         id="stop33026" />
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="1"
         id="stop33028" />
    </linearGradient>
    <linearGradient
       id="linearGradient4489">
      <stop
         id="stop4491"
         offset="0"
         style="stop-color:#050000;stop-opacity:1;" />
      <stop
         style="stop-color:${color};stop-opacity:1;"
         offset="0.5"
         id="stop4493" />
      <stop
         id="stop4495"
         offset="1"
         style="stop-color:${lightColor};stop-opacity:1;" />
    </linearGradient>
    <linearGradient
       id="linearGradient4199">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop4201" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop4203" />
    </linearGradient>
    <linearGradient
       id="linearGradient4060">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop4062" />
      <stop
         id="stop4776"
         offset="0.5"
         style="stop-color:#ffffff;stop-opacity:0.39215687;" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop4064" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient3843"
       x1="1686.6193"
       y1="1139.6332"
       x2="147.48535"
       y2="248.67316"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient4142"
       x1="884.78833"
       y1="492.02261"
       x2="897.16449"
       y2="531.125"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient4158"
       x1="256.8746"
       y1="638.6806"
       x2="41.719387"
       y2="918.19543"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect"
       gradientTransform="matrix(-1.0403455,0,0,0.93668452,798.41073,40.33211)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient4166"
       x1="651.04333"
       y1="741.54761"
       x2="1204.119"
       y2="517.2937"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,785.95648,-0.57852)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4168"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-7.4242267,0,0,2.0939118,5577.2382,-521.28396)"
       cx="742.27057"
       cy="468.43082"
       fx="742.27057"
       fy="468.43082"
       r="69.704437" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4176"
       cx="802.10077"
       cy="454.04456"
       fx="802.10077"
       fy="454.04456"
       r="21.81382"
       gradientTransform="matrix(-6.4200469,0.15544972,0.0825079,3.4075625,5093.8807,-1220.5309)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4182"
       cx="754.70599"
       cy="483.896"
       fx="754.70599"
       fy="483.896"
       r="70.944046"
       gradientTransform="matrix(-8.1616355,4.2339666,0.58672655,1.1587955,5949.0471,-3254.7081)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4192"
       cx="655.31415"
       cy="520.51562"
       fx="655.31415"
       fy="520.51562"
       r="28.813154"
       gradientTransform="matrix(-0.89395781,0.05884928,0.00459435,0.08702802,715.27816,436.65139)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient4005"
       gradientUnits="userSpaceOnUse"
       x1="783.86975"
       y1="455.50333"
       x2="798.34546"
       y2="407.20709"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient4011"
       x1="706.44397"
       y1="472.87231"
       x2="764.56696"
       y2="578.10889"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       spreadMethod="reflect"
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient3885"
       cx="357.20541"
       cy="648.55011"
       fx="357.20541"
       fy="648.55011"
       r="208.70312"
       gradientTransform="matrix(-5.8218188,1.5599517,0.7653188,2.8562086,621.14412,-1580.8649)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient3887"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-9.3692661,-3.9281156,-2.2869268,5.454734,1043.9237,-3177.9244)"
       cx="-171.44872"
       cy="701.86609"
       fx="-171.44872"
       fy="701.86609"
       r="166.45876" />
    <radialGradient
       spreadMethod="reflect"
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient3900"
       cx="415.32281"
       cy="744.48779"
       fx="415.32281"
       fy="744.48779"
       r="189.12422"
       gradientTransform="matrix(-8.9810957,0,0,5.3572185,3786.4867,-3023.4919)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient3915"
       x1="-465.26785"
       y1="658.37878"
       x2="-374.5"
       y2="674.09308"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient3949"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect"
       x1="412.74292"
       y1="689.99738"
       x2="480.01889"
       y2="679.50311"
       gradientTransform="matrix(-0.95888659,0,0,0.90405632,768.70892,63.204826)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient3922"
       cx="-342.95312"
       cy="797.75"
       fx="-342.95312"
       fy="797.75"
       r="67.671875"
       gradientTransform="matrix(-1.2152467,0,0,0.71719477,716.35098,225.60787)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient3971"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.7725489,1.2788006,1.5332722,5.7222498,-1370.1487,-3427.2252)"
       cx="-245.98849"
       cy="795.94238"
       fx="-245.98849"
       fy="795.94238"
       r="6.203125" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4022"
       cx="707.70563"
       cy="523.6413"
       fx="707.70563"
       fy="523.6413"
       r="27.625"
       gradientTransform="matrix(-3.0953165,0,0,0.65177636,2261.489,182.16951)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4187"
       cx="360.75046"
       cy="581.07349"
       fx="360.75046"
       fy="581.07349"
       r="131.07812"
       gradientTransform="matrix(-2.7693919,0,0,0.60940488,1479.7633,238.8948)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4195"
       cx="382.69385"
       cy="575.65149"
       fx="382.69385"
       fy="575.65149"
       r="131"
       gradientTransform="matrix(-2.0926916,0,0,0.45078734,1215.9446,335.58855)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4266"
       cx="-367.82812"
       cy="677.95312"
       fx="-367.82812"
       fy="677.95312"
       r="45.328125"
       gradientTransform="matrix(-1.5628639,0,0,0.63947583,583.13336,244.41848)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient4355"
       gradientUnits="userSpaceOnUse"
       x1="1017.1658"
       y1="607.37811"
       x2="1098.1318"
       y2="417.62097"
       gradientTransform="matrix(-1,0,0,1,790.17051,0.12627)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4567-7"
       cx="130.55606"
       cy="680.20825"
       fx="130.55606"
       fy="680.20825"
       r="74.25"
       gradientTransform="matrix(-1.9829475,0,0,0.32214551,936.20385,481.37259)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4698"
       cx="691.46765"
       cy="800.53821"
       fx="691.46765"
       fy="800.53821"
       r="1.4037398"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.831166,0,0,1.831166,1834.0864,-760.24297)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4818"
       cx="139.61128"
       cy="866.93695"
       fx="139.61128"
       fy="866.93695"
       r="27.399519"
       gradientTransform="matrix(-3.0378889,-0.8139999,-0.38794089,1.4478152,1901.2162,-358.79161)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4890"
       cx="108.05412"
       cy="742.84735"
       fx="108.05412"
       fy="742.84735"
       r="98.375"
       gradientTransform="matrix(-8.9834566,3.310013,1.3595922,3.6899668,1607.8842,-2742.345)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4906"
       cx="875.16913"
       cy="435.60168"
       fx="875.16913"
       fy="435.60168"
       r="214.36302"
       gradientTransform="matrix(-5.1973769,0,0,1.1122837,4477.4927,-70.90836)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4941"
       cx="346.02875"
       cy="881.91614"
       fx="346.02875"
       fy="881.91614"
       r="141.95302"
       gradientTransform="matrix(-27.030846,-8.326162e-8,0,1.9955643,10265.678,-971.34134)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4976"
       cx="416.80319"
       cy="552.72748"
       fx="416.80319"
       fy="552.72748"
       r="22.8125"
       gradientTransform="matrix(-4.1833017,1.1209123,0.5834886,2.1776091,2261.4041,-1219.3078)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient4986"
       x1="378.57593"
       y1="550.60193"
       x2="396.20303"
       y2="534.4397"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient5029"
       cx="-177.84866"
       cy="977.87628"
       fx="-177.84866"
       fy="977.87628"
       r="214.40625"
       gradientTransform="matrix(-4.3979254,0,0,0.8381535,157.7573,7.8934)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient5071"
       x1="635.01666"
       y1="955.1875"
       x2="635.01666"
       y2="916.07141"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient4093"
       x1="725.1944"
       y1="818.79401"
       x2="1203.5627"
       y2="706.87708"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.55406355,0,0,1.3570202,756.34284,-342.2056)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45330"
       x1="-173.7991"
       y1="575.37054"
       x2="311.10379"
       y2="761.17273"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45376"
       x1="-119.0209"
       y1="1004.29"
       x2="262.57516"
       y2="838.52991"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45386"
       x1="-291.45709"
       y1="634.88446"
       x2="-311.27698"
       y2="718.14148"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45397"
       cx="-114.9978"
       cy="928.16541"
       fx="-114.9978"
       fy="928.16541"
       r="141.75"
       gradientTransform="matrix(-1.9828819,0,0,0.17328093,670.20169,662.37061)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       gradientTransform="matrix(-1.0615111,0,0,1,846.0634,0)"
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45435"
       x1="1122.9353"
       y1="1219.5676"
       x2="880.37115"
       y2="556.4939"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45667"
       cx="353.64563"
       cy="578.99084"
       fx="353.64563"
       fy="578.99084"
       r="19.90625"
       gradientTransform="matrix(-0.66446877,0,0,0.60240301,725.59023,237.34013)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45675"
       cx="280.81677"
       cy="589.37256"
       fx="280.81677"
       fy="589.37256"
       r="12.1875"
       gradientTransform="matrix(-1.6525345,0.44279527,0.69882176,2.6080383,561.54676,-1073.5435)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45685"
       x1="708.90918"
       y1="716.02667"
       x2="714.44299"
       y2="676.03387"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45722"
       cx="327.96649"
       cy="557.51978"
       fx="327.96649"
       fy="557.51978"
       r="13.30485"
       gradientTransform="matrix(-2.3906342,0,0,0.97564288,1255.9955,13.73248)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45730"
       cx="766.8573"
       cy="685.57983"
       fx="766.8573"
       fy="685.57983"
       r="1.767767"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.45,0,0,1.45,1592.1457,-408.38109)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45738"
       cx="766.8573"
       cy="685.57983"
       fx="766.8573"
       fy="685.57983"
       r="1.767767"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.35,0,0,1.35,1512.085,-343.19811)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45746"
       cx="766.8573"
       cy="685.57983"
       fx="766.8573"
       fy="685.57983"
       r="1.767767"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.25,0,0,1.25,1447.6493,-263.01512)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45754"
       cx="766.8573"
       cy="685.57983"
       fx="766.8573"
       fy="685.57983"
       r="1.767767"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.3,0,0,1.3,1490.4921,-297.29412)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45769"
       cx="313.45117"
       cy="619.71173"
       fx="313.45117"
       fy="619.71173"
       r="109.93874"
       gradientTransform="matrix(-0.33784556,-0.09052545,-0.0378666,0.14132006,619.27398,542.77101)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45779"
       cx="701.00989"
       cy="748.36664"
       fx="701.00989"
       fy="748.36664"
       r="64.31543"
       gradientTransform="matrix(-2.7390364,0,0,0.60204568,2492.4734,187.98233)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45783"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-10.749828,1.8226407,0.74383879,4.3871174,3728.1496,-2505.0532)"
       cx="327.96649"
       cy="557.51978"
       fx="327.96649"
       fy="557.51978"
       r="13.30485" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45809"
       cx="685.6181"
       cy="849.18103"
       fx="685.6181"
       fy="849.18103"
       r="107.32812"
       gradientTransform="matrix(-2.1932791,0,0,0.62487214,2033.969,107.97608)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="pad" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1,1261.7006,-95.31574)"
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient45857"
       x1="12.625"
       y1="651.35938"
       x2="75.455849"
       y2="703.35938"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45865"
       cx="153.04034"
       cy="688.18365"
       fx="153.04034"
       fy="688.18365"
       r="9.671875"
       gradientTransform="matrix(-1.3791737,0.36954847,0.51521864,1.9228221,967.27977,-787.27847)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45910"
       x1="-321.53955"
       y1="593.36163"
       x2="-316.84528"
       y2="592.36163"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient45912"
       x1="-363.87073"
       y1="584.32898"
       x2="-351.13623"
       y2="594.75592"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient45926"
       x1="1785.1564"
       y1="622.8125"
       x2="1707.875"
       y2="639.3125"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45956"
       cx="934.22583"
       cy="600.79486"
       fx="934.22583"
       fy="600.79486"
       r="46.2187"
       gradientTransform="matrix(-1.4659566,0.3928019,1.1203766,4.1813024,559.2104,-2217.9138)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient45997"
       cx="1107.1221"
       cy="697.65216"
       fx="1107.1221"
       fy="697.65216"
       r="15.2656"
       gradientTransform="matrix(-3.2277422,1.8635378,0.52453644,0.90852375,2880.5552,-1963.2155)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="radialGradient46058"
       cx="796.36688"
       cy="688.60022"
       fx="796.36688"
       fy="688.60022"
       r="107.35546"
       gradientTransform="matrix(-6.3199473,-1.6934248,-0.70601001,2.6348651,6328.7023,419.84265)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient46851"
       gradientUnits="userSpaceOnUse"
       x1="1509.25"
       y1="880.75"
       x2="1682.3734"
       y2="879.12689"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="radialGradient4622"
       cx="1280.5312"
       cy="729.67188"
       fx="1280.5312"
       fy="729.67188"
       r="131.0625"
       gradientTransform="matrix(-2.1857415,0,0,1.9796231,2779.4516,-810.38069)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient4631"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.9329282,1.892706,0.72379384,1.8864119,5887.5164,-3360.9904)"
       cx="1320.3447"
       cy="877.43134"
       fx="1320.3447"
       fy="877.43134"
       r="234.15125" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient4228"
       x1="1643.5519"
       y1="935.60083"
       x2="1573.2812"
       y2="860.3125"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="radialGradient4257"
       cx="1410.3885"
       cy="419.39191"
       fx="1410.3885"
       fy="419.39191"
       r="115.6568"
       gradientTransform="matrix(-4.1425179,1.1099843,0.40484053,1.5108854,5470.7941,-1875.6764)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4315"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.8539977,0,0,0.91276505,2476.2819,52.129585)"
       cx="915.00018"
       cy="492.60855"
       fx="915.00018"
       fy="492.60855"
       r="17.34375" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient4383"
       x1="904.46875"
       y1="494.51761"
       x2="902.03412"
       y2="483.73422"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4412"
       cx="-327.72684"
       cy="604.73523"
       fx="-327.72684"
       fy="604.73523"
       r="2.4498501"
       gradientTransform="matrix(0.86346145,1.4955591,0.93478167,-0.53969645,836.99039,1420.7615)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4416"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.75511765,1.3079021,0.81748891,-0.47197744,859.51696,1311.6086)"
       cx="-327.72684"
       cy="604.73523"
       fx="-327.72684"
       fy="604.73523"
       r="2.4498501" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4420"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.8061412,1.3962775,0.87272688,-0.5038691,837.3312,1354.6753)"
       cx="-327.72684"
       cy="604.73523"
       fx="-327.72684"
       fy="604.73523"
       r="2.4498501" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient4433"
       cx="-320.41714"
       cy="591.81335"
       fx="-320.41714"
       fy="591.81335"
       r="2.4498501"
       gradientTransform="matrix(-3.201738,0,0,7.1471463,86.380604,-3637.9633)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5926"
       cx="221.21088"
       cy="612.97839"
       fx="221.21088"
       fy="612.97839"
       r="5.0026083"
       gradientTransform="matrix(-2.7464701,0,0,3.9436561,1132.5557,-1812.7106)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5928"
       cx="687.13098"
       cy="699.10327"
       fx="687.13098"
       fy="699.10327"
       r="5.6568551"
       gradientTransform="matrix(-1,0,0,0.60937482,1261.0725,177.51006)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5930"
       cx="690.84332"
       cy="709.22369"
       fx="690.84332"
       fy="709.22369"
       r="9.7227154"
       gradientTransform="matrix(-1,0,0,0.38636379,1261.0725,339.62808)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5932"
       cx="692.21338"
       cy="719.12323"
       fx="692.21338"
       fy="719.12323"
       r="10.297245"
       gradientTransform="matrix(-1,0,0,0.32188852,1261.0725,392.06842)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5934"
       cx="203.10042"
       cy="622.58588"
       fx="203.10042"
       fy="622.58588"
       r="4.6720352"
       gradientTransform="matrix(-1,0,0,0.99999893,790.17051,6.7e-4)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5936"
       cx="204.07269"
       cy="611.80249"
       fx="204.07269"
       fy="611.80249"
       r="4.6720352"
       gradientTransform="matrix(-1,0,0,0.99999893,790.17051,6.6e-4)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5938"
       cx="204.60303"
       cy="601.37268"
       fx="204.60303"
       fy="601.37268"
       r="4.6720352"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5940"
       cx="205.13335"
       cy="590.41254"
       fx="205.13335"
       fy="590.41254"
       r="4.6720352"
       gradientTransform="matrix(-1,0,0,0.99999893,790.17051,6.4e-4)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5942"
       cx="185.59953"
       cy="596.95325"
       fx="185.59953"
       fy="596.95325"
       r="4.67203"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5944"
       cx="183.47821"
       cy="607.38306"
       fx="183.47821"
       fy="607.38306"
       r="4.6720352"
       gradientTransform="matrix(-1,0,0,0.99999893,790.17051,6.5e-4)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient5946"
       cx="183.47821"
       cy="618.6084"
       fx="183.47821"
       fy="618.6084"
       r="4.6720352"
       gradientTransform="matrix(-1,0,0,0.99999893,790.17051,6.7e-4)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       r="5.833631"
       fy="471.85678"
       fx="852.59399"
       cy="471.85678"
       cx="852.59399"
       id="radialGradient4539"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-0.84848485,0,0,0.84848485,1129.2399,-21.9625)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="380.8219"
       x2="472.68204"
       y1="512.18945"
       x1="-444.84842"
       id="linearGradient4549"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="809.27441"
       x2="383.55234"
       y1="382.819"
       x1="377.9838"
       id="linearGradient4579"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientTransform="matrix(-0.98425864,0,0,1,774.68471,0)"
       y2="391.97586"
       x2="124.50933"
       y1="378.57635"
       x1="393.85141"
       gradientUnits="userSpaceOnUse"
       id="linearGradient4583"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="363.71582"
       x2="353.62738"
       y1="346.71582"
       x1="281.39426"
       id="linearGradient4713"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="520.76343"
       x2="1008.5662"
       y1="485.05453"
       x1="912.2807"
       id="linearGradient4745"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="561.34583"
       x2="171.52371"
       y1="388.25549"
       x1="61.169956"
       id="linearGradient4865"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientTransform="matrix(-0.96109008,0,0,0.96109008,768.36873,28.15011)"
       gradientUnits="userSpaceOnUse"
       y2="705.9679"
       x2="553.82434"
       y1="741.85358"
       x1="564.38043"
       id="linearGradient4273"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8494361,-0.08234414,-0.00458903,0.10306899,1171.3922,778.89239)"
       r="922.95581"
       fy="823.25568"
       fx="442.6409"
       cy="823.25568"
       cx="442.6409"
       id="radialGradient4285"
       xlink:href="#linearGradient4199"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="754.6463"
       x2="1101.3002"
       y1="746.42828"
       x1="1098.512"
       id="linearGradient4295"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="854.92743"
       x2="1068.5168"
       y1="834.79272"
       x1="1065.2664"
       id="linearGradient4374"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="934.2981"
       x2="1054.5625"
       y1="906.73865"
       x1="1066"
       id="linearGradient4393"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.3361723,0,0,0.21529333,1494.3656,357.37773)"
       r="46.875"
       fy="581.33392"
       fx="679.94489"
       cy="581.33392"
       cx="679.94489"
       id="radialGradient4421"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="489.52512"
       x2="148.58244"
       y1="467.10187"
       x1="148.58244"
       id="linearGradient4429"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="773.98456"
       x2="689.27814"
       y1="725.80634"
       x1="685.53552"
       id="linearGradient4642"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.2748298,0,0,1.9505402,2843.1134,-586.40285)"
       r="200.7495"
       fy="633.16608"
       fx="892.45636"
       cy="633.16608"
       cx="892.45636"
       id="radialGradient4663"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-8.5217328,0,0,2.7863462,10396.48,-1675.5041)"
       r="14.666385"
       fy="879.93628"
       fx="1215.1865"
       cy="879.93628"
       cx="1215.1865"
       id="radialGradient4686"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-9.2808747,0,0,5.6692371,9817.4711,-2164.726)"
       r="86.96875"
       fy="552.89392"
       fx="1035.4177"
       cy="552.89392"
       cx="1035.4177"
       id="radialGradient4688"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="532.14777"
       x2="1251.5374"
       y1="526.77277"
       x1="1241.8687"
       id="linearGradient4436"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="740.35199"
       x2="1078.4459"
       y1="741.2536"
       x1="977.38947"
       id="linearGradient4331"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="474.73004"
       x2="484.96198"
       y1="339.58124"
       x1="445.97418"
       id="linearGradient4375"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.4055926,0,0,1.4761598,-13.753496,162.37273)"
       r="177.6875"
       fy="-12.689153"
       fx="-279.14331"
       cy="-12.689153"
       cx="-279.14331"
       id="radialGradient4377"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.0063639,0.06628027,0.02643961,0.80035121,665.78417,351.64196)"
       r="128.5"
       fy="478.21246"
       fx="-115.80064"
       cy="478.21246"
       cx="-115.80064"
       id="radialGradient4435"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="827.1875"
       x2="424.5625"
       y1="907.16022"
       x1="432.26117"
       id="linearGradient4384"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       gradientUnits="userSpaceOnUse"
       y2="736.93555"
       x2="536.43951"
       y1="755.23419"
       x1="551.62274"
       id="linearGradient4354"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.3342675,0.7703397,2.3316551,4.0385452,-170.0123,-3253.1432)"
       r="32.065636"
       fy="766.62598"
       fx="1072.8973"
       cy="766.62598"
       cx="1072.8973"
       id="radialGradient4371"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8326469,0.49105626,0.71744274,2.6775327,1507.4403,-2146.4476)"
       r="11.21875"
       fy="908.24524"
       fx="1076.5551"
       cy="908.24524"
       cx="1076.5551"
       id="radialGradient4423"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       y2="-309.7182"
       x2="884.85364"
       y1="1133.7296"
       x1="779.34192"
       id="linearGradient4503"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientTransform="matrix(-0.97742364,0,0,1,1249.8231,-93.57727)"
       gradientUnits="userSpaceOnUse"
       y2="792.64209"
       x2="607.63861"
       y1="747.40326"
       x1="605.11694"
       id="linearGradient4513"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.9296301,1.3208904,0.66594359,2.4853353,417.09073,-901.82214)"
       r="203.71875"
       fy="693.60535"
       fx="230.86888"
       cy="693.60535"
       cx="230.86888"
       id="radialGradient4582"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       r="154.82812"
       fy="706.38556"
       fx="139.51181"
       cy="706.38556"
       cx="139.51181"
       gradientTransform="matrix(-3.107203,0,0,0.48823445,1145.1137,346.19282)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4586"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8648625,0,0,0.7864096,788.42562,170.95727)"
       r="262.39059"
       fy="620.40253"
       fx="325.78909"
       cy="620.40253"
       cx="325.78909"
       id="radialGradient4610"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       r="5.625"
       fy="685.75861"
       fx="149.73985"
       cy="685.75861"
       cx="149.73985"
       gradientTransform="matrix(-2.3422844,1.3523185,4.0531991,7.0203468,-1319.8354,-4416.3521)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4613"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="955.1875"
       x2="57.75"
       y1="872.68713"
       x1="107.81454"
       id="linearGradient4633"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-9.4058231,0,0,6.054264,8370.2565,-4303.9642)"
       r="133.56349"
       fy="881.54913"
       fx="849.38562"
       cy="881.54913"
       cx="849.38562"
       id="radialGradient4678"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       r="245.65828"
       fy="571.17499"
       fx="114.66085"
       cy="571.17499"
       cx="114.66085"
       gradientTransform="matrix(-1.7264066,0.45358695,0.18630981,0.70911762,934.46976,164.74141)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4694"
       xlink:href="#linearGradient4199"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.57603115,0,0,0.18605437,1001.9944,532.08155)"
       r="838.69739"
       fy="1165.845"
       fx="937.91669"
       cy="1165.845"
       cx="937.91669"
       id="radialGradient4740"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7224685,0.72948324,0.55367485,2.0663427,49.710404,-460.89189)"
       r="140.6875"
       fy="713.84631"
       fx="-77.611786"
       cy="713.84631"
       cx="-77.611786"
       id="radialGradient4861"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.5739076,0,0,1.8535523,1535.6342,-761.58781)"
       r="48.892323"
       fy="780.28088"
       fx="106.67117"
       cy="780.28088"
       cx="106.67117"
       id="radialGradient4872"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       r="18.793747"
       fy="759.31091"
       fx="301.83124"
       cy="759.31091"
       cx="301.83124"
       spreadMethod="reflect"
       gradientTransform="matrix(-1.0799989,0,0,0.7699978,1285.2187,74.788277)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4901"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.6029422,0,0,1.6255789,551.00635,-410.56795)"
       r="15.828563"
       fy="656.59241"
       fx="-145.29373"
       cy="656.59241"
       cx="-145.29373"
       id="radialGradient4919"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.0964871,0,0,3.3530515,601.08256,-1518.6598)"
       r="3.765625"
       fy="645.40015"
       fx="-172.44885"
       cy="645.40015"
       cx="-172.44885"
       id="radialGradient4929"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientTransform="matrix(-1.0805599,0,0,1.0353274,844.94667,-28.0879)"
       gradientUnits="userSpaceOnUse"
       y2="757.42273"
       x2="590.09802"
       y1="672.03125"
       x1="466.46997"
       id="linearGradient4954"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.2888759,0,0,0.40868738,1009.2739,257.38729)"
       r="50.65625"
       fy="435.28125"
       fx="758.46875"
       cy="435.28125"
       cx="758.46875"
       id="radialGradient4956"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-7.2158396,1.9334784,8.7375967,32.609155,1114.1763,-15496.499)"
       r="1.3904316"
       fy="448.50107"
       fx="682.58313"
       cy="448.50107"
       cx="682.58313"
       id="radialGradient4964"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="628.84375"
       x2="1551.609"
       y1="574.34375"
       x1="1568.7667"
       id="linearGradient4966"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1,800.91925,1.67157)"
       gradientUnits="userSpaceOnUse"
       y2="525.42609"
       x2="921.40564"
       y1="278.9119"
       x1="859.86249"
       id="linearGradient4993"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       gradientUnits="userSpaceOnUse"
       y2="728.89148"
       x2="602.48834"
       y1="727.37585"
       x1="631.0976"
       id="linearGradient5004"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientTransform="matrix(-0.81950664,0,0,1.0062081,642.27132,5.18651)"
       gradientUnits="userSpaceOnUse"
       y2="209.29445"
       x2="778.30328"
       y1="402.96402"
       x1="33.169601"
       id="linearGradient5032"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.2616739,0,-1.3143361e-8,2.0946394,2301.8777,-724.45876)"
       r="10.895804"
       fy="653.24463"
       fx="466.59195"
       cy="653.24463"
       cx="466.59195"
       id="radialGradient5291"
       xlink:href="#linearGradient4199"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.493942,1.4720973,1.2843225,4.7931567,4670.57,-4392.993)"
       r="8.1765404"
       fy="754.94305"
       fx="978.15607"
       cy="754.94305"
       cx="978.15607"
       id="radialGradient6749"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-6.5351103,0,0,9.9222127,10132.236,-6099.7682)"
       r="57.054199"
       fy="713.50122"
       fx="1586.2086"
       cy="713.50122"
       cx="1586.2086"
       id="radialGradient6766"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.4845977,0.39779677,0.15710652,0.58632952,1969.1917,-542.49277)"
       r="141.5726"
       fy="694.69849"
       fx="1740.0199"
       cy="694.69849"
       cx="1740.0199"
       id="radialGradient6792"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8656457,0.02396202,0.0010496,0.08172036,1305.1804,302.27923)"
       r="28.910055"
       fy="345.66232"
       fx="595.95135"
       cy="345.66232"
       cx="595.95135"
       id="radialGradient6990"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.4878905,0,0,0.47890602,1308.5161,193.41563)"
       r="73.698837"
       fy="471.07352"
       fx="1056.373"
       cy="471.07352"
       cx="1056.373"
       id="radialGradient7015"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="544.23901"
       x2="1153.5848"
       y1="588.68561"
       x1="1126.4062"
       id="linearGradient7033"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="809.73486"
       x2="686.28125"
       y1="707.91144"
       x1="664.45135"
       id="linearGradient7049"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.1336925,0,0,0.68492528,3231.4374,78.260357)"
       r="90.578102"
       fy="486.69434"
       fx="905.62708"
       cy="486.69434"
       cx="905.62708"
       id="radialGradient7069"
       xlink:href="#linearGradient4199"
       inkscape:collect="always" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1.0789715,788.66791,-28.15924)"
       gradientUnits="userSpaceOnUse"
       y2="350.86053"
       x2="789.0495"
       y1="364.47232"
       x1="610.1131"
       id="linearGradient7108"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.7850015,0,0,1.0897257,2093.4511,-182.56591)"
       r="36.34375"
       fy="948.15344"
       fx="1047.5126"
       cy="948.15344"
       cx="1047.5126"
       id="radialGradient4443"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="814.14148"
       x2="133.28763"
       y1="717.61029"
       x1="124.28736"
       id="linearGradient4472"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)" />
    <radialGradient
       r="18.375"
       fy="896.22961"
       fx="756.2392"
       cy="896.22961"
       cx="756.2392"
       gradientTransform="matrix(-65.646745,37.901166,18.402692,31.874397,33673.808,-56422.657)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4482"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.4634574,0,0,1.3220959,959.85289,-142.69409)"
       r="77.068253"
       fy="445.98709"
       fx="386.66049"
       cy="445.98709"
       cx="386.66049"
       id="radialGradient4498"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="reflect"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,0.52203814,790.17051,291.11652)"
       r="49.984375"
       fy="659.06335"
       fx="-348.5426"
       cy="659.06335"
       cx="-348.5426"
       id="radialGradient4446"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.2069111,0.01743723,0.00388265,0.49140034,1622.9845,234.22736)"
       r="32.194519"
       fy="470.08041"
       fx="302.50897"
       cy="470.08041"
       cx="302.50897"
       id="radialGradient4459"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,0.13446602,1261.426,410.35407)"
       r="32.1875"
       fy="583.54688"
       fx="310.9375"
       cy="583.54688"
       cx="310.9375"
       id="radialGradient4472"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.2169067,0,0,0.18825504,2344.8801,374.15667)"
       r="72.3125"
       fy="567.64752"
       fx="862.88605"
       cy="567.64752"
       cx="862.88605"
       id="radialGradient4484"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       r="36.34375"
       fy="958.91382"
       fx="1054.8016"
       cy="958.91382"
       cx="1054.8016"
       gradientTransform="matrix(-1.9892804,0,0,2.3698095,2300.5335,-1458.6006)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4488"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="846.97015"
       x2="1322.137"
       y1="762.34375"
       x1="1135.1562"
       id="linearGradient4532"
       xlink:href="#linearGradient4489"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.2287975,1.1331029,0.5107174,1.9060233,5597.1414,-2229.1919)"
       r="10.7812"
       fy="543.48859"
       fx="1438.512"
       cy="543.48859"
       cx="1438.512"
       id="radialGradient4549"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       r="28.813154"
       fy="520.51562"
       fx="655.31415"
       cy="520.51562"
       cx="655.31415"
       gradientTransform="matrix(0.01464218,0.89577308,-0.08711171,0.00255632,145.7081,-56.40843)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4565"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.65571441,0,0,0.53894596,400.48763,264.25747)"
       r="72.167168"
       fy="601.75659"
       fx="1161.8955"
       cy="601.75659"
       cx="1161.8955"
       id="radialGradient4587"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8106689,0,0,0.32890763,2264.5033,253.67554)"
       r="56.84375"
       fy="503.31216"
       fx="1230.4635"
       cy="503.31216"
       cx="1230.4635"
       id="radialGradient4608"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.2388653,0,0,0.32168274,1553.3771,263.1341)"
       r="72.1605"
       fy="528.82538"
       fx="1223.7216"
       cy="528.82538"
       cx="1223.7216"
       id="radialGradient4628"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.3110397,0,0,0.25824251,1755.1857,262.69177)"
       r="98.0625"
       fy="377.85928"
       fx="761.34143"
       cy="377.85928"
       cx="761.34143"
       id="radialGradient4703"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       r="95.542603"
       fy="572.09497"
       fx="333.04352"
       cy="572.09497"
       cx="333.04352"
       spreadMethod="reflect"
       gradientTransform="matrix(-1.5151756,0,0,0.73429799,959.74641,162.23916)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4442"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.6946334,0,0,2.3682122,2064.347,-998.52064)"
       r="117.37099"
       fy="689.21875"
       fx="271.41129"
       cy="689.21875"
       cx="271.41129"
       id="radialGradient4453"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       spreadMethod="reflect"
       r="253.17184"
       fy="600.16394"
       fx="1168.3894"
       cy="600.16394"
       cx="1168.3894"
       gradientTransform="matrix(-1.5765299,-2.7306298,-0.74823191,0.43199191,2291.5559,3532.7689)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient4456"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <linearGradient
       gradientTransform="matrix(-1,0,0,1,790.17051,-80)"
       y2="732.99005"
       x2="496.31079"
       y1="304.48334"
       x1="-224.35489"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3679"
       xlink:href="#linearGradient4199"
       inkscape:collect="always" />
    <linearGradient
       y2="433.5864"
       x2="1024.4662"
       y1="268.83051"
       x1="712.66107"
       gradientTransform="matrix(-1,0,0,1.0026586,1267.1838,-95.05962)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient4412"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.7147544,0,0,22.115309,7130.7757,-16577.347)"
       r="18.2344"
       fy="788.45642"
       fx="1592.3293"
       cy="788.45642"
       cx="1592.3293"
       id="radialGradient4410"
       xlink:href="#linearGradient4489"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.5098854,0.94047096,1.8260533,6.8149237,3901.5939,-6320.9953)"
       r="9.2278137"
       fy="805.00806"
       fx="1637.7278"
       cy="805.00806"
       cx="1637.7278"
       id="radialGradient4540"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-6.2075806,3.5839484,8.1030546,14.034902,-594.1309,-15388.613)"
       r="19.813499"
       fy="895.98657"
       fx="1047.424"
       cy="895.98657"
       cx="1047.424"
       id="radialGradient4564"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.8092124,1.0206754,2.3100487,8.6212189,4139.3296,-8026.4308)"
       r="19.298254"
       fy="817.85242"
       fx="1700.804"
       cy="817.85242"
       cx="1700.804"
       id="radialGradient4611"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="671.21875"
       x2="1671.7284"
       y1="664.01306"
       x1="1680.4392"
       id="linearGradient4654"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="740.84375"
       x2="1634.9688"
       y1="733.57874"
       x1="1551.8553"
       id="linearGradient4452"
       xlink:href="#linearGradient4060"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.3523157,0,0,3.4104128,1211.2493,-1602.5289)"
       r="49.803101"
       fy="670.81226"
       fx="1199.213"
       cy="670.81226"
       cx="1199.213"
       id="radialGradient4474"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="677.46875"
       x2="1659.2288"
       y1="668.21875"
       x1="1609.2344"
       id="linearGradient4490"
       xlink:href="#linearGradient4199"
       inkscape:collect="always"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.0491781,0,0,5.2686392,2980.2164,-2957.0425)"
       r="6.625"
       fy="670.34601"
       fx="1638.5625"
       cy="670.34601"
       cx="1638.5625"
       id="radialGradient4499"
       xlink:href="#linearGradient4060"
       inkscape:collect="always" />
    <radialGradient
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,2.9758498,1261.0725,-1703.7173)"
       r="21.231997"
       fy="813.89795"
       fx="1694.0446"
       cy="813.89795"
       cx="1694.0446"
       id="radialGradient4509"
       xlink:href="#linearGradient4199"
       inkscape:collect="always" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient33024"
       id="radialGradient33030"
       cx="534.59802"
       cy="726.17883"
       fx="534.59802"
       fy="726.17883"
       r="113.09375"
       gradientTransform="matrix(-1.0173606,0,0,1.4879801,796.34981,-351.11693)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient33024"
       id="radialGradient33038"
       cx="581.23865"
       cy="719.52686"
       fx="581.23865"
       fy="719.52686"
       r="83.015602"
       gradientTransform="matrix(-0.72693454,0,0,1.4734811,631.45429,-340.68233)"
       gradientUnits="userSpaceOnUse"
       spreadMethod="reflect" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient33024"
       id="radialGradient33056"
       cx="1193.3856"
       cy="675.41656"
       fx="1193.3856"
       fy="675.41656"
       r="101.85955"
       gradientTransform="matrix(-1.236981,0,0,1.8453821,1064.788,-573.29998)"
       gradientUnits="userSpaceOnUse" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient33024"
       id="radialGradient33068"
       cx="1194.8346"
       cy="667.26807"
       fx="1194.8346"
       fy="667.26807"
       r="60.822399"
       gradientTransform="matrix(-1.1562213,0,0,2.775896,977.03177,-1181.48)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33111"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(24.605328,158.09673)"
       x1="148.58244"
       y1="467.10187"
       x2="148.58244"
       y2="489.52512" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33243"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.3346339,1.4294108,0.23801625,0.88828874,4214.2743,-985.90514)"
       spreadMethod="reflect"
       cx="806.10632"
       cy="654.9527"
       fx="806.10632"
       fy="654.9527"
       r="112.21707" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient33246"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.6175943,0,0,1.6175943,2007.8175,-639.9153)"
       x1="1174.0162"
       y1="954.68335"
       x2="1276.6627"
       y2="759.3476" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33249"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,795.68828,-0.84987)"
       x1="674.14972"
       y1="894.7962"
       x2="726.05646"
       y2="771.46509" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33262"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.1642703,1.3837621,1.4711292,5.4903289,4882.883,-5675.0423)"
       cx="1178.9637"
       cy="874.30035"
       fx="1178.9637"
       fy="874.30035"
       r="15.0056" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33265"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.222729,-1.399426,-0.13766163,0.51376015,6797.6425,2113.5294)"
       cx="1301.0637"
       cy="878.8595"
       fx="1301.0637"
       fy="878.8595"
       r="192.92191" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33268"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.9417573,0,0,0.53826943,1482.4397,359.84723)"
       cx="755.65735"
       cy="768.83527"
       fx="755.65735"
       fy="768.83527"
       r="38.046848" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33271"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,4.2674053,1263.9433,-2611.3658)"
       cx="1584.736"
       cy="778.15222"
       fx="1584.736"
       fy="778.15222"
       r="19.607841" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33274"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7954207,0.74903074,0.58970677,2.2008156,2315.1799,-1737.4178)"
       spreadMethod="reflect"
       cx="1098.421"
       cy="772.53601"
       fx="1098.421"
       fy="772.53601"
       r="9.6718054" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33277"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.1255515,0.30159063,0.23744024,0.88613906,749.10183,-246.44785)"
       spreadMethod="reflect"
       cx="1098.421"
       cy="772.53601"
       fx="1098.421"
       fy="772.53601"
       r="9.6718054" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33280"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.9422147,1.0563132,7.2621535,27.102726,66.451004,-22827.121)"
       cx="1580.3563"
       cy="808.94299"
       fx="1580.3563"
       fy="808.94299"
       r="9.75" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33283"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.1741092,0,0,0.24787278,1705.4677,547.98097)"
       spreadMethod="reflect"
       cx="682.65173"
       cy="1095.0975"
       fx="682.65173"
       fy="1095.0975"
       r="171.06078" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33286"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.0068511,-0.18321543,-0.01519618,0.16645146,1677.4909,793.966)"
       cx="817.44873"
       cy="1091.7655"
       fx="817.44873"
       fy="1091.7655"
       r="152.48441" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33441"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.96248035,0,0,0.96248035,794.53692,-267.96178)"
       x1="-490.83948"
       y1="191.6571"
       x2="5.0766568"
       y2="828.04187" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33444"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-7.0365187,0,0,2.3086832,3615.8714,-682.94303)"
       cx="468.23328"
       cy="534.58746"
       fx="468.23328"
       fy="534.58746"
       r="188.51971" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33448"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-15.93538,4.2698721,1.103432,4.1180642,-4150.4493,-1568.8597)"
       cx="-284.00223"
       cy="890.61469"
       fx="-284.00223"
       fy="890.61469"
       r="40.312859" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33453"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8581521,0.49789034,1.0641929,3.9716221,503.55317,-2423.3812)"
       cx="560.75226"
       cy="721.98041"
       fx="560.75226"
       fy="721.98041"
       r="2.8071649" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient33456"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="681.961"
       y1="598.375"
       x2="684.18927"
       y2="858.46887" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33459"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,797.29111,0)"
       x1="-266.75012"
       y1="614.68616"
       x2="39.441818"
       y2="735.48523" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient33462"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="101.48404"
       y1="877.67859"
       x2="46.436291"
       y2="906.75067" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33465"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1263.6781,-93.63273)"
       x1="137.0625"
       y1="879.59625"
       x2="130.94035"
       y2="906.37158" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient33468"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       spreadMethod="reflect"
       x1="120.46875"
       y1="843.34375"
       x2="545.5"
       y2="850.96875" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33471"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="686.97058"
       y1="815.12506"
       x2="679.90625"
       y2="945.125" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33474"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.4347621,1.4562401,1.6170801,6.035025,3270.4735,-5456.2971)"
       cx="776.93317"
       cy="814.18262"
       fx="776.93317"
       fy="814.18262"
       r="38.283386" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33477"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.742062,-0.04992178,-0.01565018,0.85962013,1073.8912,29.63709)"
       cx="132.04346"
       cy="958.20227"
       fx="132.04346"
       fy="958.20227"
       r="158.13705" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33482"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,792.62505,-1.34425)"
       x1="1197.629"
       y1="817.17719"
       x2="981.02673"
       y2="510.3891" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient33488"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       spreadMethod="reflect"
       x1="1061.0504"
       y1="590.36963"
       x2="1146.5681"
       y2="642.13989" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33491"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.0000005,1.8341344e-6,1.3824336e-5,7.5372574,790.1631,-3729.0019)"
       cx="939.09802"
       cy="571.68311"
       fx="939.09802"
       fy="571.68311"
       r="7.2336998" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient33497"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="584.48749"
       y1="410.99448"
       x2="767.58899"
       y2="479.68484" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33500"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.1315732,0,0,0.97937551,3680.1926,7.2982)"
       cx="921.72485"
       cy="445.73325"
       fx="921.72485"
       fy="445.73325"
       r="36.1875" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33503"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.6601329,0,0,0.48192503,1395.2313,267.65957)"
       cx="918.15088"
       cy="507.20551"
       fx="918.15088"
       fy="507.20551"
       r="17.0625" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33507"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.7788572,0,0,0.58394584,1510.9574,206.42927)"
       cx="930.85852"
       cy="494.89035"
       fx="930.85852"
       fy="494.89035"
       r="20.859375" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33511"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="1623.3438"
       y1="707.23425"
       x2="1337.5938"
       y2="453.98422" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33515"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.6275345,0,0,2.9604985,6260.3976,-1127.9175)"
       cx="1376.019"
       cy="522.52771"
       fx="1376.019"
       fy="522.52771"
       r="10.70335" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33518"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.7552422,0.47031574,0.37545492,1.4012168,2131.7027,-969.02964)"
       cx="1396.5807"
       cy="516.17615"
       fx="1396.5807"
       fy="516.17615"
       r="21.873421" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33524"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.9389834,0,0,1.6254941,1622.2428,-247.8575)"
       cx="893.61987"
       cy="399.04092"
       fx="893.61987"
       fy="399.04092"
       r="40.163181" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33530"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.9297802,-0.58419809,-0.15348619,0.81233493,2803.9383,475.17379)"
       cx="663.59058"
       cy="465.72427"
       fx="663.59058"
       fy="465.72427"
       r="137.98434" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient33533"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,796.67051,-4)"
       x1="734.84375"
       y1="402.18137"
       x2="732.46875"
       y2="272.18137" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33538"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-4.2644558,0,0,5.7479321,3611.2097,-1924.3258)"
       cx="875.70642"
       cy="404.17087"
       fx="875.70642"
       fy="404.17087"
       r="25.085894" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33543"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="1089.9375"
       y1="540.34375"
       x2="1127.5349"
       y2="510.625" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient33546"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="600.12323"
       y1="420.28662"
       x2="687.1297"
       y2="518.77649" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="linearGradient33549"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="677.69183"
       y1="469.35123"
       x2="650.54163"
       y2="480.46289" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33552"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="660.4574"
       y1="578.31335"
       x2="634.84375"
       y2="390.18137" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient33556"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,792.06368,1)"
       x1="1369.1875"
       y1="502.20319"
       x2="1415.5781"
       y2="494.68744" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33560"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="1345.8323"
       y1="541.97284"
       x2="1308.2188"
       y2="549.35425" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33563"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.2693603,-2.300736e-7,-2.1921279e-7,2.1622334,1863.7971,-471.68595)"
       cx="861.92224"
       cy="406.59161"
       fx="861.92224"
       fy="406.59161"
       r="37.734348" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33566"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-8.5113034,0.21168049,0.09587258,3.8548693,4070.8981,-1703.1077)"
       cx="378.62469"
       cy="535.82904"
       fx="378.62469"
       fy="535.82904"
       r="37.117935" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33790"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="-259.74573"
       y1="621.43835"
       x2="270.31403"
       y2="821.48523" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33795"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.786554,0,0,0.4461382,916.12961,436.8738)"
       cx="160.14043"
       cy="788.77765"
       fx="160.14043"
       fy="788.77765"
       r="113.58259" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33799"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.0959763,0.017058,0.01575728,1.9361528,400.91577,-695.07028)"
       cx="-344.40204"
       cy="748.75073"
       fx="-344.40204"
       fy="748.75073"
       r="59.2187" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33802"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.88888888,0,0,0.88888888,1252.816,-6.79866)"
       cx="65.535713"
       cy="787.67859"
       fx="65.535713"
       fy="787.67859"
       r="3.2142856" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4199"
       id="radialGradient33805"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-3.9630907,0,0,2.1139444,1886.7476,-894.29284)"
       cx="207.94464"
       cy="719.02258"
       fx="207.94464"
       fy="719.02258"
       r="153.40625" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33810"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="-361.14615"
       y1="595"
       x2="-329.72885"
       y2="595" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33813"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,790.17051,0)"
       x1="-358.42322"
       y1="626.24847"
       x2="-376.59366"
       y2="621.65228" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33816"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.7028463,0,0,0.93548483,643.15484,33.71422)"
       spreadMethod="pad"
       cx="-265.96017"
       cy="458.75092"
       fx="-265.96017"
       fy="458.75092"
       r="94.796875" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="linearGradient33819"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1261.0725,-95.57727)"
       x1="492.46875"
       y1="907.5"
       x2="517.21875"
       y2="904.02533" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33822"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.2843792,0,0,0.15571692,591.61352,585.80054)"
       cx="-154.59375"
       cy="693.84375"
       fx="-154.59375"
       fy="693.84375"
       r="179.25" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="radialGradient33827"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.8940085,0,0,0.1907676,1526.6695,701.5562)"
       cx="286.4209"
       cy="738.95831"
       fx="286.4209"
       fy="738.95831"
       r="166.80251" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4489"
       id="radialGradient33830"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-5.0096964,0,0,2.7521538,-128.4288,-962.57974)"
       spreadMethod="pad"
       cx="-227.25954"
       cy="574.44873"
       fx="-227.25954"
       fy="574.44873"
       r="94.796875" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4060"
       id="linearGradient33847"
       x1="348.06387"
       y1="245.13362"
       x2="797.62347"
       y2="238.77939"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1,0,0,1,1379.8364,152.12866)" />
  </defs>
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     style="display:inline"
     transform="translate(527.86674,-303.54418)">
    <g
       id="g3689"
       transform="translate(22,0)">
      <path
         inkscape:connector-curvature="0"
         id="path4947"
         d="m 829.11765,426.72241 c 22.55587,0.44516 46.98449,-2.48983 73.4375,23.625 0.22265,0.21981 0.46456,0.4323 0.6875,0.65625 l -0.5625,0.59375 -7.9375,8.75 c -18.97636,-8.572 -38.90213,-16.89335 -56.875,-24.46875 -6.0203,-3.31174 -9.61649,-6.41841 -8.75,-9.15625 z"
         style="fill:url(#radialGradient33566);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect4524"
         d="m 282.8364,766.78491 c 283.29683,0.20872 564.41629,8.85156 700.40625,33.1875 114.16815,20.43084 575.88135,57.13146 172.56255,77.21875 -82.5475,6.6222 -577.42933,33.1368 -728.62505,24.71875 -239.14895,-13.31498 -917.15625,-99.75 -917.15625,-99.75 -177.544,-12.68171 300.6511,-35.72286 772.8125,-35.375 z"
         style="fill:url(#radialGradient4285);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4962"
         d="m 828.99265,427.75366 c 19.17966,2.31796 34.21841,8.23908 45.625,23.75 -12.54488,-5.42261 -25.05895,-10.69733 -36.75,-15.625 -5.26776,-2.89777 -8.68484,-5.65095 -8.875,-8.125 z"
         style="fill:url(#radialGradient4976);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46819"
         d="m 140.1176,339.84741 c 176.5754,8.52565 359.84253,-10.65863 528.5938,53.25 56.20203,12.52699 109.1141,53.37096 164.96875,53.21875 55.56448,2.02817 56.01859,64.89502 121.5,54.5625 99.06735,13.81763 193.65865,80.02702 229.28125,174.625 -17.5812,55.68085 13.258,122.20627 -23.25,171.59375 -45.5022,20.75133 -100.594,-3.30488 -149.125,14.03125 -65.10616,16.36998 -132.65929,-3.30379 -198.8125,3.15625 -124.81082,10.05623 -250.17071,5.46599 -375.28125,3.15625 -38.67931,2.14286 -245.61495,56.82769 -288.84375,-29.6875 -120.862596,-10.6902 -261.913,-26.25914 -383.3437,-38.53125 -172.5682,32.95462 -209.4979,-45.75495 -230.0626,-160.5625 0.3639,-52.52398 -15.2384,-124.248 26.0313,-162.9375 105.8342,-38.92613 214.829,-71.07529 324.1875,-99.96875 83.101904,-20.73451 168.264704,-35.49901 254.1562,-35.90625 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4978"
         d="m 902.7114,451.59741 -7.96875,8.75 -4.25,-1.84375 12.21875,-6.90625 z"
         style="fill:url(#linearGradient4986);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5590"
         d="m 348.6176,551.25366 c 47.27724,0 85.62505,75.34041 85.62505,168.28125 0,92.94083 -38.80243,155.85227 -85.62505,162.28125 -49.8668,6.84697 -97.3019,5.71116 -144.5,6 47.2772,0 85.625,-75.34042 85.625,-168.28125 0,-92.60417 -38.084,-167.73813 -85.125,-168.28125 l 144,0 z"
         style="fill:url(#radialGradient33030);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path33002"
         d="m 208.0239,559.78491 c 1.4646,0 11.3159,0.076 21.2187,0.21875 4.9516,0.072 9.8886,0.17435 13.7813,0.28125 1.9464,0.053 3.6439,0.093 4.9375,0.15625 l -41.1562,0 a 1.50015,1.50015 0 0 1 1.2187,-0.65625 z m 39.9375,0.65625 c 1.2936,0.063 2.0647,0.1158 2.7188,0.25 2.8497,0.585 5.6576,1.45695 8.4062,2.59375 2.7486,1.1368 5.4318,2.5337 8.0625,4.1875 2.6307,1.6539 5.2185,3.5498 7.7187,5.6875 2.5003,2.1377 4.9223,4.50335 7.2813,7.09375 2.359,2.5905 4.6368,5.39225 6.8437,8.40625 2.2071,3.0141 4.3313,6.24645 6.375,9.65625 2.0438,3.4097 4.0064,7.00345 5.875,10.78125 1.8687,3.7778 3.6626,7.7566 5.3438,11.875 1.6812,4.1185 3.269,8.3807 4.75,12.8125 1.481,4.4318 2.8573,9.032 4.125,13.75 1.2677,4.718 2.4276,9.55465 3.4688,14.53125 1.0411,4.9768 1.9487,10.07305 2.75,15.28125 0.8012,5.2081 1.4835,10.5254 2.0312,15.9375 0.5477,5.4121 0.9693,10.9116 1.25,16.5 0.2807,5.5885 0.4375,11.2626 0.4375,17 0,5.7375 -0.1568,11.4117 -0.4375,17 -0.2807,5.5882 -0.7023,11.0884 -1.25,16.5 -0.5477,5.4116 -1.23,10.7299 -2.0312,15.9375 -0.8013,5.2076 -1.7089,10.30525 -2.75,15.28125 -1.0412,4.9761 -2.2011,9.8453 -3.4688,14.5625 -1.2677,4.7172 -2.644,9.28775 -4.125,13.71875 -1.481,4.4311 -3.0688,8.72625 -4.75,12.84375 -1.6812,4.1176 -3.4751,8.06695 -5.3438,11.84375 -1.8686,3.7768 -3.8312,7.37255 -5.875,10.78125 -2.0437,3.4088 -4.1679,6.6119 -6.375,9.625 -2.207,3.0133 -4.4847,5.8478 -6.8437,8.4375 -2.359,2.5897 -4.781,4.95685 -7.2813,7.09375 -2.5002,2.1368 -5.088,4.0343 -7.7187,5.6875 -0.8489,0.53353 -1.7022,1.01987 -2.5625,1.5 l -6.9062,0 c 0.083,-0.0338 0.1669,-0.0595 0.25,-0.0937 2.5819,-1.0674 5.1277,-2.368 7.625,-3.9375 2.4972,-1.5694 4.946,-3.3884 7.3437,-5.4375 2.3977,-2.0492 4.7498,-4.33925 7.0313,-6.84375 2.2815,-2.5046 4.5076,-5.22275 6.6562,-8.15625 2.1486,-2.9334 4.2191,-6.07105 6.2188,-9.40625 1.9996,-3.3351 3.9149,-6.88495 5.75,-10.59375 1.835,-3.7089 3.5945,-7.60175 5.25,-11.65625 1.6554,-4.0545 3.2262,-8.2531 4.6874,-12.625 1.4613,-4.3718 2.8099,-8.9013 4.0626,-13.5625 1.2526,-4.6612 2.4075,-9.4526 3.4374,-14.375 1.03,-4.9224 1.9256,-9.9694 2.7188,-15.125 0.7932,-5.1556 1.4886,-10.42055 2.0312,-15.78125 0.5427,-5.3607 0.9406,-10.837 1.2188,-16.375 0.2782,-5.5381 0.4375,-11.15645 0.4375,-16.84375 0,-5.6872 -0.1593,-11.30555 -0.4375,-16.84375 -0.2782,-5.5381 -0.6761,-10.98245 -1.2188,-16.34375 -0.5426,-5.3613 -1.238,-10.62515 -2.0312,-15.78125 -0.7932,-5.1563 -1.6888,-10.2019 -2.7188,-15.125 -1.0299,-4.9231 -2.1848,-9.74425 -3.4374,-14.40625 -1.2527,-4.662 -2.6013,-9.15845 -4.0626,-13.53125 -1.4612,-4.3727 -3.032,-8.60075 -4.6874,-12.65625 -1.6555,-4.0554 -3.415,-7.94645 -5.25,-11.65625 -1.8351,-3.7099 -3.7504,-7.25765 -5.75,-10.59375 -1.9997,-3.3361 -4.0701,-6.47185 -6.2188,-9.40625 -2.1487,-2.9344 -4.3747,-5.65095 -6.6562,-8.15625 -2.2816,-2.5054 -4.6336,-4.79385 -7.0313,-6.84375 -2.3977,-2.0499 -4.8464,-3.8675 -7.3437,-5.4375 -2.4974,-1.5699 -5.0431,-2.90075 -7.625,-3.96875 -2.5822,-1.068 -5.1877,-1.86105 -7.8438,-2.40625 -0.033,-0.01 -0.9559,-0.1247 -2.125,-0.1875 l 0,-3 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:0.81896548;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4944"
         d="m 244.3676,648.53491 c 22.2237,0 40.2188,32.81728 40.2188,73.28125 0,40.46397 -17.9951,73.25 -40.2188,73.25 -22.2236,0 -40.25,-32.78603 -40.25,-73.25 1e-4,-40.46397 18.0264,-73.28125 40.25,-73.28125 z"
         style="fill:url(#linearGradient4954);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4424"
         d="m 210.0552,579.40991 c 38.6839,0 70.0624,62.72558 70.0624,140.09375 0,77.36817 -31.3785,140.09375 -70.0624,140.09375 -1.3473,0 -2.6717,-0.0999 -4,-0.25 36.8195,-4.1533 66.0624,-65.16536 66.0624,-139.84375 0,-74.67839 -29.2429,-135.69045 -66.0624,-139.84375 1.3283,-0.15012 2.6527,-0.25 4,-0.25 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5588"
         d="m 146.6176,652.15991 c 3.7753,2.28998 11.0489,0.21428 14.125,3.09375 -5.0786,26.85422 -7.4216,49.52011 -6.4374,73.75 -3.3041,2.33693 -6.906,4.38513 -10.75,6.15625 -0.3209,-27.40919 -1.8889,-60.00214 3.0624,-83 z"
         style="fill:#666666;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4344"
         d="m 208.9302,551.25366 c 45.8452,0 83.0312,75.31474 83.0312,168.25 0,92.93521 -37.186,168.28125 -83.0312,168.28125 -45.8452,0 -83,-75.34604 -83,-168.28125 0,-92.93526 37.1548,-168.25 83,-168.25 z m 0,27.21875 c -36.9437,0 -66.8751,62.43573 -66.875,139.46875 0,77.03296 29.9313,139.5 66.875,139.5 36.9436,0 66.9062,-62.46704 66.9062,-139.5 0,-77.03302 -29.9626,-139.46875 -66.9062,-139.46875 z"
         style="fill:url(#radialGradient33038);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path27987"
         d="m 212.1802,551.25366 a 1.0001,1.0083678 0 0 1 0.0937,0.0312 1.0001,1.0083678 0 0 1 0.1875,0.125 1.0001,1.0083678 0 0 1 0.0938,0.0625 1.0001,1.0083678 0 0 1 0.0937,0.0625 1.0001,1.0083678 0 0 1 0.125,0.125 1.0001,1.0083678 0 0 1 0.1563,0.375 1.0001,1.0083678 0 0 1 0.0312,0.0937 1.0001,1.0083678 0 0 1 0.0312,0.15625 l 0,3.125 c -0.6594,-0.12747 -1.336,-0.24743 -2,-0.34375 l 0,-2.75 a 1.0001,1.0083678 0 0 1 0.0313,-0.28125 1.0001,1.0083678 0 0 1 0.0313,-0.0937 1.0001,1.0083678 0 0 1 0.0312,-0.0937 1.0001,1.0083678 0 0 1 0.25,-0.3125 1.0001,1.0083678 0 0 1 0.0938,-0.0625 1.0001,1.0083678 0 0 1 0.0937,-0.0312 1.0001,1.0083678 0 0 1 0.0937,-0.0625 1.0001,1.0083678 0 0 1 0.0938,-0.0312 1.0001,1.0083678 0 0 1 0.375,-0.0312 l 0,-0.0312 0,-0.0312 a 1.0001,1.0083678 0 0 1 0.0938,0 z m 8.3124,0.71875 a 1.0001,1.0083678 0 0 1 0.4376,0.1875 l 33.4062,0 a 1.0001,1.0083678 0 0 1 0.2188,0 1.0059674,1.0142836 0 0 1 -0.2188,2 l -33.0625,0 -0.1875,3.59375 c -0.6361,-0.25191 -1.2651,-0.49617 -1.9062,-0.71875 l 0.1874,-3.625 a 1.0001,1.0083678 0 0 1 0,-0.5 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.0313,-0.0937 1.0001,1.0083678 0 0 1 1,-0.8125 1.0001,1.0083678 0 0 1 0.0937,0 z m 42.1876,2.6875 a 1.0116556,1.0200189 0 0 1 -0.1876,2.03125 l -33.0937,0 -0.5,4.96875 c -0.6217,-0.37554 -1.2473,-0.74686 -1.875,-1.09375 l 0.4687,-4.875 a 1.0001,1.0083678 0 0 1 0,-0.0937 1.0001,1.0083678 0 0 1 0.0313,-0.21875 1.0001,1.0083678 0 0 1 0.0937,-0.1875 1.0043803,1.0126834 0 0 1 0.0626,-0.0937 1.0001,1.0083678 0 0 1 0.0312,-0.0625 1.0043803,1.0126834 0 0 1 0.0938,-0.0937 1.0001,1.0083678 0 0 1 0.2187,-0.15625 1.0043803,1.0126834 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0043803,1.0126834 0 0 1 0.0626,-0.0312 1.0043803,1.0126834 0 0 1 0.125,-0.0312 1.0043803,1.0126834 0 0 1 0.0312,0 1.0043803,1.0126834 0 0 1 0.1562,-0.0312 l 0.0313,0 33.9687,0 a 1.0001,1.0083678 0 0 1 0.1876,0 z m -26.1876,4.03125 a 1.0001,1.0083678 0 0 1 0.2188,0.0625 l 33.625,0 a 1.0072978,1.015625 0 0 1 0,2.03125 l -33.1562,0 -0.9063,6.125 c -0.5925,-0.48516 -1.182,-0.97919 -1.7813,-1.4375 l 0.8438,-5.78125 a 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0,-0.0625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.0312,-0.0625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 1,-0.6875 1.0001,1.0083678 0 0 1 0.0937,0 z m 41.6563,5.71875 a 1.0170698,1.0254779 0 0 1 -0.2813,2.03125 l -33.1874,0 -1.375,7 c -0.5627,-0.58974 -1.1173,-1.15432 -1.6876,-1.71875 l 1.25,-6.5 a 1.0001,1.0083678 0 0 1 0,-0.0312 1.0051088,1.013418 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0051088,1.013418 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0051088,1.013418 0 0 1 0.1874,-0.25 1.0001,1.0083678 0 0 1 0.0313,-0.0625 1.0051088,1.013418 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.125,-0.125 1.0051088,1.013418 0 0 1 0.0312,0 1.0051088,1.013418 0 0 1 0.1562,-0.0937 1.0051088,1.013418 0 0 1 0.0313,0 1.0051088,1.013418 0 0 1 0.3437,-0.0625 l 0.125,0 33.875,0 a 1.0001,1.0083678 0 0 1 0.1876,0 1.0043849,1.0126881 0 0 1 0.0937,0 z m 7.1563,7.03125 a 1.0043849,1.0126881 0 0 1 -0.2813,2 l -33.2187,0 -1.875,7.71875 c -0.5271,-0.68302 -1.0587,-1.34046 -1.5938,-2 l 1.6875,-6.90625 a 1.0001,1.0083678 0 0 1 0,-0.0625 1.0118864,1.0202516 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0,-0.0625 1.0118864,1.0202516 0 0 1 0.0312,-0.0312 1.0118864,1.0202516 0 0 1 0.125,-0.1875 1.0001,1.0083678 0 0 1 0.0625,-0.125 1.0118864,1.0202516 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0,-0.0312 1.0118864,1.0202516 0 0 1 0.0625,-0.0312 1.0118864,1.0202516 0 0 1 0.625,-0.21875 l 0.1563,0 33.8437,0 a 1.0001,1.0083678 0 0 1 0.1875,0 1.0043849,1.0126881 0 0 1 0.0938,0 z m -27.5,8.25 a 1.0001,1.0083678 0 0 1 0.1874,0.0312 1.0001,1.0083678 0 0 1 0.1876,0.0625 l 33.5937,0 a 1.0001,1.0083678 0 0 1 0.1875,0 1.011651,1.0200143 0 0 1 -0.1875,2.03125 l -33.2813,0 -2.4062,8.1875 c -0.4796,-0.75408 -0.9183,-1.51679 -1.4062,-2.25 l 2.0937,-7.15625 a 1.0001,1.0083678 0 0 1 0.0625,-0.1875 1.0001,1.0083678 0 0 1 0.9688,-0.71875 z m 40.4374,9.6875 a 1.0001,1.0083678 0 0 1 0.0313,0.0312 1.0059646,1.0142808 0 0 1 -0.2187,2 l -33.3126,0 -2.9062,8.46875 c -0.4191,-0.79154 -0.854,-1.56964 -1.2812,-2.34375 l 2.5,-7.28125 0,-0.0312 a 1.0001,1.0083678 0 0 1 0.0624,-0.15625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.0938,-0.15625 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0001,1.0083678 0 0 1 0.1876,-0.15625 1.0001,1.0083678 0 0 1 0.0624,0 1.0001,1.0083678 0 0 1 0.0938,-0.0625 1.0001,1.0083678 0 0 1 0.4062,-0.0937 1.0001,1.0083678 0 0 1 0.0938,0.0312 l 33.8438,0 a 1.0001,1.0083678 0 0 1 0.1874,-0.0312 z m -28.25,10.75 a 1.0001,1.0083678 0 0 1 0.0938,0.0312 l 33.7812,0 a 1.0001,1.0083678 0 0 1 0.2188,0 1.0132211,1.0215974 0 0 1 -0.2188,2.03125 l -33.3124,0 -3.4376,8.625 c -0.371,-0.84087 -0.7456,-1.67443 -1.125,-2.5 l 2.875,-7.21875 a 1.0001,1.0083678 0 0 1 0,-0.0625 l 0,-0.0312 a 1.0001,1.0083678 0 0 1 0.125,-0.25 1.0001,1.0083678 0 0 1 0.125,-0.21875 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0624,-0.125 1.0001,1.0083678 0 0 1 0.1563,-0.0937 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0625 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.4687,-0.0937 z m 39.3438,11.875 a 1.0001,1.0083678 0 0 1 0.0312,0.0312 1.0059646,1.0142808 0 0 1 -0.2187,2 l -33.375,0 -3.9063,8.59375 c -0.3194,-0.87195 -0.641,-1.73485 -0.9687,-2.59375 l 3.25,-7.1875 a 1.0001,1.0083678 0 0 1 0.0625,-0.15625 l 0,-0.0312 a 1.0001,1.0083678 0 0 1 0.0938,-0.125 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.3437,-0.34375 1.0001,1.0083678 0 0 1 0.5625,-0.15625 1.0001,1.0083678 0 0 1 0.0938,0.0312 l 0.0937,0 33.75,0 a 1.0001,1.0083678 0 0 1 0.1875,-0.0312 z m 4.7188,12.84375 a 1.001098,1.009374 0 0 1 -0.1876,2 l -33.375,0 -4.375,8.5625 c -0.2726,-0.90877 -0.5627,-1.82139 -0.8437,-2.71875 l 3.5937,-7.03125 a 1.0001,1.0083678 0 0 1 0,-0.0312 l 0.0313,-0.0625 a 1.0001,1.0083678 0 0 1 0.0937,-0.15625 1.0001,1.0083678 0 0 1 0,-0.0312 1.0001,1.0083678 0 0 1 0.0626,-0.0937 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.1562,-0.15625 1.0001,1.0083678 0 0 1 0.0938,-0.0937 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.125,-0.0937 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0312 l 0.0938,0 33.9062,0 a 1.0001,1.0083678 0 0 1 0.0938,0 1.001098,1.009374 0 0 1 0.0938,0 z m 4.125,13.78125 a 1.0019522,1.0102353 0 0 1 -0.2188,2 l -33.4062,0 -4.7813,8.34375 c -0.2212,-0.9208 -0.4582,-1.83871 -0.6875,-2.75 l 3.875,-6.78125 a 1.0001,1.0083678 0 0 1 0.0312,-0.0937 l 0.0313,-0.0937 a 1.0001,1.0083678 0 0 1 0.0937,-0.125 1.0001,1.0083678 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0.0937,-0.0937 1.0001,1.0083678 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0312,-0.0625 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0625 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.0626,0 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 l 0.1562,0 33.8438,0 a 1.0001,1.0083678 0 0 1 0.125,0 1.0019522,1.0102353 0 0 1 0.0938,0 z m 3.5312,14.5625 a 1.0170629,1.025471 0 0 1 -0.2812,2.03125 l -33.4688,0 -5.1562,8.09375 c -0.1755,-0.94958 -0.3476,-1.90243 -0.5313,-2.84375 l 4.2187,-6.625 a 1.0001,1.0083678 0 0 1 0.0938,-0.15625 1.0001,1.0083678 0 0 1 0.0938,-0.125 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.1875,-0.1875 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0624,0 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,0 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.1563,-0.0312 l 0.1874,0 33.8126,0 a 1.0001,1.0083678 0 0 1 0.1874,0 1.0115917,1.0199545 0 0 1 0.0938,0 z m -31.4062,15.3125 a 1.0001,1.0083678 0 0 1 0.0937,0.0312 l 33.7813,0 a 1.0001,1.0083678 0 0 1 0.1874,0 1.0116463,1.0200096 0 0 1 -0.1874,2.03125 l -33.5,0 -5.5,7.78125 c -0.1263,-0.95397 -0.2406,-1.92783 -0.375,-2.875 l 4.5,-6.375 a 1.0001,1.0083678 0 0 1 0.0624,-0.125 1.0001,1.0083678 0 0 1 0.0626,-0.0625 1.0001,1.0083678 0 0 1 0.1562,-0.15625 1.0001,1.0083678 0 0 1 0.0625,-0.0625 1.0001,1.0083678 0 0 1 0.1875,-0.0937 1.0001,1.0083678 0 0 1 0.4688,-0.0937 z m 36.0937,16.03125 a 1.0019512,1.0102343 0 0 1 -0.2187,2 l -33.5,0 -5.8438,7.46875 c -0.0803,-0.98153 -0.1612,-1.96183 -0.25,-2.9375 l 4.7812,-6.09375 a 1.0001,1.0083678 0 0 1 0.0313,-0.0625 1.0001,1.0083678 0 0 1 0.25,-0.21875 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.1563,-0.0312 l 0.1874,0 33.8126,0 a 1.0001,1.0083678 0 0 1 0.125,0 1.0019512,1.0102343 0 0 1 0.0937,0 z m 1.3125,16.5625 a 1.0170629,1.025471 0 0 1 -0.2812,2.03125 l -33.5626,0 -6.0937,7.03125 c -0.0316,-0.97002 -0.0851,-1.94083 -0.125,-2.90625 l 4.9687,-5.71875 a 1.0001,1.0083678 0 0 1 0.2188,-0.21875 1.0001,1.0083678 0 0 1 0.0625,-0.0625 1.0001,1.0083678 0 0 1 0.1875,-0.0937 1.0001,1.0083678 0 0 1 0.3438,-0.0625 l 0.25,0 33.75,0 a 1.0001,1.0083678 0 0 1 0.1874,0 1.0115892,1.019952 0 0 1 0.0938,0 z m 0.3438,17.0625 a 1.001098,1.009374 0 0 1 -0.1876,2 l -33.5624,0 -6.4063,6.6875 c 0.0161,-0.96764 0.0234,-1.9345 0.0313,-2.90625 l 5.125,-5.34375 a 1.0001,1.0083678 0 0 1 0.0624,-0.0937 l 0.0313,-0.0312 a 1.0001,1.0083678 0 0 1 0.1875,-0.15625 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0312 l 0.0626,0 33.9374,0 a 1.0001,1.0083678 0 0 1 0.0938,0 1.001098,1.009374 0 0 1 0.0938,0 z m -34.5938,17.03125 a 1.0001,1.0083678 0 0 1 0.0938,0.0312 l 0.0937,0 33.7813,0 a 1.0001,1.0083678 0 0 1 0.1874,0 1.0116463,1.0200096 0 0 1 -0.1874,2.03125 l -33.625,0 -6.5938,6.21875 c 0.0657,-0.9862 0.1304,-1.97717 0.1875,-2.96875 l 5.3437,-5.03125 a 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.1875,-0.0937 1.0001,1.0083678 0 0 1 0.3438,-0.0625 1.0001,1.0083678 0 0 1 0.0312,-0.0312 z m 32.8125,16.5625 a 1.0001,1.0083678 0 0 1 0.125,0.0312 1.0132157,1.0215919 0 0 1 -0.2187,2.03125 l -33.625,0 -6.8126,5.8125 c 0.1128,-0.95796 0.208,-1.91073 0.3126,-2.875 l 5.375,-4.59375 a 1.0001,1.0083678 0 0 1 0.2812,-0.21875 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0625 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.4375,-0.125 1.0001,1.0083678 0 0 1 0.0937,0.0312 l 0.0938,0 33.7188,0 a 1.0001,1.0083678 0 0 1 0.0937,-0.0312 z m -1.8125,16.03125 a 1.0017172,1.0099983 0 0 1 -0.2812,2 l -33.6876,0 -7,5.40625 c 0.1623,-0.9503 0.315,-1.91704 0.4688,-2.875 l 5.5312,-4.25 a 1.0001,1.0083678 0 0 1 0.0626,-0.0625 1.0001,1.0083678 0 0 1 0.0937,-0.0625 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0312,-0.0312 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.1563,-0.0312 l 0.125,0 33.875,0 a 1.0001,1.0083678 0 0 1 0.0937,0 1.001098,1.009374 0 0 1 0.0937,0 1.001098,1.009374 0 0 1 0.0938,0 z m -2.9375,15.3125 a 1.0001,1.0083678 0 0 1 0.0937,0.0312 1.0043858,1.012689 0 0 1 -0.1874,2 l -33.7188,0 -7.1875,5 c 0.2134,-0.9405 0.4201,-1.89399 0.625,-2.84375 l 5.6563,-3.9375 a 1.0001,1.0083678 0 0 1 0.0624,-0.0625 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0625 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.4375,-0.0937 1.0001,1.0083678 0 0 1 0.0937,0.0312 l 33.8126,0 a 1.0001,1.0083678 0 0 1 0.0937,-0.0312 z m -3.4687,14.5625 a 1.0001,1.0083678 0 0 1 0.0937,0.0312 1.0001,1.0083678 0 0 1 -0.1875,2 l -33.6562,0 -7.4063,4.65625 c 0.2756,-0.95834 0.5462,-1.93599 0.8125,-2.90625 l 5.625,-3.53125 a 1.0001,1.0083678 0 0 1 0.1875,-0.0937 1.0001,1.0083678 0 0 1 0.1563,-0.0625 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0938,-0.0312 1.0001,1.0083678 0 0 1 0.1562,-0.0312 l 0.1562,0 33.8438,0 a 1.0001,1.0083678 0 0 1 0.0938,-0.0312 z m -4,13.78125 a 1.0116556,1.0200189 0 0 1 -0.1876,2.03125 l -33.7187,0 -7.5,4.21875 c 0.3348,-0.9442 0.6436,-1.91635 0.9687,-2.875 l 5.625,-3.15625 a 1.0001,1.0083678 0 0 1 0.0626,-0.0312 l 0.0312,-0.0312 a 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,-0.0312 1.0001,1.0083678 0 0 1 0.0313,-0.0312 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.1562,-0.0312 l 0.1876,0 33.8124,0 a 1.0001,1.0083678 0 0 1 0.0938,0 1.0083272,1.016663 0 0 1 0.0938,0 z m -4.7188,12.84375 a 1.0001,1.0083678 0 0 1 0.0312,0.0312 1.0059646,1.0142808 0 0 1 -0.2187,2 l -33.7813,0 -7.625,3.8125 c 0.4033,-0.9354 0.7946,-1.85908 1.1876,-2.8125 l 5.6874,-2.84375 0.0938,-0.0625 a 1.0001,1.0083678 0 0 1 0.0938,-0.0312 1.0001,1.0083678 0 0 1 0.3437,-0.0625 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0938,0.0312 l 0.0937,0 33.75,0 a 1.0001,1.0083678 0 0 1 0.0937,-0.0312 1.0001,1.0083678 0 0 1 0.0938,0 z m -5.2812,11.84375 a 1.0001,1.0083678 0 0 1 0.0312,0.0312 1.0059637,1.0142799 0 1 1 -0.2188,2 l -33.8124,0 -7.7188,3.375 c 0.4797,-0.9216 0.9689,-1.83702 1.4375,-2.78125 l 5.6875,-2.53125 a 1.0001,1.0083678 0 0 1 0.0625,0 1.0001,1.0083678 0 0 1 0.4375,-0.0937 1.0001,1.0083678 0 0 1 0.0938,0.0312 l 0.0937,0 33.7187,0 a 1.0001,1.0083678 0 0 1 0.1876,-0.0312 z m -5.8126,10.75 a 1.001098,1.009374 0 0 1 -0.1874,2 l -33.7813,0 -7.9063,3.0625 c 0.5776,-0.91629 1.1538,-1.86635 1.7188,-2.8125 l 5.4375,-2.09375 0.1875,-0.0937 a 1.0001,1.0083678 0 0 1 0.1875,-0.0312 1.0001,1.0083678 0 0 1 0.1563,-0.0312 l 0.125,0 33.875,0 a 1.0001,1.0083678 0 0 1 0.0937,0 1.001098,1.009374 0 0 1 0.0937,0 z m -6.2812,9.59375 a 1.011651,1.0200143 0 0 1 -0.1875,2.03125 l -33.875,0 -7.9375,2.65625 c 0.7047,-0.91482 1.4039,-1.85643 2.0938,-2.8125 l 5.375,-1.8125 a 1.0001,1.0083678 0 0 1 0.1874,-0.0312 1.0001,1.0083678 0 0 1 0.1563,-0.0312 l 0.1563,0 33.8437,0 a 1.0001,1.0083678 0 0 1 0.0937,0 1.001098,1.009374 0 0 1 0.0938,0 z m -6.8438,8.34375 a 1.0083866,1.0167229 0 0 1 -0.0937,2.03125 l -33.875,0 -8.0313,2.28125 c 0.8721,-0.90861 1.7403,-1.84433 2.5938,-2.8125 l 4.875,-1.375 a 1.0001,1.0083678 0 0 1 0.0625,-0.0312 l 0.0313,-0.0312 a 1.0001,1.0083678 0 0 1 0.0624,0 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0625,-0.0312 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0626,0 1.0001,1.0083678 0 0 1 0.0312,0 1.0001,1.0083678 0 0 1 0.0625,-0.0312 l 0.125,0 33.875,0 a 1.0001,1.0083678 0 0 1 0.0937,0 z m -7.1562,7.03125 a 1.0083889,1.0167253 0 0 1 -0.0938,2.03125 l -33.9062,0 -8.0312,1.875 c 1.1176,-0.9039 2.2195,-1.84629 3.3124,-2.84375 l 4.2813,-1 0.0937,-0.0312 a 1.0001,1.0083678 0 0 1 0.0938,0 1.0001,1.0083678 0 0 1 0.1562,-0.0312 l 0.0626,0 33.9374,0 a 1.0001,1.0083678 0 0 1 0.0938,0 z m -7.4375,5.625 a 1.0011001,1.0093762 0 0 1 -0.1875,2 l -33.6562,0 -0.1563,0 -8.125,1.53125 c 1.4863,-0.87807 2.9559,-1.83705 4.4063,-2.875 l 3.1874,-0.59375 0.1563,-0.0312 a 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0624,0 1.0001,1.0083678 0 0 1 0.0313,0 1.0001,1.0083678 0 0 1 0.0625,-0.0312 l 0.0938,0 0.0937,0 33.8125,0 a 1.0001,1.0083678 0 0 1 0.0938,0 1.0011001,1.0093762 0 0 1 0.0937,0 z m -7.75,4.125 a 1.0043849,1.0126881 0 0 1 -0.2813,2 l -34,0 -0.0937,0 -3.2187,0.5 29.1562,0 a 1.0001,1.0083678 0 0 1 0.125,0 1.0092348,1.0175781 0 0 1 -0.125,2.03125 l -33.7812,0 -0.0626,0 -7.5624,1.125 a 1.0001,1.0083678 0 0 1 -0.0938,0 1.0001,1.0083678 0 0 1 -1.7188,0.0625 c 5.4774,-0.81139 10.8068,-2.68949 15.9376,-5.53125 l 1.2812,-0.1875 a 1.0001,1.0083678 0 0 1 0.1562,0 l 0.125,0 33.875,0 a 1.0001,1.0083678 0 0 1 0.1876,0 1.0043849,1.0126881 0 0 1 0.0937,0 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4042"
         d="m -279.4761,513.62866 c 35.5369,0 64.375,67.63591 64.375,151.09375 0,83.45781 -28.8381,151.125 -64.375,151.125 l -125.375,0 c -7.3919,-0.78466 -4.9387,-1.81463 -3.6563,-2.09375 30.442,-11.97394 53.6563,-74.14098 53.6563,-149.03125 0,-83.15552 -28.6096,-150.60605 -63.9687,-151.09375 l 139.3437,0 z"
         style="fill:url(#radialGradient33056);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path33058"
         d="m -415.7886,526.09741 c 1.2918,0 9.9838,0.0616 18.7188,0.1875 4.3675,0.0636 8.7226,0.15565 12.1562,0.25 1.7168,0.0467 3.2027,0.10036 4.3438,0.15625 l -36.3126,0 a 1.3232194,1.3239477 0 0 1 1.0938,-0.59375 z m 35.2188,0.59375 c 1.141,0.0555 1.8292,0.10031 2.4062,0.21875 2.5137,0.51628 4.9817,1.27797 7.4062,2.28125 2.4245,1.00327 4.8046,2.22795 7.125,3.6875 2.3206,1.45964 4.5759,3.14463 6.7813,5.03125 2.2054,1.8866 4.3567,3.96386 6.4375,6.25 2.0808,2.28623 4.0845,4.77752 6.0312,7.4375 1.9467,2.66007 3.8223,5.49071 5.625,8.5 1.8026,3.00921 3.5393,6.19718 5.1876,9.53125 1.6483,3.33408 3.2358,6.83408 4.7187,10.46875 1.4829,3.63476 2.8812,7.40124 4.1875,11.3125 1.3063,3.91124 2.5068,7.96117 3.625,12.125 1.1182,4.16385 2.1441,8.45169 3.0625,12.84375 0.9183,4.39224 1.7308,8.87228 2.4375,13.46875 0.7067,4.59637 1.2981,9.28608 1.7812,14.0625 0.4831,4.77641 0.8462,9.63049 1.0938,14.5625 0.2476,4.93209 0.4063,9.96774 0.4062,15.03125 0,5.06359 -0.1586,10.06809 -0.4062,15 -0.2476,4.93183 -0.6107,9.78654 -1.0938,14.5625 -0.4831,4.77599 -1.0745,9.46656 -1.7812,14.0625 -0.7067,4.59593 -1.5192,9.07722 -2.4375,13.46875 -0.9184,4.39163 -1.9443,8.71187 -3.0625,12.875 -1.1182,4.16315 -2.3187,8.1832 -3.625,12.09375 -1.3063,3.91063 -2.7046,7.70988 -4.1875,11.34375 -1.4829,3.63396 -3.0705,7.10431 -4.7187,10.4375 -1.6484,3.33319 -3.3848,6.52292 -5.1876,9.53125 -1.8027,3.00842 -3.6782,5.80957 -5.625,8.46875 -1.9466,2.65938 -3.9504,5.18322 -6.0312,7.46875 -2.0808,2.28553 -4.2322,4.36409 -6.4375,6.25 -2.2054,1.88582 -4.4606,3.57223 -6.7813,5.03125 -0.7487,0.47086 -1.5224,0.88876 -2.2812,1.3125 l -6.0938,0 c 0.0731,-0.0298 0.1456,-0.0635 0.2188,-0.0937 2.2775,-0.94202 4.5472,-2.08359 6.75,-3.46875 2.2028,-1.38505 4.3539,-2.97284 6.4688,-4.78125 2.1149,-1.80851 4.175,-3.85215 6.1874,-6.0625 2.0125,-2.21041 3.98,-4.59856 5.875,-7.1875 1.8953,-2.58884 3.7361,-5.36904 5.5,-8.3125 1.7638,-2.94336 3.4439,-6.07057 5.0626,-9.34375 1.6186,-3.27327 3.1648,-6.70297 4.625,-10.28125 1.4601,-3.57827 2.836,-7.29787 4.125,-11.15625 1.2888,-3.85831 2.4888,-7.85503 3.5937,-11.96875 1.1049,-4.11371 2.1227,-8.34327 3.0313,-12.6875 0.9084,-4.34422 1.7065,-8.79371 2.4062,-13.34375 0.6996,-4.55005 1.3026,-9.1752 1.7812,-13.90625 0.4786,-4.73106 0.8484,-9.58122 1.0938,-14.46875 0.2453,-4.88761 0.375,-9.82446 0.375,-14.84375 0,-5.01919 -0.1297,-9.9873 -0.375,-14.875 -0.2454,-4.88762 -0.6151,-9.70591 -1.0938,-14.4375 -0.4785,-4.73157 -1.0816,-9.35576 -1.7812,-13.90625 -0.6997,-4.55065 -1.4978,-9.03015 -2.4062,-13.375 -0.9086,-4.34486 -1.9264,-8.57307 -3.0313,-12.6875 -1.1049,-4.11442 -2.305,-8.10956 -3.5937,-11.96875 -1.289,-3.8591 -2.6648,-7.5771 -4.125,-11.15625 -1.4602,-3.57907 -3.0064,-7.00719 -4.625,-10.28125 -1.6187,-3.27415 -3.2988,-6.3995 -5.0626,-9.34375 -1.7638,-2.94425 -3.6046,-5.72276 -5.5,-8.3125 -1.895,-2.58974 -3.8626,-4.97646 -5.875,-7.1875 -2.0124,-2.21113 -4.0726,-4.25336 -6.1874,-6.0625 -2.115,-1.80912 -4.266,-3.39565 -6.4688,-4.78125 -2.2028,-1.38551 -4.4725,-2.55744 -6.75,-3.5 -2.2775,-0.94255 -4.5634,-1.64384 -6.9062,-2.125 -0.029,-0.009 -0.8439,-0.13207 -1.875,-0.1875 l 0,-2.625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:0.81896548;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3656"
         d="m -405.9761,519.28491 c 33.5912,0 60.8437,66.38958 60.8437,148.28125 1e-4,81.89167 -27.2525,148.28125 -60.8437,148.28125 -33.5913,0 -60.8125,-66.38958 -60.8125,-148.28125 0,-81.89167 27.2212,-148.28125 60.8125,-148.28125 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4044"
         d="m -405.0074,519.25366 c 33.0625,0 59.875,62.01091 59.875,145.46875 1e-4,83.4578 -38.9687,146.59375 -72.0312,146.59375 -33.0624,0 -49.625,-93.80807 -49.625,-138.375 0,-83.45784 28.7188,-153.6875 61.7812,-153.6875 z"
         style="fill:url(#radialGradient33068);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4500"
         d="m -345.1636,667.15991 c 1.7107,83.15263 -34.6466,149.09148 -72,144.125 -7.4029,-0.98429 -14.1529,-11.16607 -13.1562,-11.15625 45.1422,25.55002 81.8491,-50.89113 85.1562,-132.96875 z"
         style="fill:#202020;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path33060"
         d="m -414.2886,519.37866 c 0.053,0.003 0.1036,0.0168 0.1562,0.0312 0.058,0.0304 0.1068,0.0822 0.1563,0.125 0.029,0.0168 0.0678,0.0426 0.0937,0.0625 0.0281,0.0167 0.0365,0.0113 0.0626,0.0312 0.0389,0.0334 0.0926,0.0851 0.125,0.125 0.066,0.0996 0.1025,0.22541 0.125,0.34375 0.01,0.0271 0.0232,0.0345 0.0312,0.0625 0.011,0.0451 0.0262,0.10959 0.0312,0.15625 l 0,2.75 c -0.5668,-0.11263 -1.1481,-0.22738 -1.7187,-0.3125 l 0,-2.4375 c 0,-0.0836 0.0142,-0.13775 0.0313,-0.21875 0.01,-0.028 0.0212,-0.0666 0.0312,-0.0937 0.01,-0.028 -0.01,-0.0666 0,-0.0937 0.054,-0.10566 0.1303,-0.20532 0.2188,-0.28125 0.027,-0.0199 0.0667,-0.0145 0.0937,-0.0312 0.027,-0.0108 0.0668,-0.0234 0.0937,-0.0312 0.0261,-0.0199 0.0355,-0.0458 0.0626,-0.0625 0.027,-0.0108 0.0667,-0.0233 0.0937,-0.0312 0.1044,-0.0301 0.2047,-0.0433 0.3125,-0.0312 l 0,-0.0312 0,-0.0312 z m 7.1562,0.65625 c 0.1633,0.009 0.3047,0.0575 0.4376,0.15625 l 28.7187,0 c 0.063,-0.008 0.1252,-0.008 0.1875,0 0.4042,0.10146 0.7019,0.54028 0.6562,0.96875 -0.046,0.42846 -0.4279,0.80474 -0.8437,0.8125 l -28.4063,0 -0.1874,3.15625 c -0.5468,-0.22258 -1.0742,-0.42832 -1.625,-0.625 l 0.1562,-3.21875 c -0.035,-0.14417 -0.035,-0.29334 0,-0.4375 -3e-4,-0.01 -3e-4,-0.0219 0,-0.0312 0.01,-0.028 0.0212,-0.0353 0.0312,-0.0625 0.077,-0.40626 0.4755,-0.72659 0.875,-0.71875 z m 36.3126,2.375 c 0.4531,0.0438 0.8235,0.4989 0.7812,0.96875 -0.042,0.46985 -0.4843,0.85623 -0.9375,0.8125 l -28.4375,0 -0.4375,4.40625 c -0.5343,-0.33183 -1.0543,-0.66224 -1.5937,-0.96875 l 0.4062,-4.3125 0,-0.0937 c 0,-0.0652 0.0152,-0.12435 0.0312,-0.1875 0.022,-0.058 0.0286,-0.10414 0.0626,-0.15625 0.016,-0.0286 0.0415,-0.0672 0.0624,-0.0937 0.01,-0.0186 0.0223,-0.0444 0.0313,-0.0625 0.026,-0.0294 0.0335,-0.0368 0.0625,-0.0625 0.057,-0.0545 0.1193,-0.11924 0.1875,-0.15625 0.01,-1.4e-4 0.0232,-1.4e-4 0.0313,0 0.017,-0.01 0.0445,-0.0226 0.0624,-0.0312 0.0191,-0.01 0.0435,0.009 0.0626,0 0.035,-0.0116 0.0572,-0.0245 0.0937,-0.0312 0.01,-1.4e-4 0.0232,-1.4e-4 0.0313,0 0.044,-0.0128 0.0786,-0.0258 0.125,-0.0312 l 0.0312,0 29.1875,0 c 0.053,-0.005 0.1027,-0.005 0.1563,0 z m -22.5626,3.5625 c 0.0921,0.003 0.1641,-0.002 0.25,0.0312 l 28.9063,0 c 0.4539,-8.8e-4 0.875,0.43575 0.875,0.90625 0,0.4705 -0.4211,0.90727 -0.875,0.90625 l -28.5,0 -0.7813,5.40625 c -0.5091,-0.42869 -1.016,-0.87629 -1.5312,-1.28125 l 0.7188,-5.09375 c -2e-4,-0.01 -2e-4,-0.022 0,-0.0312 -6e-4,-0.0183 -6e-4,-0.0441 0,-0.0625 -2e-4,-0.01 -2e-4,-0.0219 0,-0.0312 0.01,-0.0186 0.0222,-0.0132 0.0312,-0.0312 -2e-4,-0.01 -2e-4,-0.022 0,-0.0312 0.01,-0.0186 0.0223,-0.0444 0.0312,-0.0625 -10e-5,-0.01 -10e-5,-0.0219 0,-0.0312 0.118,-0.36614 0.5032,-0.61361 0.875,-0.59375 z m 35.875,5.03125 c 0.452,0.0672 0.782,0.56242 0.7188,1.03125 -0.063,0.46884 -0.5162,0.84511 -0.9688,0.78125 l -28.5312,0 -1.1562,6.1875 c -0.4837,-0.52109 -0.9788,-1.03252 -1.4688,-1.53125 l 1.0625,-5.75 c -1e-4,-0.01 -1e-4,-0.0219 0,-0.0312 0.01,-0.0187 0.0213,-0.0131 0.0313,-0.0312 -2e-4,-0.01 -3e-4,-0.022 0,-0.0312 0.01,-0.0187 0.0222,-0.0444 0.0312,-0.0625 -2e-4,-0.01 -2e-4,-0.0219 0,-0.0312 0.042,-0.0816 0.0912,-0.15435 0.1562,-0.21875 0.01,-0.0187 0.0213,-0.0444 0.0313,-0.0625 0.01,-1.5e-4 0.0223,-1.5e-4 0.0313,0 0.0329,-0.04 0.0553,-0.0603 0.0937,-0.0937 0.01,-1.4e-4 0.0212,-1.4e-4 0.0313,0 0.0419,-0.0316 0.109,-0.0704 0.1562,-0.0937 0.095,-0.0361 0.2119,-0.0621 0.3125,-0.0625 l 0.0937,0 29.125,0 c 0.0531,-0.005 0.1027,-0.005 0.1563,0 0.026,-8.8e-4 0.0677,-8.8e-4 0.0937,0 z m 6.1563,6.21875 c 0.4208,0.095 0.7168,0.55789 0.6563,1 -0.061,0.44211 -0.4765,0.81124 -0.9063,0.78125 l -28.5625,0 -1.5938,6.8125 c -0.4528,-0.6035 -0.9151,-1.19848 -1.375,-1.78125 l 1.4376,-6.09375 c -6e-4,-0.0183 -6e-4,-0.0441 0,-0.0625 0.01,-0.01 0.0222,0.009 0.0312,0 -5e-4,-0.0183 -5e-4,-0.0441 0,-0.0625 0.01,-0.01 0.0223,-0.0222 0.0312,-0.0312 0.03,-0.0592 0.0523,-0.10537 0.0938,-0.15625 0.016,-0.038 0.0415,-0.0895 0.0625,-0.125 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 -2e-4,-0.01 -2e-4,-0.0219 0,-0.0312 0.018,-0.01 0.0435,-0.0226 0.0625,-0.0312 0.1516,-0.12384 0.3382,-0.18729 0.5313,-0.1875 l 0.125,0 29.0937,0 c 0.054,-0.005 0.1027,-0.005 0.1563,0 0.026,-8.9e-4 0.0667,-8.9e-4 0.0937,0 z m -23.5,7.3125 c 0.055,0.0128 0.1357,0.0386 0.1875,0.0625 l 28.8438,0 c 0.053,-0.005 0.1338,-0.005 0.1874,0 0.4533,0.0437 0.8235,0.4989 0.7813,0.96875 -0.042,0.46985 -0.5154,0.88748 -0.9687,0.84375 l -28.5938,0 -2.0625,7.21875 c -0.4122,-0.66631 -0.7995,-1.35214 -1.2187,-2 l 1.8124,-6.3125 c 0.011,-0.0568 0.0395,-0.10302 0.0626,-0.15625 0.1256,-0.41718 0.5558,-0.71306 0.9687,-0.625 z m 34.5937,8.53125 c 0.01,0.009 0.0233,0.0219 0.0313,0.0312 0.4042,0.10147 0.7018,0.54028 0.6563,0.96875 -0.0451,0.42847 -0.4281,0.80475 -0.8438,0.8125 l -28.625,0 -2.5,7.46875 c -0.3602,-0.6994 -0.7267,-1.3785 -1.0938,-2.0625 l 2.1563,-6.4375 0,-0.0312 c 0.013,-0.0475 0.0103,-0.0805 0.0313,-0.125 -1e-4,-0.01 -2e-4,-0.022 0,-0.0312 0.01,-0.0187 0.0212,-0.0444 0.0312,-0.0625 0.01,-0.01 0.0232,-0.0222 0.0312,-0.0312 0.01,-0.01 0.0213,-0.0222 0.0313,-0.0312 -2e-4,-0.01 -2e-4,-0.0219 0,-0.0312 0.024,-0.0484 0.0305,-0.0816 0.0625,-0.125 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.047,-0.0526 0.0974,-0.0859 0.1563,-0.125 0.017,-5.8e-4 0.0444,-5.8e-4 0.0624,0 0.0261,-0.0199 0.0668,-0.0457 0.0938,-0.0625 0.109,-0.0525 0.2236,-0.0919 0.3438,-0.0937 0.027,0.008 0.0354,0.0207 0.0624,0.0312 l 29.0938,0 c 0.052,-0.0145 0.1018,-0.0273 0.1562,-0.0312 z m -24.2812,9.5 c 0.028,0.008 0.0677,0.0206 0.0938,0.0312 l 29.0312,0 c 0.063,-0.008 0.125,-0.008 0.1875,0 0.4532,0.0511 0.8304,0.53015 0.7813,1 -0.0481,0.46985 -0.5155,0.86353 -0.9688,0.8125 l -28.625,0 -2.9688,7.59375 c -0.3188,-0.743 -0.6427,-1.45802 -0.9687,-2.1875 l 2.5,-6.375 c -7e-4,-0.0183 -7e-4,-0.0441 0,-0.0625 l 0,-0.0312 c 0.026,-0.0782 0.0485,-0.15077 0.0937,-0.21875 0.0271,-0.0688 0.0503,-0.12806 0.0938,-0.1875 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.015,-0.038 0.0415,-0.0897 0.0625,-0.125 0.042,-0.0316 0.0777,-0.0392 0.125,-0.0625 0.01,-1.5e-4 0.0232,-1.5e-4 0.0312,0 0.0181,-0.0192 0.0426,-0.045 0.0626,-0.0625 0.01,-1.5e-4 0.0232,-1.5e-4 0.0312,0 0.1252,-0.0606 0.237,-0.10025 0.375,-0.0937 z m 33.8125,10.5 c 0.01,0.009 0.0223,0.0219 0.0313,0.0312 0.404,0.10147 0.7017,0.54029 0.6562,0.96875 -0.046,0.42844 -0.4281,0.77345 -0.8438,0.78125 l -28.6874,0 -3.3438,7.59375 c -0.2745,-0.77045 -0.5621,-1.52233 -0.8438,-2.28125 l 2.8126,-6.34375 c 0.0129,-0.0475 0.009,-0.11179 0.0312,-0.15625 0.025,-0.0389 0.0638,-0.0905 0.0938,-0.125 -1e-4,-0.01 -2e-4,-0.022 0,-0.0312 0.073,-0.12416 0.192,-0.23823 0.3124,-0.3125 0.1432,-0.0941 0.2992,-0.12977 0.4688,-0.125 0.027,0.008 0.0678,0.0207 0.0938,0.0312 l 0.0624,0 29,0 c 0.052,-0.0145 0.102,-0.0274 0.1563,-0.0312 z m 4.0625,11.34375 c 0.414,0.0842 0.7273,0.53325 0.6875,0.96875 -0.04,0.4355 -0.4218,0.81025 -0.8437,0.8125 l -28.6876,0 -3.75,7.5625 c -0.2343,-0.80299 -0.4771,-1.61334 -0.7187,-2.40625 l 3.0937,-6.21875 c 0,-0.01 -10e-5,-0.0219 0,-0.0312 l 0,-0.0625 c 0.024,-0.0484 0.0618,-0.0816 0.0938,-0.125 -2e-4,-0.01 -2e-4,-0.022 0,-0.0312 0.016,-0.0286 0.0435,-0.036 0.0625,-0.0625 0.01,-0.01 0.0223,-0.0222 0.0313,-0.0312 0.0399,-0.051 0.0746,-0.11561 0.125,-0.15625 0.026,-0.0294 0.0335,-0.0369 0.0624,-0.0625 0.0191,-5.7e-4 0.0435,-5.7e-4 0.0626,0 0.0329,-0.0304 0.0874,-0.0691 0.125,-0.0937 0.017,-5.7e-4 0.0132,-5.7e-4 0.0312,0 0.01,-1.4e-4 0.0233,-1.4e-4 0.0312,0 0.0171,-0.01 0.0445,-0.0226 0.0626,-0.0312 0.01,-1.4e-4 0.0222,-1.4e-4 0.0312,0 0.018,-5.9e-4 0.0132,-5.9e-4 0.0312,0 0.01,-1.4e-4 0.0233,-1.4e-4 0.0313,0 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 l 0.0938,0 29.125,0 c 0.027,-8.7e-4 0.0677,-8.7e-4 0.0937,0 0.027,-8.7e-4 0.0365,-8.7e-4 0.0625,0 z m 3.5625,12.1875 c 0.4159,0.088 0.7027,0.53127 0.6563,0.96875 -0.0471,0.43748 -0.4194,0.78929 -0.8438,0.78125 l -28.7188,0 -4.125,7.375 c -0.1901,-0.81361 -0.3654,-1.60104 -0.5624,-2.40625 l 3.3124,-6 c 0.01,-0.028 0.0203,-0.0666 0.0313,-0.0937 l 0.0313,-0.0937 c 0.025,-0.0389 0.0314,-0.0592 0.0624,-0.0937 0.01,-0.0186 0.0233,-0.0444 0.0313,-0.0625 0.026,-0.0294 0.0647,-0.0368 0.0937,-0.0625 0.01,-0.0186 0.0233,-0.0444 0.0313,-0.0625 0.01,-0.0186 0.0232,-0.0444 0.0313,-0.0625 0.01,-1.4e-4 0.0222,-1.4e-4 0.0312,0 0.017,-0.0192 0.0435,-0.045 0.0625,-0.0625 0.01,-1.4e-4 0.0213,-1.4e-4 0.0313,0 0.017,-0.01 0.0132,-0.0226 0.0312,-0.0312 0.01,-0.01 0.0212,-0.0222 0.0312,-0.0312 0.0171,-0.01 0.0446,0.009 0.0626,0 0.01,-1.4e-4 0.0212,-1.4e-4 0.0312,0 0.018,-5.7e-4 0.0445,-5.7e-4 0.0625,0 0.01,-0.01 -0.01,-0.0222 0,-0.0312 0.018,-5.8e-4 0.0435,-5.8e-4 0.0625,0 0.01,-1.4e-4 0.0213,-1.4e-4 0.0312,0 0.0181,-5.8e-4 0.0445,-5.8e-4 0.0626,0 0.01,-0.01 0.0212,-0.0222 0.0312,-0.0312 l 0.1562,0 29.0626,0 c 0.036,-0.002 0.0887,-0.002 0.125,0 0.027,-8.9e-4 0.0355,-8.9e-4 0.0624,0 l 0.0313,0 z m 2.9375,12.875 c 0.4533,0.0438 0.8233,0.49889 0.7812,0.96875 -0.0419,0.46986 -0.4841,0.85622 -0.9374,0.8125 l -28.75,0 -4.4376,7.15625 c -0.1507,-0.83904 -0.3107,-1.69951 -0.4687,-2.53125 l 3.625,-5.84375 c 0.024,-0.0484 0.0618,-0.0816 0.0937,-0.125 0.0251,-0.0389 0.0326,-0.0905 0.0626,-0.125 0.01,-0.01 0.0212,-0.0222 0.0312,-0.0312 0.046,-0.0623 0.0959,-0.10874 0.1562,-0.15625 0.01,-0.01 0.0213,-0.0222 0.0313,-0.0312 0.018,-5.6e-4 0.0435,-5.6e-4 0.0625,0 0.01,-0.01 0.0213,-0.0222 0.0312,-0.0312 0.0181,-0.01 0.0435,-0.0226 0.0626,-0.0312 0.018,-5.7e-4 0.0434,-5.7e-4 0.0624,0 0.01,-0.01 0.0213,-0.0222 0.0313,-0.0312 0.019,-5.7e-4 0.0435,-5.7e-4 0.0625,0 0.044,-0.0129 0.0788,0.005 0.125,0 l 0.1562,0 29.0626,0 c 0.053,-0.005 0.1026,-0.005 0.1562,0 z m -26.9062,13.5 c 0.028,0.008 0.0667,0.0207 0.0937,0.0312 l 29.0313,0 c 0.053,-0.005 0.1026,-0.005 0.1562,0 0.4525,0.0448 0.8233,0.5308 0.7812,1 -0.0419,0.46918 -0.4846,0.85514 -0.9374,0.8125 l -28.8126,0 -4.7187,6.875 c -0.1084,-0.84293 -0.1971,-1.69433 -0.3125,-2.53125 l 3.875,-5.65625 c 0.015,-0.038 0.0112,-0.0582 0.0312,-0.0937 0.0181,-0.0192 0.0426,-0.045 0.0626,-0.0625 0.0399,-0.051 0.0746,-0.0842 0.125,-0.125 0.017,-0.0192 0.0435,-0.045 0.0624,-0.0625 0.05,-0.0333 0.1,-0.0721 0.1563,-0.0937 0.1252,-0.0606 0.2681,-0.10025 0.4063,-0.0937 z m 31.0312,14.1875 c 0.416,0.088 0.7339,0.53127 0.6875,0.96875 -0.047,0.4375 -0.4505,0.78928 -0.875,0.78125 l -28.8125,0 -5,6.59375 c -0.069,-0.86728 -0.1424,-1.73164 -0.2188,-2.59375 l 4.0938,-5.375 c 0.01,-0.0186 0.0213,-0.0444 0.0312,-0.0625 0.062,-0.0762 0.1375,-0.13601 0.2188,-0.1875 0.018,-0.01 0.0435,-0.0226 0.0625,-0.0312 0.01,-1.4e-4 0.0223,-1.4e-4 0.0313,0 0.018,-0.01 0.0122,-0.0226 0.0312,-0.0312 0.01,-0.01 0.0222,0.009 0.0312,0 0.0171,-5.8e-4 0.0435,-5.8e-4 0.0626,0 0.01,-1.4e-4 0.0232,-1.4e-4 0.0312,0 0.018,-0.01 0.0122,-0.0226 0.0312,-0.0312 0.01,-1.4e-4 0.0213,-1.4e-4 0.0313,0 0.044,-0.0128 0.1111,-0.0258 0.1563,-0.0312 l 0.1562,0 29.0625,0 c 0.036,-0.002 0.0572,-0.002 0.0937,0 0.0261,-8.8e-4 0.0668,-8.8e-4 0.0938,0 z m 1.0312,14.625 c 0.454,0.0428 0.8235,0.49825 0.7813,0.96875 -0.042,0.47051 -0.4838,0.85732 -0.9375,0.8125 l -28.8438,0 -5.25,6.21875 c -0.028,-0.8571 -0.0593,-1.70947 -0.0937,-2.5625 l 4.2813,-5.0625 c 0.0519,-0.074 0.1156,-0.13363 0.1874,-0.1875 0.0171,-0.0192 0.0123,-0.045 0.0313,-0.0625 0.05,-0.0333 0.1313,-0.0409 0.1875,-0.0625 0.095,-0.0362 0.1806,-0.0623 0.2812,-0.0625 l 0.2188,0 29,0 c 0.054,-0.005 0.1028,-0.005 0.1562,0 z m 0.375,15.0625 c 0.4141,0.0842 0.7271,0.53325 0.6876,0.96875 -0.04,0.4355 -0.4218,0.81026 -0.8438,0.8125 l -28.8438,0 -5.5,5.90625 c 0.013,-0.855 0.0243,-1.70386 0.0313,-2.5625 l 4.4063,-4.71875 c 0.016,-0.0286 0.0122,-0.0672 0.0312,-0.0937 l 0.0312,-0.0312 c 0.0471,-0.0526 0.0974,-0.086 0.1563,-0.125 0.018,-5.8e-4 0.0445,-5.8e-4 0.0625,0 0.01,-0.01 0.0212,-0.0222 0.0312,-0.0312 0.0171,-0.01 0.0446,-0.0226 0.0626,-0.0312 0.01,-0.01 -0.01,-0.0222 0,-0.0312 0.018,-5.7e-4 0.0444,-5.7e-4 0.0624,0 0.01,-1.4e-4 0.0213,-1.4e-4 0.0313,0 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.01,-1.4e-4 0.0233,-1.4e-4 0.0312,0 0.0181,-5.8e-4 0.0133,-5.8e-4 0.0313,0 0.01,-1.4e-4 0.0213,-1.4e-4 0.0313,0 0.017,-0.01 0.0444,-0.0226 0.0624,-0.0312 l 0.0626,0 29.1562,0 c 0.027,-8.7e-4 0.0355,-8.7e-4 0.0625,0 0.027,-8.7e-4 0.0677,-8.7e-4 0.0937,0 z m -29.7187,15.0625 c 0.027,0.008 0.0355,0.0206 0.0625,0.0312 l 0.0938,0 29.0312,0 c 0.053,-0.005 0.1027,-0.005 0.1562,0 0.454,0.0426 0.8235,0.49824 0.7813,0.96875 -0.042,0.47052 -0.4837,0.85733 -0.9375,0.8125 l -28.9062,0 -5.6563,5.5 c 0.057,-0.87141 0.1071,-1.74884 0.1563,-2.625 l 4.5937,-4.4375 c 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.01,-0.01 0.0222,-0.0222 0.0312,-0.0312 0.0171,-0.01 0.0133,-0.0226 0.0313,-0.0312 0.05,-0.0332 0.1311,-0.0408 0.1875,-0.0625 0.095,-0.0362 0.1807,-0.0623 0.2812,-0.0625 0.01,-0.01 0.0223,-0.0222 0.0313,-0.0312 z m -1.0313,14.625 c 0.0271,0.008 0.0678,0.0207 0.0938,0.0312 l 0.0625,0 29,0 c 0.063,-0.008 0.125,-0.008 0.1875,0 0.452,0.0524 0.799,0.5311 0.75,1 -0.048,0.4689 -0.485,0.86192 -0.9375,0.8125 l -28.9063,0 -5.8437,5.125 c 0.098,-0.84646 0.1601,-1.67922 0.25,-2.53125 l 4.625,-4.0625 c 0.069,-0.0786 0.1593,-0.13867 0.25,-0.1875 0.01,-1.4e-4 0.0233,-1.4e-4 0.0313,0 0.017,-0.019 0.0122,-0.0449 0.0312,-0.0625 0.01,-1.4e-4 0.0212,-1.4e-4 0.0312,0 0.115,-0.0661 0.2438,-0.11861 0.375,-0.125 z m 27.5938,14.1875 c 0.4142,0.0841 0.7272,0.50199 0.6875,0.9375 -0.04,0.43552 -0.4217,0.81028 -0.8437,0.8125 l -28.9688,0 -6,4.78125 c 0.1394,-0.83968 0.274,-1.68479 0.4062,-2.53125 l 4.75,-3.78125 c 0.0181,-0.0192 0.0113,-0.0137 0.0313,-0.0312 0.026,-0.0199 0.0658,-0.0458 0.0937,-0.0625 0.0171,-0.01 0.0446,-0.0226 0.0626,-0.0312 0.01,-1.4e-4 0.0242,-1.4e-4 0.0312,0 0.017,-0.01 0.0132,-0.0226 0.0312,-0.0312 0.01,-0.01 0.0213,-0.0222 0.0313,-0.0312 0.018,-5.8e-4 0.0445,-5.8e-4 0.0625,0 0.01,-1.3e-4 0.0213,-1.3e-4 0.0312,0 0.0171,-0.01 0.0133,-0.0226 0.0313,-0.0312 0.01,-1.4e-4 0.0222,-1.4e-4 0.0313,0 0.044,-0.0129 0.11,0.005 0.1562,0 l 0.0938,0 29.125,0 c 0.027,-8.7e-4 0.0365,-8.7e-4 0.0624,0 0.0271,-8.7e-4 0.0668,-8.7e-4 0.0938,0 z m -31.6562,13.5 c 0.028,0.008 0.0355,0.0208 0.0624,0.0312 l 29.0626,0 c 0.053,-0.005 0.1028,-0.005 0.1562,0 0.405,0.0949 0.7265,0.54035 0.6875,0.96875 -0.039,0.42842 -0.4289,0.79794 -0.8437,0.8125 l -28.9688,0 -6.1875,4.40625 c 0.1832,-0.83102 0.3551,-1.66079 0.5313,-2.5 l 4.875,-3.46875 c 0.018,-0.0191 0.0424,-0.0449 0.0624,-0.0625 0.0181,-0.01 0.0435,-0.0226 0.0626,-0.0312 0.01,-1.4e-4 0.0232,-1.4e-4 0.0312,0 0.017,-0.0192 0.0435,-0.045 0.0625,-0.0625 0.01,-1.5e-4 0.0212,-1.5e-4 0.0313,0 0.1171,-0.0565 0.2458,-0.096 0.375,-0.0937 z m 26.3124,12.90625 c 0.4176,0.0801 0.7274,0.53054 0.6876,0.96875 -0.04,0.43821 -0.4192,0.81493 -0.8438,0.8125 l -28.9375,0 -6.375,4.09375 c 0.2368,-0.84679 0.4899,-1.70519 0.7187,-2.5625 l 4.8126,-3.125 c 0.0499,-0.0333 0.1312,-0.0408 0.1874,-0.0625 0.043,-0.0222 0.0786,-0.0481 0.125,-0.0625 0.01,-1.4e-4 0.0223,-1.4e-4 0.0313,0 0.027,-0.0108 0.0345,-0.0234 0.0625,-0.0312 0.044,-0.0128 0.1101,-0.0258 0.1562,-0.0312 l 0.125,0 29.0938,0 c 0.053,-0.005 0.1028,-0.005 0.1562,0 z m -3.5937,12.15625 c 0.4533,0.0218 0.8337,0.46763 0.8125,0.9375 -0.022,0.46984 -0.453,0.86568 -0.9062,0.84375 l -28.9688,0 -6.4688,3.75 c 0.2879,-0.83429 0.5644,-1.71543 0.8438,-2.5625 l 4.8438,-2.78125 c 0.017,-0.01 0.0445,-0.0226 0.0624,-0.0312 l 0,-0.0312 c 0.0171,-0.01 0.0446,-0.0226 0.0626,-0.0312 0.01,-1.5e-4 0.0232,-1.5e-4 0.0312,0 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.019,-5.8e-4 0.0445,-5.8e-4 0.0625,0 0.01,-1.4e-4 0.0232,-1.4e-4 0.0312,0 0.0171,-0.01 0.0446,-0.0226 0.0626,-0.0312 0.01,-1.4e-4 0.0242,-1.4e-4 0.0312,0 0.044,-0.0128 0.0787,-0.0258 0.125,-0.0312 l 0.1562,0 29.0626,0 c 0.026,-8.9e-4 0.0364,-8.9e-4 0.0624,0 l 0.0313,0 z m -4.0625,11.34375 c 0.036,0.008 0.0584,0.0197 0.0938,0.0312 0.4041,0.10148 0.7019,0.54029 0.6562,0.96875 -0.045,0.42848 -0.4279,0.77351 -0.8438,0.78125 l -29.0312,0 -6.5312,3.375 c 0.3463,-0.82652 0.6623,-1.62631 1,-2.46875 l 4.9062,-2.53125 0.0625,-0.0625 c 0.027,-0.0108 0.0658,0.008 0.0937,0 0.0951,-0.0362 0.1807,-0.0623 0.2813,-0.0625 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.028,0.008 0.0677,0.0206 0.0938,0.0312 l 0.0624,0 29,0 c 0.0271,-0.0108 0.0668,-0.0233 0.0938,-0.0312 z m -33.75,10.46875 c 0.027,0.008 0.0365,0.0206 0.0625,0.0312 l 0.0937,0 28.9688,0 c 0.063,-0.008 0.125,-0.008 0.1875,0 0.4893,-0.01 0.9286,0.49559 0.875,1 -0.053,0.5044 -0.5866,0.86947 -1.0625,0.75 l -29.0625,0 -6.625,3.03125 c 0.4124,-0.81433 0.8161,-1.66569 1.2187,-2.5 l 4.9063,-2.25 c 0.018,-5.8e-4 0.0445,-5.8e-4 0.0625,0 0.1172,-0.0565 0.2459,-0.0647 0.375,-0.0625 z m 24.2812,9.53125 c 0.4141,0.0842 0.7272,0.502 0.6876,0.9375 -0.04,0.4355 -0.4218,0.81026 -0.8438,0.8125 l -29.0312,0 -6.7813,2.71875 c 0.4964,-0.80963 0.9833,-1.66398 1.4687,-2.5 l 4.6876,-1.84375 0.1562,-0.0937 c 0.052,-0.0145 0.102,0.004 0.1562,0 0.0441,-0.0128 0.0787,-0.0258 0.125,-0.0312 l 0.125,0 29.0938,0 c 0.027,-8.9e-4 0.0678,-8.9e-4 0.0938,0 0.026,-8.9e-4 0.0354,-8.9e-4 0.0624,0 z m -5.375,8.46875 c 0.4539,0.0428 0.8236,0.49822 0.7813,0.96875 -0.042,0.47049 -0.515,0.85732 -0.9687,0.8125 l -29.0938,0 -6.8125,2.34375 c 0.6057,-0.80832 1.1884,-1.62398 1.7813,-2.46875 l 4.625,-1.59375 c 0.0519,-0.0145 0.1018,-0.0272 0.1562,-0.0312 0.044,-0.0129 0.0788,-0.0258 0.125,-0.0312 l 0.1562,0 29.0626,0 c 0.027,-8.8e-4 0.0657,-8.8e-4 0.0937,0 0.027,-8.8e-4 0.0678,-8.8e-4 0.0937,0 z m -5.9062,7.375 c 0.4532,0.0218 0.8649,0.46765 0.8438,0.9375 -0.022,0.46986 -0.453,0.86567 -0.9063,0.84375 l -29.125,0 -6.9063,2.03125 c 0.7494,-0.80285 1.5165,-1.64454 2.25,-2.5 l 4.1876,-1.21875 c 0.017,-0.01 0.0132,-0.0226 0.0312,-0.0312 l 0.0312,0 c 0.0171,-5.8e-4 0.0446,-5.8e-4 0.0626,0 0.01,-1.5e-4 0.0232,-1.5e-4 0.0312,0 0.017,-0.01 0.0445,-0.0226 0.0625,-0.0312 0.018,-6e-4 0.0445,-6e-4 0.0625,0 0.01,-1.4e-4 0.0243,-1.4e-4 0.0312,0 0.0171,-0.01 0.0445,-0.0226 0.0626,-0.0312 l 0.0937,0 29.125,0 c 0.026,-8.8e-4 0.0355,-8.8e-4 0.0625,0 z m -6.125,6.21875 c 0.4532,0.0218 0.8337,0.46765 0.8125,0.9375 -0.022,0.46984 -0.453,0.86568 -0.9063,0.84375 l -29.125,0 -6.9062,1.65625 c 0.9605,-0.7987 1.9045,-1.61866 2.8438,-2.5 l 3.6874,-0.90625 0.0626,-0.0312 c 0.027,-8.9e-4 0.0677,-8.9e-4 0.0937,0 0.044,-0.0129 0.0797,0.005 0.125,0 l 0.0625,0 29.1562,0 c 0.0271,-8.9e-4 0.0678,-8.9e-4 0.0938,0 z m -2.9688,4.96875 c 0.414,0.0842 0.7275,0.50199 0.6876,0.9375 -0.04,0.43551 -0.4218,0.81027 -0.8438,0.8125 l -32.375,0 -0.125,0 -6.9688,1.34375 c 1.2773,-0.77586 2.5348,-1.61412 3.7813,-2.53125 l 2.7187,-0.53125 0.1563,0 c 0.01,-1.4e-4 0.0232,-1.4e-4 0.0313,0 0.018,-5.7e-4 0.0132,-5.7e-4 0.0312,0 0.01,-1.4e-4 0.0233,-1.4e-4 0.0312,0 0.0171,-0.01 0.0446,-0.0226 0.0626,-0.0312 l 0.0624,0 0.0938,0 32.5,0 c 0.026,-8.9e-4 0.0355,-8.9e-4 0.0625,0 0.027,-8.9e-4 0.0667,-8.9e-4 0.0937,0 z m -6.6562,3.625 c 0.4209,0.0951 0.7169,0.5579 0.6562,1 -0.0609,0.4421 -0.4765,0.81119 -0.9062,0.78125 l -32.6562,0 -0.0626,0 -2.7812,0.4375 31.9375,0 c 0.036,-0.002 0.0572,-0.002 0.0937,0 0.4533,0.0292 0.8408,0.46763 0.8126,0.9375 -0.0281,0.46984 -0.453,0.87291 -0.9063,0.84375 l -35.9063,0 -0.0624,0 c -1.462,-0.8387 -0.0375,-0.61688 5.6562,-3.8125 l 1.0938,-0.1875 c 0.045,-0.003 0.0797,-0.003 0.125,0 l 0.125,0 32.5312,0 c 0.054,-0.005 0.1027,-0.005 0.1562,0 0.0271,-8.8e-4 0.0678,-8.8e-4 0.0938,0 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4046"
         d="m -405.0074,539.22241 c 27.5056,0 49.8126,56.25874 49.8126,125.625 -1e-4,69.36626 -22.3071,125.59375 -49.8126,125.59375 -27.5054,0 -49.8124,-56.22749 -49.8124,-125.59375 -1e-4,-69.36626 22.307,-125.625 49.8124,-125.625 z"
         style="fill:url(#radialGradient4474);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4590"
         d="m -438.0386,672.00366 c 0.6642,-0.004 1.273,0.14615 1.6562,0.1875 2.8262,2.30748 0.7813,8.38197 0.7813,12.03125 l 3.6875,33.9375 14.1562,-1.9375 c 11.214,-0.85897 5.2545,5.91469 4.7813,10.25 -3.0011,15.83685 -1.7263,21.0796 -17.6875,33.9375 -0.2907,-0.48396 -0.5846,-1.00412 -0.875,-1.5 -9.6734,-18.31598 -16.67,-44.82001 -18.5625,-68 0.7744,-3.03635 3.4778,-7.31239 10.0625,-18.125 0.6163,-0.61766 1.3358,-0.77689 2,-0.78125 z"
         style="fill:url(#radialGradient4611);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4491"
         d="m 204.6802,579.12866 c 7.0887,-0.0164 14.7973,1.27496 23.125,4.21875 -95.2874,-26.4762 -106.4792,181.94717 -66.1876,233.875 -42.2915,-42.63413 -41.8398,-237.89737 43.0626,-238.09375 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4357"
         d="m 210.4614,581.50366 c 3.1568,0 6.2618,0.41871 9.3125,1.1875 0.4128,2.2465 0.8045,4.26039 1.2187,6.5 -1.6974,-0.24055 -3.4976,10e-4 -5.1874,-0.375 -27.213,-6.0605 -46.927,24.4892 -59.875,62.25 l -8.375,2.15625 c 12.4663,-42.8267 35.9639,-71.71875 62.9062,-71.71875 z"
         style="fill:#5e5e5e;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path2996"
         d="m 143.9926,317.81616 c 3.4026,0.0158 6.8131,0.0503 10.1876,0.125 140.0902,3.0998 300.50281,6.40507 323.87495,9.625 23.37214,3.21993 107.42071,-9.97699 466.6875,155.0625 l 19.59375,-3.40625 c 176.1897,31.85437 229.5087,155.04329 239,180.1875 l -8.8125,14.75 c 5.806,32.37278 5.7265,100.82336 -5.1562,105 -3.5522,1.36328 4.0937,0.65625 4.0937,0.65625 0,0 2.5744,35.53812 -0.2187,47.78125 -23.3199,14.33656 -45.2185,11.52932 -67.6875,15.65625 l -36.0938,-2.34375 c -109.16287,7.8795 -217.2009,10.22062 -325.03125,11.4375 l -3.0625,7.25 C 606.35656,857.18965 434.82292,861.2492 314.3989,845.25366 316.0341,564.67145 231.2884,534.33084 203.2739,528.59741 c -96.096,-6.43717 -93.7206,163.899 -65.5937,297.3125 l -462.1876,-48.8125 -4.9687,-86.65625 c -14.1105,-215.01115 -86.834,-212.16498 -115.5625,-175.09375 -17.4731,22.54722 -13.1631,64.35348 -16.0625,96.65625 -0.562,3.81099 -1.0591,7.70696 -1.5,11.65625 -0.9141,5.20976 -2.1523,10.02019 -3.9063,14.25 -1.8069,-17.38043 -13.4443,-31.78145 -3.7187,-50.21875 0.7936,-32.5793 0.1201,-63.95287 6.3125,-101.03125 -5.5973,-20.25998 3.925,-18.25161 10.1562,-23.46875 50.3729,-27.35194 178.7459,-61.61052 291.8126,-96.5625 82.285404,-22.03672 200.461104,-49.30116 305.9374,-48.8125 z"
         style="fill:url(#radialGradient4740);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4687"
         d="m 36.180204,338.47241 c 30.0949,0.0454 58.7067,5.28839 72.031196,11.40625 13.3245,6.11786 13.6243,6.19902 13.7812,7.5625 -45.683696,-21.57547 -135.153396,-3.95704 -170.937396,7.09375 -123.057004,48.45517 -128.794704,7.77393 18.9062,-19.21875 12.0773,-3.26129 39.7548999,-6.88364 66.2188,-6.84375 z"
         style="opacity:0.8;fill:url(#radialGradient4703);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path6784"
         d="m -366.7261,436.81616 c 75.0893,-0.62309 126.8386,20.4862 184.9063,35.71875 -58.1555,17.69243 -115.8136,40.74133 -172.0938,79.0625 -17.7845,-36.44782 -46.9547,-83.08229 -92.6562,-34.15625 l -17.4063,-30.53125 c 4.9051,-30.66686 54.9229,-43.56744 73.1563,-49.15625 8.3,-0.56016 16.3258,-0.87304 24.0937,-0.9375 z"
         style="fill:url(#radialGradient6792);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path6752"
         d="m -281.6324,510.65991 41.8126,155.625 c -22.0361,11.12645 -44.0577,15.89929 -66.0938,17.625 l -25.5,-84 -10.9688,-6.25 -11.5312,-42.0625 c 24.0937,-15.21724 48.1876,-31.16156 72.2812,-40.9375 z"
         style="fill:url(#radialGradient6766);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4864"
         d="m 1203.3052,659.34741 -8.7813,14.8125 2.25,17.40625 c -30.4226,6.29038 -60.8274,21.72553 -91.25,17.875 l 8.3125,-14.40625 89.4688,-35.6875 z"
         style="fill:url(#radialGradient4872);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4668"
         d="m 286.3989,620.65991 c 85.8332,19.46578 286.33513,51.08278 265.3125,69.90625 l -84.3125,100.8125 c -53.13424,1.28513 -103.1036,-4.07165 -154.9063,-6.78125 -1.449,-52.92593 -15.8044,-145.55225 -26.0937,-163.9375 z"
         style="fill:url(#radialGradient4678);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4625"
         d="m 1153.2427,797.75366 37.75,28.15625 -55.4063,7.53125 -18.7187,-27 36.375,-8.6875 z"
         style="fill:url(#linearGradient4633);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4595"
         d="m 333.6489,474.90991 c 21.9972,0.11628 43.591,0.7487 64.21875,1.375 108.33822,36.37655 218.03864,79.18695 348.34375,219.90625 l -187.09375,-26.375 C 472.50418,587.27842 325.3385,483.91307 221.4302,484.22241 c 49.1514,-1.67554 36.6184,-6.99655 45.5312,-7.59375 22.2897,-1.43518 44.6903,-1.83503 66.6875,-1.71875 z"
         style="fill:url(#radialGradient4610);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4445"
         d="m 415.30515,545.37866 c 40.8797,0.6106 137.30246,23.33894 202.90625,42.5625 l 25.09375,17.96875 -36.9375,37.0625 -78.9375,-5.53125 c -37.73562,-33.5183 -76.71085,-61.13816 -119.4375,-88.53125 -2.83575,-1.57542 1.05136,-3.47503 3.53125,-3.53125 1.2002,-0.0272 2.46255,-0.0197 3.78125,0 z"
         style="fill:url(#radialGradient4453);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3788"
         d="m -239.1636,666.12866 c 49.4276,59.10667 252.705704,66.46694 358.5,93.25 l 18.3438,66.53125 -462.1876,-48.8125 -5.125,-88.84375 90.4688,-22.125 z"
         style="fill:url(#radialGradient4631);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4920"
         d="m 284.6489,475.94116 c 2.5464,-0.0123 5.1085,3.2e-4 7.6875,0.0312 98.6247,16.26202 203.05812,60.01504 283.3125,98.21875 l 42.90625,12.0625 25.0625,17.90625 -0.375,1.65625 -0.21875,-0.0312 -0.1875,-0.125 -25.03125,-17.90625 -42.75,-12 C 492.73714,536.20184 367.1434,484.14717 277.0239,476.03491 c 2.5526,-0.0358 5.0786,-0.0814 7.625,-0.0937 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#b8feb6;fill-opacity:1;stroke:none;stroke-width:1.70000005;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path46115"
         d="m 286.2426,620.56616 c 138.5228,27.69583 490.93755,81.75 490.93755,81.75 l -0.1875,65.59375 c 0,0 -32.92221,-4.53989 -33.28125,-5.4375 l -0.84375,-30.59375 c 0,0 -132.29681,-29.9682 -190.6875,-41.90625 1.5e-4,0.0227 7e-5,0.0394 0,0.0625 l -84.78125,101.34375 -6.5625,1.25 70.03125,-90.375 C 432.34721,678.837 357.886,644.32143 286.2426,620.56616 z"
         style="fill:url(#radialGradient4694);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4474"
         d="m 202.6489,515.90991 c 41.1699,0 77.0801,42.79782 96.0625,106.25 -4.5012,-0.89135 -7.8852,-0.6311 -12.4688,-1.53125 -26.7662,-77.43077 -65.7674,-88.94759 -82.9687,-92.03125 -22.3137,-5.24169 -52.8744,17.17105 -68.5937,51.03125 l -9.9063,-2.65625 c 19.9648,-37.73911 47.4812,-61.0625 77.875,-61.0625 z"
         style="fill:url(#radialGradient4688);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5016"
         d="m 1053.0552,842.53491 c -24.8719,13.8916 -98.9504,20.26057 -137.7188,8.125 43.67259,-1.16812 89.1514,-3.58714 137.7188,-8.125 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         sodipodi:nodetypes="ccccccccscc"
         inkscape:connector-curvature="0"
         id="path4830"
         d="m 1070.7427,760.37866 c 0,0 43.2903,56.65108 62.5937,76.53125 l 59.9063,-9.3125 c -3.949,2.35457 -7.4121,5.6705 -11.5,6.9375 -10.9047,5.76573 -33.7502,7.54725 -55.7188,9.625 l -36.0937,-2.3125 c -103.45646,4.76834 -169.69991,11.2631 -325.0313,11.40625 l 9.125,-69.8125 c 0,0 113.51617,0.26703 170.21875,-2.03125 37.67458,-1.52703 112.84375,-7.8125 112.84375,-7.8125 z"
         style="fill:url(#radialGradient5029);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4820"
         d="m 1051.0552,803.00366 50.375,20.1875 0.375,4 c -89.5212,12.08222 -200.58267,11.56605 -320.4688,11.3125 l -16.375,-7.40625 3.65625,-19.1875 282.43755,-8.90625 z"
         style="fill:#171314;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4406"
         d="m 1051.1802,805.75366 c -32.8603,8.69029 -50.6968,15.73885 -65.00005,14.875 -31.98323,-1.93163 -154.86921,4.83277 -215.40625,-4.1875 81.02502,-0.45232 193.33234,-0.96677 280.4063,-10.6875 z"
         style="fill:url(#radialGradient4435);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4810"
         d="m 1071.9302,759.19116 30.0937,36.4375 c 8.6227,15.11708 21.728,34.7001 -8.875,10.53125 l -35.625,-32.5625 14.4063,-14.40625 z"
         style="fill:url(#radialGradient4818);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4778"
         d="m 1186.5864,679.40991 10.0938,12.875 c 3.6509,29.65298 1.144,56.48961 -2.5313,82.8125 l -32.5,20.65625 -44.7812,10.6875 -44.9375,-47.25 33.5937,-49.75 25.3438,-3.46875 55.7187,-26.5625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4722"
         d="m 1179.1802,688.03491 0.6562,0.625 -47.7187,23.25 -0.094,0.0312 -0.094,0.0312 -33.8438,6.3125 -0.2812,-0.75 33.75,-6.3125 47.625,-23.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#999999;fill-opacity:1;stroke:none;stroke-width:1.5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45356"
         d="m 1171.8989,693.09741 c -0.024,0.25954 -0.069,0.52117 -0.094,0.78125 l -1.7188,0 1.8125,-0.78125 z m -2.125,0.90625 c -1.0991,0.85357 -2.1896,1.7089 -3.2812,2.5625 l -2.5313,0 3.0625,-1.34375 0.125,0 c 0.052,-0.0398 0.073,-0.0852 0.125,-0.125 l 2.5,-1.09375 z m -2.25,2.5625 c 0.076,0.44891 0.1817,0.89485 0.25,1.34375 l 3.625,0 c -0.055,0.44564 -0.1289,0.89676 -0.1875,1.34375 l -4.0937,0 c -0.1433,-0.89789 -0.3274,-1.7896 -0.5,-2.6875 l 0.9062,0 z m -0.5625,2.6875 c -1.1105,0.89791 -2.2405,1.7896 -3.3437,2.6875 l -5.25,0 c -0.2534,-0.85486 -0.5352,-1.70765 -0.8125,-2.5625 l 0.2812,-0.125 0.6875,0 c 0.1361,0.449 0.2767,0.89477 0.4063,1.34375 l 5.3125,0 c 0.5603,-0.44898 1.1253,-0.89475 1.6875,-1.34375 l 1.0312,0 z m -2.2812,2.6875 c 0.08,0.4489 0.1457,0.89484 0.2187,1.34375 l 4.5625,0 c 0.456,-0.39515 0.8891,-0.79234 1.3438,-1.1875 -0.043,0.29154 -0.049,0.58295 -0.094,0.875 -0.6341,0.5582 -1.2727,1.12931 -1.9062,1.6875 l -4.5313,0 c -0.1527,-0.89789 -0.3189,-1.82085 -0.5,-2.71875 l 0.9063,0 z m -6.5,0 c -1.1403,0.8979 -2.2751,1.82086 -3.4063,2.71875 l -5.8125,0 c -0.173,-0.41405 -0.3532,-0.83592 -0.5312,-1.25 l 0.9062,-0.40625 c 0.04,0.0966 0.085,0.1847 0.125,0.28125 l 5.875,0 c 0.5743,-0.44891 1.1422,-0.89485 1.7188,-1.34375 l 1.125,0 z m 11.4687,2.71875 c 0.019,0.44901 0.051,0.89476 0.062,1.34375 l 0.4688,0 c -0.077,0.44687 -0.1376,0.89584 -0.2188,1.34375 l -0.9062,0 c -0.03,-0.8979 -0.096,-1.78959 -0.1563,-2.6875 l 0.75,0 z m -5.5312,0 c -1.0656,0.89791 -2.097,1.7896 -3.1563,2.6875 l -5.1562,0 c -0.2742,-0.8979 -0.5441,-1.78959 -0.8438,-2.6875 l 1,0 c 0.1398,0.44901 0.2727,0.89476 0.4063,1.34375 l 5.1562,0 c 0.5382,-0.44899 1.0853,-0.89474 1.625,-1.34375 l 0.9688,0 z m -15.3438,0 c -1.1601,0.89791 -2.3195,1.7896 -3.4687,2.6875 l -5.7813,0 3.0313,-1.34375 3.25,0 c 0.5832,-0.44899 1.164,-0.89474 1.75,-1.34375 l 1.2187,0 z m 20.1563,2.6875 c -0.9771,0.8979 -1.9639,1.78961 -2.9375,2.6875 l -4.3438,0 c -0.1632,-0.89789 -0.3719,-1.7896 -0.5625,-2.6875 l 0.875,0 c 0.085,0.44892 0.1718,0.89484 0.25,1.34375 l 4.4063,0 c 0.4951,-0.44891 1.004,-0.89483 1.5,-1.34375 l 0.8125,0 z m -13.2813,0 c -1.0977,0.8979 -2.1915,1.78961 -3.2812,2.6875 l -5.6875,0 c -0.3819,-0.89789 -0.7517,-1.7896 -1.1563,-2.6875 l 1.0938,0 c 0.1928,0.44892 0.344,0.89484 0.5312,1.34375 l 5.75,0 c 0.5533,-0.44891 1.1009,-0.89483 1.6563,-1.34375 l 1.0937,0 z m -17.6562,0.65625 c -0.8804,0.67742 -1.7519,1.35386 -2.625,2.03125 l -1.9688,0 4.5938,-2.03125 z m 28.8437,2.03125 c 0.025,0.449 0.044,0.89476 0.062,1.34375 l 2.25,0 c -0.092,0.44905 -0.1849,0.89384 -0.2812,1.34375 l -2.5938,0 c -0.043,-0.89789 -0.084,-1.78958 -0.1562,-2.6875 l 0.7187,0 z m -5.3437,0 c -1.0216,0.89792 -2.0461,1.78961 -3.0625,2.6875 l -5.0313,0 c -0.2833,-0.89789 -0.5672,-1.78958 -0.875,-2.6875 l 0.9688,0 c 0.144,0.449 0.2995,0.89476 0.4375,1.34375 l 5.0625,0 c 0.5165,-0.44899 1.0134,-0.89475 1.5312,-1.34375 l 0.9688,0 z m -14.9688,0 c -1.12,0.89792 -2.2336,1.78961 -3.3437,2.6875 l -6.1563,0 c -0.4758,-0.89789 -0.9731,-1.78958 -1.4687,-2.6875 l 1.1875,0 c 0.2389,0.449 0.4534,0.89476 0.6875,1.34375 l 6.1562,0 c 0.5635,-0.44899 1.1215,-0.89475 1.6875,-1.34375 l 1.25,0 z m 19.6563,2.6875 c -0.9318,0.89791 -1.8519,1.78961 -2.7813,2.6875 l -4.2812,0 c -0.1748,-0.89789 -0.3302,-1.78959 -0.5313,-2.6875 l 0.8125,0 c 0.09,0.44892 0.2286,0.89485 0.3125,1.34375 l 4.25,0 c 0.4728,-0.4489 0.9641,-0.89483 1.4375,-1.34375 l 0.7813,0 z m -12.9063,0 c -1.0562,0.89791 -2.1383,1.78961 -3.1875,2.6875 l -5.5312,0 c -0.3897,-0.89789 -0.8075,-1.78959 -1.2188,-2.6875 l 1.0625,0 c 0.1964,0.44892 0.3715,0.89485 0.5625,1.34375 l 5.625,0 c 0.5329,-0.4489 1.0591,-0.89483 1.5938,-1.34375 l 1.0937,0 z m -16.4375,0 c -1.1323,0.89791 -2.2543,1.78961 -3.375,2.6875 l -6.5,0 c -0.4355,-0.70318 -0.8666,-1.39056 -1.3125,-2.09375 l 0.4063,-0.0625 0.5937,-0.25 c 0.2224,0.35972 0.4366,0.7028 0.6563,1.0625 l 6.5,0 c 0.5685,-0.4489 1.1472,-0.89483 1.7187,-1.34375 l 1.3125,0 z m -21.2187,1.84375 c -0.3551,0.27753 -0.709,0.56623 -1.0625,0.84375 l -5.4688,0 6.5313,-0.84375 z m 48.5625,0.84375 c 0.032,0.44899 0.069,0.89476 0.094,1.34375 l 3.4688,0 c 0.091,-0.0972 0.1904,-0.18401 0.2812,-0.28125 -0.072,0.30169 -0.1455,0.60425 -0.2187,0.90625 -0.2299,0.24876 -0.4579,0.50124 -0.6875,0.75 l -3.4063,0 c -0.057,-0.89789 -0.1339,-1.82083 -0.2187,-2.71875 l 0.6875,0 z m -5.1563,0 c -0.9787,0.89792 -1.9942,1.82086 -2.9687,2.71875 l -4.875,0 c -0.2935,-0.89789 -0.5894,-1.82083 -0.9063,-2.71875 l 0.9375,0 c 0.1488,0.44899 0.2945,0.89476 0.4375,1.34375 l 4.9375,0 c 0.4954,-0.44899 0.9723,-0.89476 1.4688,-1.34375 l 0.9687,0 z m -14.6562,0 c -1.0809,0.89792 -2.1467,1.82086 -3.2188,2.71875 l -6.0312,0 c -0.4822,-0.89789 -0.9678,-1.82083 -1.4688,-2.71875 l 1.1563,0 c 0.2418,0.44899 0.4503,0.89476 0.6875,1.34375 l 6.0625,0 c 0.5442,-0.44899 1.0785,-0.89476 1.625,-1.34375 l 1.1875,0 z m -17.5938,0 c -1.1347,0.89792 -2.2537,1.82086 -3.375,2.71875 l -6.7812,0 c -0.6225,-0.89789 -1.2384,-1.82083 -1.875,-2.71875 l 1.25,0 c 0.3108,0.44899 0.6302,0.89476 0.9375,1.34375 l 6.7812,0 c 0.5687,-0.44899 1.1466,-0.89476 1.7188,-1.34375 l 1.3437,0 z m -19.8437,0.28125 c -1.025,0.80843 -2.0522,1.62907 -3.0625,2.4375 l -2.4063,0 1,-1.375 1.6563,0 c 0.3588,-0.28325 0.7018,-0.56053 1.0625,-0.84375 l 1.75,-0.21875 z m 60.6875,2.4375 c -0.185,0.74818 -0.3669,1.5001 -0.5625,2.25 0.056,-0.75162 0.09,-1.49839 0.125,-2.25 l 0.4375,0 z m -4,0 c -0.8875,0.89789 -1.7702,1.7896 -2.6563,2.6875 l -4.1562,0 c -0.1874,-0.8979 -0.3812,-1.78961 -0.5938,-2.6875 l 0.8438,0 c 0.096,0.44891 0.1911,0.89485 0.2812,1.34375 l 4.1563,0 c 0.4509,-0.4489 0.8924,-0.89484 1.3437,-1.34375 l 0.7813,0 z m -12.5938,0 c -1.0157,0.89789 -2.0528,1.7896 -3.0625,2.6875 l -5.4062,0 c -0.3984,-0.8979 -0.831,-1.78961 -1.25,-2.6875 l 1.0625,0 c 0.2004,0.44891 0.3672,0.89485 0.5625,1.34375 l 5.5,0 c 0.5129,-0.4489 1.0168,-0.89484 1.5312,-1.34375 l 1.0625,0 z m -16.0937,0 c -1.0956,0.89789 -2.165,1.7896 -3.25,2.6875 l -6.375,0 c -0.5611,-0.8979 -1.1418,-1.78961 -1.7188,-2.6875 l 1.1563,0 c 0.2804,0.44891 0.5985,0.89485 0.875,1.34375 l 6.4062,0 c 0.5506,-0.4489 1.103,-0.89484 1.6563,-1.34375 l 1.25,0 z m -18.5,0 c -1.1272,0.89789 -2.2631,1.7896 -3.375,2.6875 l -6.9063,0 c -0.6753,-0.8979 -1.3446,-1.78961 -2.0312,-2.6875 l 1.25,0 c 0.3365,0.44891 0.6663,0.89485 1,1.34375 l 6.9687,0 c 0.5638,-0.4489 1.1198,-0.89484 1.6875,-1.34375 l 1.4063,0 z m 50.5,2.6875 c -0.7827,0.89791 -1.5596,1.7896 -2.3438,2.6875 l -3.2812,0 c -0.072,-0.8979 -0.1513,-1.78959 -0.25,-2.6875 l 0.6875,0 c 0.039,0.449 0.061,0.89474 0.094,1.34375 l 3.3125,0 c 0.3998,-0.44901 0.8194,-0.89475 1.2188,-1.34375 l 0.5625,0 z m -10.25,0 c -0.9368,0.89791 -1.8789,1.7896 -2.8125,2.6875 l -4.7813,0 c -0.3046,-0.8979 -0.6104,-1.78959 -0.9375,-2.6875 l 0.9375,0 c 0.1541,0.449 0.289,0.89474 0.4375,1.34375 l 4.8125,0 c 0.4748,-0.44901 0.9619,-0.89475 1.4375,-1.34375 l 0.9063,0 z m -14.3125,0 c -1.0428,0.89791 -2.09,1.7896 -3.125,2.6875 l -5.9063,0 c -0.4896,-0.8979 -0.9926,-1.78959 -1.5,-2.6875 l 1.125,0 c 0.2452,0.449 0.5093,0.89474 0.75,1.34375 l 5.9063,0 c 0.5255,-0.44901 1.0662,-0.89475 1.5937,-1.34375 l 1.1563,0 z m -17.2813,0 c -1.1004,0.89791 -2.162,1.7896 -3.25,2.6875 l -6.6562,0 c -0.6261,-0.8979 -1.2671,-1.78959 -1.9063,-2.6875 l 1.25,0 c 0.3123,0.449 0.5973,0.89474 0.9063,1.34375 l 6.6875,0 c 0.5518,-0.44901 1.1011,-0.89475 1.6562,-1.34375 l 1.3125,0 z m -19.1562,0 c -1.1098,0.89791 -2.2198,1.7896 -3.3125,2.6875 l -5.0938,0 0.9688,-1.34375 4.3437,0 c 0.5539,-0.44901 1.098,-0.89475 1.6563,-1.34375 l 1.4375,0 z m 59.2812,2.6875 c -0.023,0.44891 -0.064,0.89485 -0.094,1.34375 l 0.7187,0 c -0.1291,0.44754 -0.2733,0.89579 -0.4062,1.34375 l -0.875,0 c 0.054,-0.8979 0.1,-1.78961 0.125,-2.6875 l 0.5312,0 z m -4,0 c -0.8441,0.89789 -1.6873,1.7896 -2.5312,2.6875 l -4,0 c -0.201,-0.8979 -0.4311,-1.78961 -0.6563,-2.6875 l 0.7813,0 c 0.1028,0.44891 0.2156,0.89485 0.3125,1.34375 l 4.0625,0 c 0.4296,-0.4489 0.8515,-0.89484 1.2812,-1.34375 l 0.75,0 z m -12.25,0 c -0.9762,0.89789 -1.9662,1.7896 -2.9375,2.6875 l -5.3437,0 c -0.4082,-0.8979 -0.8223,-1.78961 -1.25,-2.6875 l 1.0312,0 c 0.205,0.44891 0.3936,0.89485 0.5938,1.34375 l 5.375,0 c 0.4935,-0.4489 1.0051,-0.89484 1.5,-1.34375 l 1.0312,0 z m -15.8125,0 c -1.0599,0.89789 -2.1058,1.7896 -3.1562,2.6875 l -6.2813,0 c -0.567,-0.8979 -1.1055,-1.78961 -1.6875,-2.6875 l 1.1563,0 c 0.2831,0.44891 0.5643,0.89485 0.8437,1.34375 l 6.3125,0 c 0.5331,-0.4489 1.0583,-0.89484 1.5938,-1.34375 l 1.2187,0 z m -18.1875,0 c -1.0953,0.89789 -2.1689,1.7896 -3.25,2.6875 l -6.8437,0 c -0.6775,-0.8979 -1.3435,-1.78961 -2.0313,-2.6875 l 1.25,0 c 0.3373,0.44891 0.6965,0.89485 1.0313,1.34375 l 6.8125,0 c 0.5482,-0.4489 1.1044,-0.89484 1.6562,-1.34375 l 1.375,0 z m 49.5,2.6875 c -0.738,0.89791 -1.4469,1.7896 -2.1875,2.6875 l -3.1875,0 c -0.088,-0.8979 -0.1988,-1.78959 -0.3125,-2.6875 l 0.6563,0 c 0.047,0.449 0.1157,0.89475 0.1562,1.34375 l 3.1875,0 c 0.3778,-0.449 0.7791,-0.89475 1.1563,-1.34375 l 0.5312,0 z m -9.9375,0 c -0.8959,0.89791 -1.7936,1.7896 -2.6875,2.6875 l -4.6875,0 c -0.3169,-0.8979 -0.6305,-1.78959 -0.9687,-2.6875 l 0.9062,0 c 0.1598,0.449 0.3455,0.89475 0.5,1.34375 l 4.6875,0 c 0.4547,-0.449 0.9198,-0.89475 1.375,-1.34375 l 0.875,0 z m -14,0 c -1.0057,0.89791 -2.0322,1.7896 -3.0312,2.6875 l -5.7813,0 c -0.498,-0.8979 -1.0165,-1.78959 -1.5312,-2.6875 l 1.0937,0 c 0.2491,0.449 0.5051,0.89475 0.75,1.34375 l 5.8125,0 c 0.5074,-0.449 1.0222,-0.89475 1.5313,-1.34375 l 1.1562,0 z m -16.9687,0 c -1.0672,0.89791 -2.1317,1.7896 -3.1875,2.6875 l -6.5313,0 c -0.6306,-0.8979 -1.2947,-1.78959 -1.9375,-2.6875 l 1.2188,0 c 0.3142,0.449 0.6263,0.89475 0.9375,1.34375 l 6.5937,0 c 0.5356,-0.449 1.0552,-0.89475 1.5938,-1.34375 l 1.3125,0 z m -18.875,0 c -1.0804,0.89791 -2.1545,1.7896 -3.2188,2.6875 l -6.9062,0 c -0.1687,-0.21177 -0.331,-0.41321 -0.5,-0.625 l 0.5937,-0.8125 c 0.028,0.0353 0.035,0.0584 0.062,0.0937 l 6.9375,0 c 0.5395,-0.44899 1.0814,-0.89475 1.625,-1.34375 l 1.4063,0 z m 58.1875,2.6875 c -0.014,0.4489 -0.041,0.89486 -0.062,1.34375 l 1.375,0 c -0.1463,0.45439 -0.2873,0.92035 -0.4375,1.375 l -1.4375,0 c 0.036,-0.8979 0.054,-1.82086 0.062,-2.71875 l 0.5,0 z m -3.875,0 c -0.8019,0.89789 -1.6036,1.82085 -2.4063,2.71875 l -3.9062,0 c -0.2157,-0.8979 -0.4487,-1.82086 -0.6875,-2.71875 l 0.75,0 c 0.1098,0.4489 0.2396,0.89486 0.3437,1.34375 l 3.9688,0 c 0.4089,-0.44889 0.81,-0.89485 1.2187,-1.34375 l 0.7188,0 z m -12,0 c -0.9378,0.89789 -1.8474,1.82085 -2.7813,2.71875 l -5.25,0 c -0.419,-0.8979 -0.8437,-1.82086 -1.2812,-2.71875 l 1,0 c 0.21,0.4489 0.4195,0.89486 0.625,1.34375 l 5.2812,0 c 0.4747,-0.44889 0.9306,-0.89485 1.4063,-1.34375 l 1,0 z m -15.4688,0 c -1.0253,0.89789 -2.077,1.82085 -3.0937,2.71875 l -6.125,0 c -0.5741,-0.8979 -1.1621,-1.82086 -1.75,-2.71875 l 1.125,0 c 0.2863,0.4489 0.5921,0.89486 0.875,1.34375 l 6.1875,0 c 0.5161,-0.44889 1.0442,-0.89485 1.5625,-1.34375 l 1.2187,0 z m -17.9062,0 c -1.0645,0.89789 -2.105,1.82085 -3.1563,2.71875 l -6.7187,0 c -0.6807,-0.8979 -1.3726,-1.82086 -2.0625,-2.71875 l 1.2187,0 c 0.3386,0.4489 0.6637,0.89486 1,1.34375 l 6.75,0 c 0.5332,-0.44889 1.0573,-0.89485 1.5938,-1.34375 l 1.375,0 z m -19.2813,0 c -0.6853,0.58306 -1.3534,1.16694 -2.0312,1.75 l 1.2812,-1.75 0.75,0 z m 67.875,2.71875 c -0.6944,0.8979 -1.3957,1.78962 -2.0937,2.6875 l -3.0625,0 c -0.1047,-0.89788 -0.214,-1.7896 -0.3438,-2.6875 l 0.625,0 c 0.055,0.449 0.1074,0.89475 0.1563,1.34375 l 3.125,0 c 0.3563,-0.449 0.7071,-0.89475 1.0625,-1.34375 l 0.5312,0 z m -9.6875,0 c -0.8561,0.8979 -1.7074,1.78962 -2.5625,2.6875 l -4.5937,0 c -0.3301,-0.89788 -0.6808,-1.7896 -1.0313,-2.6875 l 0.9063,0 c 0.1661,0.449 0.3388,0.89475 0.5,1.34375 l 4.5937,0 c 0.4352,-0.449 0.8771,-0.89475 1.3125,-1.34375 l 0.875,0 z m -13.7187,0 c -0.9698,0.8979 -1.9423,1.78962 -2.9063,2.6875 l -5.7187,0 c -0.5075,-0.89788 -1.0081,-1.7896 -1.5313,-2.6875 l 1.0938,0 c 0.2534,0.449 0.4692,0.89475 0.7187,1.34375 l 5.75,0 c 0.4897,-0.449 0.9776,-0.89475 1.4688,-1.34375 l 1.125,0 z m -16.6875,0 c -1.035,0.8979 -2.0692,1.78962 -3.0938,2.6875 l -6.4375,0 c -0.6363,-0.89788 -1.2901,-1.7896 -1.9375,-2.6875 l 1.2188,0 c 0.3167,0.449 0.6235,0.89475 0.9375,1.34375 l 6.4687,0 c 0.5198,-0.449 1.04,-0.89475 1.5625,-1.34375 l 1.2813,0 z m -18.625,0 c -1.052,0.8979 -2.0568,1.78962 -3.0938,2.6875 l -6.8125,0 c -0.6809,-0.85271 -1.3758,-1.70977 -2.0625,-2.5625 l 0.094,-0.125 1.0312,0 c 0.3561,0.449 0.708,0.89475 1.0625,1.34375 l 6.8438,0 c 0.5256,-0.449 1.033,-0.89475 1.5625,-1.34375 l 1.375,0 z m 57.2187,2.6875 c 0,0.44892 -0.019,0.89485 -0.031,1.34375 l 1.6875,0 c -0.1608,0.45182 -0.3363,0.89453 -0.5,1.34375 l -1.6875,0 c 0.017,-0.8979 0.042,-1.7896 0.031,-2.6875 l 0.5,0 z m -3.75,0 c -0.7607,0.8979 -1.5187,1.7896 -2.2812,2.6875 l -3.875,0 c -0.2313,-0.8979 -0.4653,-1.7896 -0.7188,-2.6875 l 0.7813,0 c 0.1173,0.44892 0.2318,0.89485 0.3437,1.34375 l 3.8438,0 c 0.3886,-0.4489 0.7993,-0.89483 1.1875,-1.34375 l 0.7187,0 z m -11.7187,0 c -0.9004,0.8979 -1.79,1.7896 -2.6875,2.6875 l -5.1563,0 c -0.4309,-0.8979 -0.8954,-1.7896 -1.3437,-2.6875 l 1,0 c 0.2156,0.44892 0.4137,0.89485 0.625,1.34375 l 5.1875,0 c 0.4563,-0.4489 0.9179,-0.89483 1.375,-1.34375 l 1,0 z m -15.2188,0 c -0.9917,0.8979 -1.9845,1.7896 -2.9687,2.6875 l -6.0938,0 c -0.5821,-0.8979 -1.155,-1.7896 -1.75,-2.6875 l 1.125,0 c 0.29,0.44892 0.5882,0.89485 0.875,1.34375 l 6.0938,0 c 0.4996,-0.4489 0.9984,-0.89483 1.5,-1.34375 l 1.2187,0 z m -17.6562,0 c -1.0347,0.8979 -2.0712,1.7896 -3.0938,2.6875 l -6.625,0 c -0.6849,-0.8979 -1.3693,-1.7896 -2.0625,-2.6875 l 1.2188,0 c 0.3403,0.44892 0.6617,0.89485 1,1.34375 l 6.6875,0 c 0.5186,-0.4489 1.0095,-0.89483 1.5312,-1.34375 l 1.3438,0 z m -19,0 c -1.0295,0.8979 -2.0499,1.7896 -3.0625,2.6875 l -2.6563,0 1,-1.34375 1.75,0 c 0.5132,-0.4489 1.0763,-0.89483 1.5938,-1.34375 l 1.375,0 z m 66.75,2.6875 c -0.6518,0.8979 -1.3123,1.78961 -1.9688,2.6875 l -3,0 c -0.1228,-0.89789 -0.2594,-1.7896 -0.4062,-2.6875 l 0.625,0 c 0.064,0.449 0.161,0.89475 0.2187,1.34375 l 3,0 c 0.3354,-0.449 0.6971,-0.89475 1.0313,-1.34375 l 0.5,0 z m -9.4375,0 c -0.8174,0.8979 -1.6202,1.78961 -2.4375,2.6875 l -4.5,0 c -0.3444,-0.89789 -0.6988,-1.7896 -1.0625,-2.6875 l 0.9062,0 c 0.1729,0.449 0.3318,0.89475 0.5,1.34375 l 4.5313,0 c 0.416,-0.449 0.8026,-0.89475 1.2187,-1.34375 l 0.8438,0 z m -13.4688,0 c -0.9347,0.8979 -1.8511,1.78961 -2.7812,2.6875 l -5.625,0 c -0.5179,-0.89789 -1.0612,-1.7896 -1.5938,-2.6875 l 1.0938,0 c 0.2583,0.449 0.4953,0.89475 0.75,1.34375 l 5.6562,0 c 0.4726,-0.449 0.9325,-0.89475 1.4063,-1.34375 l 1.0937,0 z m -16.4062,0 c -1.0038,0.8979 -2.0056,1.78961 -3,2.6875 l -6.375,0 c -0.643,-0.89789 -1.2845,-1.7896 -1.9375,-2.6875 l 1.1562,0 c 0.3197,0.449 0.6516,0.89475 0.9688,1.34375 l 6.375,0 c 0.5046,-0.449 1.0242,-0.89475 1.5312,-1.34375 l 1.2813,0 z m -18.3438,0 c -1.0245,0.8979 -2.0519,1.78961 -3.0625,2.6875 l -6.7187,0 c -0.7199,-0.89789 -1.4623,-1.7896 -2.1875,-2.6875 l 1.2187,0 c 0.3572,0.449 0.7379,0.89475 1.0938,1.34375 l 6.75,0 c 0.5123,-0.449 1.0153,-0.89475 1.5312,-1.34375 l 1.375,0 z m 56.2813,2.6875 c 0,0.44889 9e-4,0.89483 0,1.34375 l 1.625,0 c -0.1784,0.45635 -0.3811,0.8903 -0.5625,1.34375 l -1.5,0 c 0,-0.89789 -0.033,-1.78961 -0.062,-2.6875 l 0.5,0 z m -3.6875,0 c -0.7206,0.89789 -1.4329,1.7896 -2.1563,2.6875 l -3.75,0 c -0.248,-0.8979 -0.5121,-1.78961 -0.7812,-2.6875 l 0.75,0 c 0.1253,0.4489 0.2549,0.89484 0.375,1.34375 l 3.7812,0 c 0.3689,-0.44891 0.7256,-0.89485 1.0938,-1.34375 l 0.6875,0 z m -11.4688,0 c -0.864,0.89789 -1.7315,1.7896 -2.5937,2.6875 l -5.0625,0 c -0.4438,-0.8979 -0.8835,-1.78961 -1.3438,-2.6875 l 0.9688,0 c 0.2217,0.4489 0.4386,0.89484 0.6562,1.34375 l 5.0938,0 c 0.4385,-0.44891 0.8735,-0.89485 1.3125,-1.34375 l 0.9687,0 z m -14.9687,0 c -0.9592,0.89789 -1.9223,1.7896 -2.875,2.6875 l -6,0 c -0.5913,-0.8979 -1.1782,-1.78961 -1.7813,-2.6875 l 1.125,0 c 0.2942,0.4489 0.615,0.89484 0.9063,1.34375 l 6,0 c 0.4837,-0.44891 0.9521,-0.89485 1.4375,-1.34375 l 1.1875,0 z m -17.375,0 c -1.006,0.89789 -2.0364,1.7896 -3.0313,2.6875 l -6.5312,0 c -0.6903,-0.8979 -1.3651,-1.78961 -2.0625,-2.6875 l 1.1875,0 c 0.3426,0.4489 0.6591,0.89484 1,1.34375 l 6.5937,0 c 0.5046,-0.44891 0.9926,-0.89485 1.5,-1.34375 l 1.3438,0 z m -18.7813,0 c -1.0045,0.89789 -2.0113,1.7896 -3,2.6875 l -5.7187,0 0.9687,-1.34375 4.875,0 c 0.501,-0.44891 0.9949,-0.89485 1.5,-1.34375 l 1.375,0 z m 65.75,2.6875 c -0.6103,0.89789 -1.2278,1.82086 -1.8437,2.71875 l -2.9063,0 c -0.1419,-0.89789 -0.3038,-1.82086 -0.4687,-2.71875 l 0.625,0 c 0.073,0.44899 0.1514,0.89474 0.2187,1.34375 l 2.9375,0 c 0.3149,-0.44901 0.624,-0.89476 0.9375,-1.34375 l 0.5,0 z m -9.1875,0 c -0.7796,0.89789 -1.5631,1.82086 -2.3437,2.71875 l -4.4375,0 c -0.3598,-0.89789 -0.6846,-1.82086 -1.0625,-2.71875 l 0.8437,0 c 0.1802,0.44899 0.3555,0.89474 0.5313,1.34375 l 4.4375,0 c 0.3975,-0.44901 0.8214,-0.89476 1.2187,-1.34375 l 0.8125,0 z m -13.2187,0 c -0.9008,0.89789 -1.8216,1.82086 -2.7188,2.71875 l -5.5312,0 c -0.5294,-0.89789 -1.082,-1.82086 -1.625,-2.71875 l 1.0625,0 c 0.2637,0.44899 0.4896,0.89474 0.75,1.34375 l 5.5937,0 c 0.4559,-0.44901 0.9181,-0.89476 1.375,-1.34375 l 1.0938,0 z m -16.2188,0 c -0.9736,0.89789 -1.9409,1.82086 -2.9062,2.71875 l -6.2813,0 c -0.6507,-0.89789 -1.309,-1.82086 -1.9687,-2.71875 l 1.1562,0 c 0.3232,0.44899 0.6478,0.89474 0.9688,1.34375 l 6.3125,0 c 0.4898,-0.44901 0.9767,-0.89476 1.4687,-1.34375 l 1.25,0 z m -18.125,0 c -0.9982,0.89789 -1.9834,1.82086 -2.9687,2.71875 l -6.625,0 c -0.7238,-0.89789 -1.4594,-1.82086 -2.1875,-2.71875 l 1.2187,0 c 0.3588,0.44899 0.7048,0.89474 1.0625,1.34375 l 6.6875,0 c 0.4995,-0.44901 0.966,-0.89476 1.4688,-1.34375 l 1.3437,0 z m 55.4688,2.71875 c 0.015,0.4489 0.022,0.89483 0.031,1.34375 l 1.1875,0 c -0.1929,0.4504 -0.3979,0.89645 -0.5937,1.34375 l -0.9688,0 c -0.026,-0.89789 -0.074,-1.78961 -0.125,-2.6875 l 0.4688,0 z m -3.5625,0 c -0.6814,0.89789 -1.3773,1.7896 -2.0625,2.6875 l -3.6875,0 c -0.2658,-0.8979 -0.5267,-1.78961 -0.8125,-2.6875 l 0.75,0 c 0.1338,0.44891 0.2773,0.89484 0.4062,1.34375 l 3.6875,0 c 0.3497,-0.44891 0.6826,-0.89484 1.0313,-1.34375 l 0.6875,0 z m -11.25,0 c -0.8287,0.89789 -1.6721,1.7896 -2.5,2.6875 l -4.9688,0 c -0.4577,-0.8979 -0.9331,-1.78961 -1.4062,-2.6875 l 0.9687,0 c 0.2284,0.44891 0.4318,0.89484 0.6563,1.34375 l 5.0312,0 c 0.4212,-0.44891 0.8599,-0.89484 1.2813,-1.34375 l 0.9375,0 z m -14.75,0 c -0.9277,0.89789 -1.8591,1.7896 -2.7813,2.6875 l -5.9375,0 c -0.6013,-0.8979 -1.1691,-1.78961 -1.7812,-2.6875 l 1.0937,0 c 0.2989,0.44891 0.6101,0.89484 0.9063,1.34375 l 5.9062,0 c 0.4683,-0.44891 0.9678,-0.89484 1.4375,-1.34375 l 1.1563,0 z m -17.1563,0 c -0.9782,0.89789 -1.9693,1.7896 -2.9375,2.6875 l -6.4687,0 c -0.6966,-0.8979 -1.3911,-1.78961 -2.0938,-2.6875 l 1.1875,0 c 0.3455,0.44891 0.6874,0.89484 1.0313,1.34375 l 6.5,0 c 0.491,-0.44891 0.9751,-0.89484 1.4687,-1.34375 l 1.3125,0 z m -18.5312,0 c -0.9806,0.89789 -1.9717,1.7896 -2.9375,2.6875 l -6.6563,0 c -0.4088,-0.49372 -0.8094,-1.00629 -1.2187,-1.5 l 0.5625,-0.75 c 0.2441,0.29789 0.4747,0.60837 0.7187,0.90625 l 6.6875,0 c 0.4894,-0.44891 0.9756,-0.89484 1.4688,-1.34375 l 1.375,0 z m 64.8125,2.6875 c -0.5698,0.8979 -1.1424,1.7896 -1.7188,2.6875 l -2.8437,0 c -0.1621,-0.8979 -0.3473,-1.7896 -0.5313,-2.6875 l 0.5938,0 c 0.083,0.44899 0.204,0.89474 0.2812,1.34375 l 2.8438,0 c 0.295,-0.44901 0.6129,-0.89476 0.9062,-1.34375 l 0.4688,0 z m -8.9688,0 c -0.7428,0.8979 -1.5051,1.7896 -2.25,2.6875 l -4.3437,0 c -0.3761,-0.8979 -0.7317,-1.7896 -1.125,-2.6875 l 0.8125,0 c 0.188,0.44899 0.4099,0.89474 0.5937,1.34375 l 4.375,0 c 0.3796,-0.44901 0.746,-0.89476 1.125,-1.34375 l 0.8125,0 z m -13.0625,0 c -0.8679,0.8979 -1.7285,1.7896 -2.5937,2.6875 l -5.4688,0 c -0.542,-0.8979 -1.0704,-1.7896 -1.625,-2.6875 l 1.0313,0 c 0.2696,0.44899 0.546,0.89474 0.8125,1.34375 l 5.5,0 c 0.4398,-0.44901 0.872,-0.89476 1.3125,-1.34375 l 1.0312,0 z m -15.9375,0 c -0.9445,0.8979 -1.9065,1.7896 -2.8437,2.6875 l -6.1875,0 c -0.6594,-0.8979 -1.3327,-1.7896 -2,-2.6875 l 1.125,0 c 0.3272,0.44899 0.6435,0.89474 0.9687,1.34375 l 6.25,0 c 0.4757,-0.44901 0.96,-0.89476 1.4375,-1.34375 l 1.25,0 z m -17.9062,0 c -0.9729,0.8979 -1.9453,1.7896 -2.9063,2.6875 l -6.5937,0 c -0.7287,-0.8979 -1.4242,-1.7896 -2.1563,-2.6875 l 1.1563,0 c 0.3609,0.44899 0.7337,0.89474 1.0937,1.34375 l 6.5938,0 c 0.4872,-0.44901 0.9785,-0.89476 1.4687,-1.34375 l 1.3438,0 z m -18.7188,0 c -0.953,0.8979 -1.9073,1.7896 -2.8437,2.6875 l -1.2188,0 0.9688,-1.34375 0.3125,0 c 0.4743,-0.44901 0.9589,-0.89476 1.4375,-1.34375 l 1.3437,0 z m 73.4063,2.6875 c 0.026,0.4489 0.042,0.89482 0.062,1.34375 l 0.375,0 c -0.2122,0.45395 -0.4411,0.89327 -0.6563,1.34375 l -0.062,0 c -0.048,-0.8979 -0.084,-1.7896 -0.1562,-2.6875 l 0.4375,0 z m -3.4688,0 c -0.6433,0.8979 -1.2581,1.7896 -1.9062,2.6875 l -3.6563,0 c -0.2845,-0.8979 -0.5715,-1.7896 -0.875,-2.6875 l 0.75,0 c 0.1429,0.44891 0.2994,0.89482 0.4375,1.34375 l 3.625,0 c 0.331,-0.44893 0.6703,-0.89484 1,-1.34375 l 0.625,0 z m -11.0312,0 c -0.7944,0.8979 -1.5804,1.7896 -2.375,2.6875 l -4.9688,0 c -0.4726,-0.8979 -0.9191,-1.7896 -1.4062,-2.6875 l 0.9375,0 c 0.2354,0.44891 0.4868,0.89482 0.7187,1.34375 l 4.9375,0 c 0.4044,-0.44893 0.8144,-0.89484 1.2188,-1.34375 l 0.9375,0 z m -14.5625,0 c -0.8972,0.8979 -1.7948,1.7896 -2.6875,2.6875 l -5.875,0 c -0.6125,-0.8979 -1.1903,-1.7896 -1.8125,-2.6875 l 1.0937,0 c 0.3041,0.44891 0.6046,0.89482 0.9063,1.34375 l 5.8437,0 c 0.4534,-0.44893 0.9205,-0.89484 1.375,-1.34375 l 1.1563,0 z m -16.9688,0 c -0.9515,0.8979 -1.87,1.7896 -2.8125,2.6875 l -6.4375,0 c -0.7039,-0.8979 -1.416,-1.7896 -2.125,-2.6875 l 1.1875,0 c 0.3488,0.44891 0.6838,0.89482 1.0313,1.34375 l 6.4375,0 c 0.478,-0.44893 0.9571,-0.89484 1.4375,-1.34375 l 1.2812,0 z m -18.3437,0 c -0.9577,0.8979 -1.9311,1.7896 -2.875,2.6875 l -6.5625,0 c -0.7472,-0.8979 -1.5024,-1.7896 -2.25,-2.6875 l 1.1875,0 c 0.3695,0.44891 0.7556,0.89482 1.125,1.34375 l 6.5937,0 c 0.4783,-0.44893 0.9557,-0.89484 1.4375,-1.34375 l 1.3438,0 z m 64.0625,2.6875 c -0.5303,0.89789 -1.0871,1.7896 -1.625,2.6875 l -2.7813,0 c -0.1833,-0.8979 -0.3896,-1.78961 -0.5937,-2.6875 l 0.5937,0 c 0.093,0.449 0.1935,0.89476 0.2813,1.34375 l 2.8125,0 c 0.2756,-0.44899 0.5388,-0.89475 0.8125,-1.34375 l 0.5,0 z m -8.8125,0 c -0.7072,0.89789 -1.4148,1.7896 -2.125,2.6875 l -4.2813,0 c -0.3934,-0.8979 -0.8091,-1.78961 -1.2187,-2.6875 l 0.8437,0 c 0.1964,0.449 0.3701,0.89476 0.5625,1.34375 l 4.3125,0 c 0.3621,-0.44899 0.7325,-0.89475 1.0938,-1.34375 l 0.8125,0 z m -12.8438,0 c -0.836,0.89789 -1.6968,1.7896 -2.5312,2.6875 l -5.4063,0 c -0.5555,-0.8979 -1.1204,-1.78961 -1.6875,-2.6875 l 1.0313,0 c 0.276,0.449 0.5705,0.89476 0.8437,1.34375 l 5.4375,0 c 0.4242,-0.44899 0.8254,-0.89475 1.25,-1.34375 l 1.0625,0 z m -15.7812,0 c -0.9165,0.89789 -1.8398,1.7896 -2.75,2.6875 l -6.1563,0 c -0.6692,-0.8979 -1.3551,-1.78961 -2.0312,-2.6875 l 1.1562,0 c 0.3317,0.449 0.67,0.89476 1,1.34375 l 6.1563,0 c 0.4619,-0.44899 0.9114,-0.89475 1.375,-1.34375 l 1.25,0 z m -17.75,0 c -0.9487,0.89789 -1.8748,1.7896 -2.8125,2.6875 l -6.5,0 c -0.7347,-0.8979 -1.4818,-1.78961 -2.2188,-2.6875 l 1.1875,0 c 0.3636,0.449 0.7308,0.89476 1.0938,1.34375 l 6.5312,0 c 0.4754,-0.44899 0.9281,-0.89475 1.4063,-1.34375 l 1.3125,0 z m -18.5313,0 c -0.9325,0.89789 -1.833,1.7896 -2.75,2.6875 l -4.4062,0.125 0.9375,-1.40625 3.5,-0.0625 c 0.4644,-0.44899 0.9065,-0.89475 1.375,-1.34375 l 1.3437,0 z m 72.5313,2.6875 c -0.1047,0.20989 -0.2073,0.41591 -0.3125,0.625 -0.021,-0.20656 -0.041,-0.41843 -0.062,-0.625 l 0.375,0 z m -3.3125,0 c -0.6062,0.8979 -1.2317,1.82085 -1.8438,2.71875 l -3.5312,0 c -0.3043,-0.8979 -0.6152,-1.82085 -0.9375,-2.71875 l 0.7187,0 c 0.1524,0.44891 0.2895,0.89483 0.4375,1.34375 l 3.5938,0 c 0.3127,-0.44892 0.6262,-0.89484 0.9375,-1.34375 l 0.625,0 z m -10.875,0 c -0.7612,0.8979 -1.5189,1.82085 -2.2813,2.71875 l -4.875,0 c -0.4886,-0.8979 -0.9667,-1.82085 -1.4687,-2.71875 l 0.9375,0 c 0.2431,0.44891 0.4789,0.89483 0.7187,1.34375 l 4.875,0 c 0.3881,-0.44892 0.7685,-0.89484 1.1563,-1.34375 l 0.9375,0 z m -14.375,0 c -0.8677,0.8979 -1.7295,1.82085 -2.5938,2.71875 l -5.7812,0 c -0.6247,-0.8979 -1.2729,-1.82085 -1.9063,-2.71875 l 1.0625,0 c 0.3099,0.44891 0.6298,0.89483 0.9375,1.34375 l 5.8125,0 c 0.439,-0.44892 0.8726,-0.89484 1.3125,-1.34375 l 1.1563,0 z m -16.7813,0 c -0.9258,0.8979 -1.8634,1.82085 -2.7812,2.71875 l -6.3438,0 c -0.7123,-0.8979 -1.4399,-1.82085 -2.1562,-2.71875 l 1.1875,0 c 0.3526,0.44891 0.7109,0.89483 1.0625,1.34375 l 6.375,0 c 0.4655,-0.44892 0.9073,-0.89484 1.375,-1.34375 l 1.2812,0 z m -18.1562,0 c -0.9359,0.8979 -1.8894,1.82085 -2.8125,2.71875 l -6.5313,0 c -0.7517,-0.8979 -1.4989,-1.82085 -2.25,-2.71875 l 1.1875,0 c 0.3715,0.44891 0.7222,0.89483 1.0938,1.34375 l 6.5625,0 c 0.4677,-0.44892 0.9352,-0.89484 1.4062,-1.34375 l 1.3438,0 z m 59.0312,2.71875 c 0.1036,0.44899 0.2138,0.89476 0.3125,1.34375 l 2.0313,0 c -0.2391,0.44952 -0.4767,0.89822 -0.7188,1.34375 l -1.5625,0 c -0.2055,-0.8979 -0.4309,-1.78961 -0.6562,-2.6875 l 0.5937,0 z m -4.3437,0 c -0.6725,0.89789 -1.3547,1.7896 -2.0313,2.6875 l -4.2187,0 c -0.4119,-0.8979 -0.823,-1.78961 -1.25,-2.6875 l 0.8125,0 c 0.2052,0.44899 0.3922,0.89476 0.5937,1.34375 l 4.2813,0 c 0.3451,-0.44899 0.6872,-0.89476 1.0312,-1.34375 l 0.7813,0 z m -12.6875,0 c -0.8052,0.89789 -1.6017,1.7896 -2.4063,2.6875 l -5.3437,0 c -0.5701,-0.8979 -1.1694,-1.78961 -1.75,-2.6875 l 1.0312,0 c 0.283,0.44899 0.5634,0.89476 0.8438,1.34375 l 5.375,0 c 0.4091,-0.44899 0.8094,-0.89476 1.2187,-1.34375 l 1.0313,0 z m -15.625,0 c -0.8894,0.89789 -1.7721,1.7896 -2.6563,2.6875 l -6.0937,0 c -0.68,-0.8979 -1.3767,-1.78961 -2.0625,-2.6875 l 1.1562,0 c 0.3368,0.44899 0.6647,0.89476 1,1.34375 l 6.0938,0 c 0.4488,-0.44899 0.9248,-0.89476 1.375,-1.34375 l 1.1875,0 z m -17.5625,0 c -0.9254,0.89789 -1.8032,1.7896 -2.7188,2.6875 l -6.4687,0 c -0.7417,-0.8979 -1.5071,-1.78961 -2.25,-2.6875 l 1.1875,0 c 0.3666,0.44899 0.7586,0.89476 1.125,1.34375 l 6.4375,0 c 0.4641,-0.44899 0.9395,-0.89476 1.4062,-1.34375 l 1.2813,0 z m -18.3438,0 c -0.9131,0.89789 -1.8201,1.7896 -2.7187,2.6875 l -2.875,0 -1.4063,-1.34375 4.3125,0 c 0.4551,-0.44899 0.9162,-0.89476 1.375,-1.34375 l 1.3125,0 z m 68.5313,2.6875 c -0.5702,0.8979 -1.1104,1.78959 -1.6875,2.6875 l -3.5313,0 c -0.3251,-0.89791 -0.6579,-1.7896 -1,-2.6875 l 0.7188,0 c 0.1624,0.4489 0.3104,0.89483 0.4687,1.34375 l 3.5313,0 c 0.2951,-0.44892 0.5816,-0.89485 0.875,-1.34375 l 0.625,0 z m -10.7188,0 c -0.7289,0.8979 -1.4251,1.78959 -2.1562,2.6875 l -4.8438,0 c -0.5057,-0.89791 -0.982,-1.7896 -1.5,-2.6875 l 0.9063,0 c 0.2512,0.4489 0.5017,0.89483 0.75,1.34375 l 4.8125,0 c 0.3723,-0.44892 0.7532,-0.89485 1.125,-1.34375 l 0.9062,0 z m -14.2187,0 c -0.8393,0.8979 -1.6632,1.78959 -2.5,2.6875 l -5.75,0 c -0.6379,-0.89791 -1.2607,-1.7896 -1.9063,-2.6875 l 1.0625,0 c 0.3161,0.4489 0.6234,0.89483 0.9375,1.34375 l 5.7813,0 c 0.4251,-0.44892 0.8242,-0.89485 1.25,-1.34375 l 1.125,0 z m -16.625,0 c -0.9013,0.8979 -1.7933,1.78959 -2.6875,2.6875 l -6.2813,0 c -0.7217,-0.89791 -1.4627,-1.7896 -2.1875,-2.6875 l 1.1563,0 c 0.3569,0.4489 0.6751,0.89483 1.0312,1.34375 l 6.3438,0 c 0.4536,-0.44892 0.9195,-0.89485 1.375,-1.34375 l 1.25,0 z m -18.0313,0 c -0.915,0.8979 -1.8154,1.78959 -2.7187,2.6875 l -6.4688,0 c -0.7573,-0.89791 -1.5255,-1.7896 -2.2812,-2.6875 l 1.1875,0 c 0.3739,0.4489 0.7507,0.89483 1.125,1.34375 l 6.4687,0 c 0.4577,-0.44892 0.9143,-0.89485 1.375,-1.34375 l 1.3125,0 z m 58.5625,2.6875 c 0.1149,0.44898 0.2335,0.89477 0.3438,1.34375 l 0.094,0 c -0.1533,0.2646 -0.3144,0.51819 -0.4687,0.78125 -0.184,-0.70949 -0.3669,-1.41554 -0.5625,-2.125 l 0.5937,0 z m -4.3125,0 c -0.6389,0.89787 -1.2622,1.78959 -1.9062,2.6875 l -4.1875,0 c -0.4313,-0.89791 -0.8671,-1.78963 -1.3125,-2.6875 l 0.8125,0 c 0.2145,0.44898 0.4451,0.89477 0.6562,1.34375 l 4.1875,0 c 0.3287,-0.44898 0.6726,-0.89477 1,-1.34375 l 0.75,0 z m -12.5312,0 c -0.7754,0.89787 -1.5367,1.78959 -2.3125,2.6875 l -5.3125,0 c -0.5858,-0.89791 -1.186,-1.78963 -1.7813,-2.6875 l 1,0 c 0.2905,0.44898 0.5869,0.89477 0.875,1.34375 l 5.3438,0 c 0.3946,-0.44898 0.793,-0.89477 1.1875,-1.34375 l 1,0 z m -15.5,0 c -0.8634,0.89787 -1.7034,1.78959 -2.5625,2.6875 l -6.0625,0 c -0.6918,-0.89791 -1.3659,-1.78963 -2.0625,-2.6875 l 1.125,0 c 0.3423,0.44898 0.6901,0.89477 1.0312,1.34375 l 6.0625,0 c 0.4362,-0.44898 0.844,-0.89477 1.2813,-1.34375 l 1.1875,0 z m -17.375,0 c -0.9032,0.89787 -1.7932,1.78959 -2.6875,2.6875 l -6.4375,0 c -0.7497,-0.89791 -1.4689,-1.78963 -2.2188,-2.6875 l 1.125,0 c 0.3703,0.44898 0.7548,0.89477 1.125,1.34375 l 6.4375,0 c 0.4534,-0.44898 0.9193,-0.89477 1.375,-1.34375 l 1.2813,0 z m -18.25,0 c -0.3946,0.39599 -0.7643,0.79149 -1.1563,1.1875 l -0.6562,-0.65625 c 0.1739,-0.17418 0.3255,-0.35709 0.5,-0.53125 l 1.3125,0 z m 67.5937,2.6875 c -0.5317,0.89829 -1.0501,1.8077 -1.5937,2.6875 l -3.0625,0 c -0.347,-0.8979 -0.6996,-1.78961 -1.0625,-2.6875 l 0.7187,0 c 0.173,0.44889 0.3309,0.89483 0.5,1.34375 l 3.4688,0 c 0.278,-0.44892 0.5365,-0.89486 0.8125,-1.34375 l 0.2187,0 z m -10.1562,0 c -0.6977,0.89789 -1.3928,1.7896 -2.0938,2.6875 l -4.7812,0 c -0.5238,-0.8979 -1.0587,-1.78961 -1.5938,-2.6875 l 0.9063,0 c 0.2599,0.44889 0.5241,0.89483 0.7812,1.34375 l 4.8125,0 c 0.3571,-0.44892 0.7062,-0.89486 1.0625,-1.34375 l 0.9063,0 z m -14.0938,0 c -0.8118,0.89789 -1.627,1.7896 -2.4375,2.6875 l -5.7187,0 c -0.6521,-0.8979 -1.2787,-1.78961 -1.9375,-2.6875 l 1.0312,0 c 0.3229,0.44889 0.6788,0.89483 1,1.34375 l 5.7188,0 c 0.4118,-0.44892 0.8065,-0.89486 1.2187,-1.34375 l 1.125,0 z m -16.5,0 c -0.8776,0.89789 -1.7846,1.7896 -2.6562,2.6875 l -6.25,0 c -0.7322,-0.8979 -1.4534,-1.78961 -2.1875,-2.6875 l 1.125,0 c 0.3618,0.44889 0.7324,0.89483 1.0937,1.34375 l 6.2813,0 c 0.4422,-0.44892 0.8687,-0.89486 1.3125,-1.34375 l 1.2812,0 z m -17.9062,0 c -0.8952,0.89789 -1.7717,1.7896 -2.6563,2.6875 l -3.0937,0 -1.375,-1.34375 4.4687,0 c 0.4482,-0.44892 0.9241,-0.89486 1.375,-1.34375 l 1.2813,0 z m 53.9062,2.6875 c -0.6062,0.8979 -1.2313,1.82084 -1.8437,2.71875 l -4.1563,0 c -0.4517,-0.89791 -0.9101,-1.82085 -1.375,-2.71875 l 0.8125,0 c 0.2245,0.449 0.4351,0.89476 0.6563,1.34375 l 4.1875,0 c 0.3127,-0.44899 0.6263,-0.89475 0.9375,-1.34375 l 0.7812,0 z m -12.4375,0 c -0.7465,0.8979 -1.502,1.82084 -2.25,2.71875 l -5.25,0 c -0.6024,-0.89791 -1.2328,-1.82085 -1.8437,-2.71875 l 1,0 c 0.2984,0.449 0.6099,0.89476 0.9062,1.34375 l 5.2813,0 c 0.3806,-0.44899 0.776,-0.89475 1.1562,-1.34375 l 1,0 z m -15.375,0 c -0.8383,0.8979 -1.6648,1.82084 -2.5,2.71875 l -6,0 c -0.7047,-0.89791 -1.4165,-1.82085 -2.125,-2.71875 l 1.125,0 c 0.3484,0.449 0.6526,0.89476 1,1.34375 l 6.0625,0 c 0.4241,-0.44899 0.8251,-0.89475 1.25,-1.34375 l 1.1875,0 z m -17.25,0 c -0.882,0.8979 -1.8133,1.82084 -2.6875,2.71875 l -6.375,0 c -0.7587,-0.89791 -1.492,-1.82085 -2.25,-2.71875 l 1.1563,0 c 0.3744,0.449 0.7503,0.89476 1.125,1.34375 l 6.375,0 c 0.4432,-0.44899 0.8985,-0.89475 1.3437,-1.34375 l 1.3125,0 z m 44.0313,2.71875 c 0.1841,0.44889 0.3508,0.89484 0.5312,1.34375 l 1.0625,0 c -0.2993,0.45303 -0.6039,0.89621 -0.9062,1.34375 l -0.25,0 c -0.3699,-0.89796 -0.7402,-1.7896 -1.125,-2.6875 l 0.6875,0 z m -5.0938,0 c -0.6675,0.8979 -1.3281,1.78954 -2,2.6875 l -4.75,0 c -0.5428,-0.89796 -1.1032,-1.7896 -1.6562,-2.6875 l 0.9062,0 c 0.2691,0.44889 0.546,0.89484 0.8125,1.34375 l 4.75,0 c 0.3424,-0.44891 0.6899,-0.89486 1.0313,-1.34375 l 0.9062,0 z m -14,0 c -0.7854,0.8979 -1.5898,1.78954 -2.375,2.6875 l -5.6562,0 c -0.6674,-0.89796 -1.327,-1.7896 -2,-2.6875 l 1.0625,0 c 0.3301,0.44889 0.64,0.89484 0.9687,1.34375 l 5.6875,0 c 0.3991,-0.44891 0.8196,-0.89486 1.2188,-1.34375 l 1.0937,0 z m -16.4062,0 c -0.8551,0.8979 -1.6811,1.78954 -2.5313,2.6875 l -6.25,0 c -0.7436,-0.89796 -1.4741,-1.7896 -2.2187,-2.6875 l 1.125,0 c 0.3672,0.44889 0.7268,0.89484 1.0937,1.34375 l 6.25,0 c 0.4313,-0.44891 0.8799,-0.89486 1.3125,-1.34375 l 1.2188,0 z m -17.75,0 c -0.4202,0.43049 -0.832,0.85077 -1.25,1.28125 l -0.6875,-0.65625 c 0.2088,-0.21281 0.4156,-0.41221 0.625,-0.625 l 1.3125,0 z m 53.5625,2.6875 c -0.5747,0.8978 -1.1369,1.78969 -1.7188,2.6875 l -4.125,0 c -0.4732,-0.89781 -0.9521,-1.7897 -1.4375,-2.6875 l 0.8125,0 c 0.2348,0.44888 0.4557,0.89477 0.6875,1.34375 l 4.1563,0 c 0.2973,-0.44898 0.5795,-0.89487 0.875,-1.34375 l 0.75,0 z m -12.3125,0 c -0.7188,0.8978 -1.435,1.78969 -2.1563,2.6875 l -5.25,0 c -0.6201,-0.89781 -1.2474,-1.7897 -1.875,-2.6875 l 1,0 c 0.3069,0.44888 0.6012,0.89477 0.9063,1.34375 l 5.2812,0 c 0.3671,-0.44898 0.696,-0.89487 1.0625,-1.34375 l 1.0313,0 z m -15.25,0 c -0.8144,0.8978 -1.6565,1.78969 -2.4688,2.6875 l -5.9687,0 c -0.7186,-0.89781 -1.4349,-1.7897 -2.1563,-2.6875 l 1.0938,0 c 0.3549,0.44888 0.7082,0.89477 1.0625,1.34375 l 6,0 c 0.4124,-0.44898 0.8057,-0.89487 1.2187,-1.34375 l 1.2188,0 z m -17.1875,0 c -0.8618,0.8978 -1.7699,1.78969 -2.625,2.6875 l -3.2188,0 -1.4062,-1.34375 4.625,0 c 0.4335,-0.44898 0.9085,-0.89487 1.3437,-1.34375 l 1.2813,0 z m 43.2812,2.6875 c -0.025,0.0352 -0.069,0.0586 -0.094,0.0937 -0.014,-0.0301 -0.018,-0.0637 -0.031,-0.0937 l 0.125,0 z m -4.5,0 c -0.6383,0.89798 -1.2938,1.78951 -1.9375,2.6875 l -4.7187,0 c -0.563,-0.89799 -1.1466,-1.78952 -1.7188,-2.6875 l 0.9375,0 c 0.2788,0.44893 0.536,0.89483 0.8125,1.34375 l 4.7188,0 c 0.3282,-0.44892 0.6731,-0.89475 1,-1.34375 l 0.9062,0 z m -13.9062,0 c -0.7602,0.89798 -1.5204,1.78951 -2.2813,2.6875 l -5.6562,0 c -0.6838,-0.89799 -1.3429,-1.78952 -2.0313,-2.6875 l 1.0313,0 c 0.3379,0.44893 0.6632,0.89483 1,1.34375 l 5.6875,0 c 0.3867,-0.44892 0.7384,-0.89475 1.125,-1.34375 l 1.125,0 z m -16.3125,0 c -0.8335,0.89798 -1.6704,1.78951 -2.5,2.6875 l -6.1875,0 c -0.7561,-0.89799 -1.5252,-1.78952 -2.2813,-2.6875 l 1.125,0 c 0.3731,0.44893 0.752,0.89483 1.125,1.34375 l 6.2188,0 c 0.4209,-0.44892 0.828,-0.89475 1.25,-1.34375 l 1.25,0 z m 29.25,2.6875 c 0.2457,0.44889 0.4445,0.89477 0.6875,1.34375 l 1.8125,0 c -0.342,0.45078 -0.6862,0.89975 -1.0313,1.34375 l -0.8125,0 c -0.4958,-0.89782 -0.9619,-1.78968 -1.4687,-2.6875 l 0.8125,0 z m -5.8125,0 c -0.6921,0.89782 -1.3982,1.78968 -2.0938,2.6875 l -5.25,0 c -0.6388,-0.89782 -1.2609,-1.78968 -1.9062,-2.6875 l 0.9687,0 c 0.3159,0.44889 0.6545,0.89477 0.9688,1.34375 l 5.2187,0 c 0.3541,-0.44898 0.7093,-0.89486 1.0625,-1.34375 l 1.0313,0 z m -15.2188,0 c -0.7915,0.89782 -1.5846,1.78968 -2.375,2.6875 l -5.9375,0 c -0.7335,-0.89782 -1.4835,-1.78968 -2.2187,-2.6875 l 1.0937,0 c 0.3621,0.44889 0.7322,0.89477 1.0938,1.34375 l 5.9687,0 c 0.4014,-0.44898 0.7858,-0.89486 1.1875,-1.34375 l 1.1875,0 z m -17.0937,0 c -0.4391,0.46766 -0.8751,0.93848 -1.3125,1.40625 l -0.6563,-0.65625 c 0.2327,-0.24584 0.4231,-0.50425 0.6563,-0.75 l 1.3125,0 z m 38.6875,2.6875 c -0.6102,0.89799 -1.2584,1.82075 -1.875,2.71875 l -4.6875,0 c -0.5841,-0.898 -1.1577,-1.82076 -1.75,-2.71875 l 0.9062,0 c 0.289,0.44892 0.5569,0.89483 0.8438,1.34375 l 4.6875,0 c 0.3145,-0.44892 0.6558,-0.89475 0.9687,-1.34375 l 0.9063,0 z m -13.8438,0 c -0.7358,0.89799 -1.4811,1.82075 -2.2187,2.71875 l -5.625,0 c -0.7011,-0.898 -1.4204,-1.82076 -2.125,-2.71875 l 1.0312,0 c 0.3462,0.44892 0.7172,0.89483 1.0625,1.34375 l 5.6563,0 c 0.375,-0.44892 0.7192,-0.89475 1.0937,-1.34375 l 1.125,0 z m -16.2812,0 c -0.8131,0.89799 -1.6274,1.82075 -2.4375,2.71875 l -3.3438,0 -1.375,-1.375 4.7188,0 c 0.411,-0.44892 0.8069,-0.89475 1.2187,-1.34375 l 1.2188,0 z m 28.875,2.71875 c -0.093,0.11342 -0.1884,0.23082 -0.2813,0.34375 -0.066,-0.11305 -0.1208,-0.23071 -0.1875,-0.34375 l 0.4688,0 z m -5.4375,0 c -0.6664,0.89781 -1.3291,1.7897 -2,2.6875 l -5.2188,0 c -0.6586,-0.8978 -1.336,-1.78969 -2,-2.6875 l 1,0 c 0.3254,0.44889 0.6447,0.89476 0.9688,1.34375 l 5.2187,0 c 0.3417,-0.44899 0.6908,-0.89486 1.0313,-1.34375 l 1,0 z m -15.1563,0 c -0.7696,0.89781 -1.5429,1.7897 -2.3125,2.6875 l -5.9687,0 c -0.7495,-0.8978 -1.4686,-1.78969 -2.2188,-2.6875 l 1.0938,0 c 0.3696,0.44889 0.7243,0.89476 1.0937,1.34375 l 5.9688,0 c 0.3908,-0.44899 0.7653,-0.89486 1.1562,-1.34375 l 1.1875,0 z m 14.1875,2.6875 c 0.2997,0.44893 0.6084,0.89485 0.9063,1.34375 l 2.0937,0 c -0.4089,0.4625 -0.8377,0.89056 -1.25,1.34375 l -0.8125,0 c -0.6062,-0.89799 -1.2303,-1.7895 -1.8437,-2.6875 l 0.9062,0 z m -6.4062,0 c -0.7126,0.898 -1.4409,1.78951 -2.1563,2.6875 l -5.5937,0 c -0.7195,-0.89799 -1.4656,-1.7895 -2.1875,-2.6875 l 1.0312,0 c 0.355,0.44893 0.7394,0.89485 1.0938,1.34375 l 5.5937,0 c 0.3637,-0.4489 0.7307,-0.89475 1.0938,-1.34375 l 1.125,0 z m -16.2188,0 c -0.4373,0.4949 -0.8757,0.97395 -1.3125,1.46875 l -0.6562,-0.625 c 0.2507,-0.28014 0.4677,-0.5636 0.7187,-0.84375 l 1.25,0 z m 23.4063,2.6875 c -0.6417,0.89781 -1.2902,1.78968 -1.9375,2.6875 l -5.2188,0 c -0.6794,-0.89782 -1.3475,-1.78969 -2.0312,-2.6875 l 1,0 c 0.3353,0.44888 0.6657,0.89477 1,1.34375 l 5.1875,0 c 0.3297,-0.44898 0.6717,-0.89487 1,-1.34375 l 1,0 z m -15.125,0 c -0.7487,0.89781 -1.5003,1.78968 -2.25,2.6875 l -3.3125,0 -1.375,-1.34375 4.625,0 c 0.3807,-0.44898 0.7756,-0.89487 1.1562,-1.34375 l 1.1563,0 z m 13.5937,2.6875 c -0.051,0.0534 -0.1047,0.10298 -0.1562,0.15625 -0.035,-0.0496 -0.059,-0.10661 -0.094,-0.15625 l 0.25,0 z m -5.75,0 c -0.6903,0.89798 -1.3996,1.78952 -2.0937,2.6875 l -5.5938,0 c -0.7388,-0.89798 -1.5096,-1.78952 -2.25,-2.6875 l 1.0625,0 c 0.3643,0.44891 0.7299,0.89484 1.0938,1.34375 l 5.5937,0 c 0.353,-0.44891 0.7104,-0.89475 1.0625,-1.34375 l 1.125,0 z m -0.9375,2.6875 c 0.052,0.0676 0.073,0.15097 0.125,0.21875 l -0.7812,0.1875 c -0.104,-0.13252 -0.2086,-0.27375 -0.3125,-0.40625 l 0.9687,0 z m -6.9375,0 c -0.4057,0.49978 -0.7812,1.00022 -1.1875,1.5 l -0.6875,-0.65625 c 0.2347,-0.28395 0.4842,-0.5598 0.7188,-0.84375 l 1.1562,0 z"
         style="fill:url(#linearGradient45376);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4853"
         d="m 964.3364,479.22241 c 176.1897,31.85437 229.5087,155.04329 239,180.1875 -10.1103,17.27198 -36.8024,21.48924 -56.5312,30.34375 l -18.9688,3.03125 0,-0.4375 14.9688,-4.46875 c 1.9669,-28.75371 -83.1528,-166.19355 -236.4688,-205.03125 15.19823,-0.79281 29.68817,-2.51768 46.28125,-1.59375 l 11.71875,-2.03125 z"
         style="fill:url(#radialGradient4861);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3856"
         d="m 906.3364,482.84741 c 158.3916,37.35425 242.8429,177.30717 240.4688,206.90625 -10.7187,3.27808 -21.2502,4.33639 -32.9688,5.28125 l 10.1875,-13.40625 C 1051.415,569.89673 813.8989,500.81616 813.8989,500.81616 l 73.25,-16.65625 9.5625,-0.65625 9.59375,-0.65625 0.0312,0 z"
         style="fill:url(#radialGradient3887);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4852"
         d="m 1124.0239,681.59741 -53.2812,78.78125 -13.625,13.21875 c -99.66721,15.91076 -189.53884,8.4716 -283.0938,9.8125 l 2.8125,-14.78125 0.34375,-66.3125 -0.0312,-0.0312 -9.75,-10.4375 c 72.72835,6.22254 144.88945,12.72609 219.59375,14.1875 45.0967,-3.651 90.1849,-11.88797 135.2813,-22.5 l 1.75,-1.9375 z"
         style="fill:url(#radialGradient4377);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3793"
         d="m -89.663596,446.53491 c 65.118,25.86869 137.9457,49.02161 200.906196,68.3125 -15.504996,21.43384 -9.701,49.58643 23.4376,64.78125 -22.4719,42.35294 -18.4467,109.11151 -9.3126,171.71875 l -285.7187,-48.65625 25.5625,-19.875 -41.1875,-173.6875 -5.875,-36.59375 c 27.3413,-13.32373 57.2464,-23.12606 92.187504,-26 z"
         style="fill:url(#linearGradient3843);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45427"
         d="m 122.2114,639.78491 c -6.0736,39.47557 -3.0466,70.75448 0.0938,101.9375 l -232.375,-59.78125 -8.4376,-37.75 c 100.413904,39.80946 135.837404,45.63269 240.7188,-4.40625 z"
         style="fill:url(#linearGradient45435);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3019"
         d="m -117.9136,684.97241 c 0.5804,0.0466 4.8957,1.2644 14.1875,3.96875 l 205.4063,58.90625 c 2.15,0.79485 2.2898,0.83331 2.5,2.5625 -0.0827,0.85684 -0.4436,1.0871 -1.3126,0.96875 l -253.3437,-44.25 C -67.797196,718.486 -5.3419961,728.0663 -2.1947961,728.40991 13.912304,727.18345 -121.4606,684.6879 -117.9136,684.97241 z"
         style="fill:url(#linearGradient4166);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3845"
         d="m -375.2261,436.15991 c 29.1212,0.36359 49.6916,2.65331 62.4063,4.5 92.2623,4.6232 363.460604,103.50273 427.9687,127.6875 2.6211,15.91672 -310.4904,-63.55298 -337.875,-75.625 -8.3047,-3.66098 25.7665,-12.07459 -75.5625,-31.78125 -92.0799,-13.22225 -162.4909,11.503 -148.25,56.5 -15.6936,22.96928 -11.7507,63.2361 -14.5625,94.5625 -1.5,11.65625 0.3507,27.22685 -5.4063,25.90625 -2.3139,-9.17947 -13.4443,-31.78145 -3.7187,-50.21875 0.7936,-32.5793 0.1201,-63.95287 6.3125,-101.03125 -5.5973,-20.25998 3.9251,-18.25161 10.1562,-23.46875 27.472,-12.19799 53.3733,-26.83962 78.5313,-27.03125 z"
         style="fill:url(#radialGradient4456);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4975"
         d="m -110.8511,521.97241 c 58.575804,-1.08452 416.6067,91.94496 95.687504,22.34375 -33.0315,-7.1639 -102.062504,-21.46875 -102.062504,-21.46875 1.3158,-0.53913 3.4942,-0.82166 6.375,-0.875 z"
         style="fill:url(#linearGradient4993);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3799"
         d="m -384.4761,435.00366 c 11.8228,0.20338 22.3517,0.62921 31.9375,1.21875 -9.9299,-0.29247 -20.3141,-0.64687 -31.9375,-1.21875 z m 31.9375,1.21875 c 55.3996,1.63169 91.3723,1.26187 182.9062,24.9375 2.3985,0.62031 10.8931,1.25488 11.8126,1.46875 l 269.0624,52.21875 c -67.080496,20.77066 -27.773696,21.08786 -3.5624,19.875 0.9121,-0.0457 0.236,-9.26483 3.1562,-19.6875 0.1846,-0.65903 -1.5496,19.60085 -0.9062,19.5625 5.7314,-0.3416 9.8076,-0.68741 10.5,-0.75 -1.4284,0.2197 -4.3217,0.30392 -6.8126,4.71875 -2.3025,4.08138 -3.048,13.11898 -0.9374,25.1875 0.9722,0.67869 -0.9918,2.67495 11.375,8.75 -59.200296,-25.3411 -380.3619,-130.80462 -476.5938,-136.28125 z"
         style="opacity:0.8;fill:url(#linearGradient4142);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3954"
         d="m 122.8989,706.15991 c 1.4867,22.64895 2.4687,44.5 6.75,64.53125 0.01,0.0423 0.0253,0.0827 0.0313,0.125 2.5064,16.1349 6.2274,31.22802 10.9062,44.84375 1.0007,7.13985 0.4518,11.36912 -2.9062,10.25 -7.9774,-20.68829 -15.0832,-42.06961 -18.3438,-66.53125 l 3,-1.6875 c -0.1181,-39.56534 0.1435,-52.10786 0.5625,-51.53125 z"
         style="fill:#023400;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4995"
         d="m 169.3364,697.47241 c 0.7574,0.0847 1.4256,0.65866 2,1.4375 l 0,13.875 c 0.3677,-0.74941 1.0676,-1.806 2.25,0 l 0,-4.375 c 0.8298,-1.37735 1.6459,-2.84337 3.125,0 l 0,2.75 c 3.3864,-7.7434 0.9717,15.98213 0.9375,18 0,9.61981 0.5328,19.00486 1.5,28.0625 l -10.6875,0 c -1.0545,-9.96868 -1.625,-20.25866 -1.625,-30.78125 0,-9.79794 0.4892,-19.39553 1.4062,-28.71875 0.382,-0.18809 0.744,-0.2891 1.0938,-0.25 z"
         style="fill:url(#linearGradient5004);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4983"
         d="m 174.7114,741.56616 0.0938,9.25 -2.9376,1.8125 0,-9.59375 2.8438,-1.46875 z"
         style="fill:#0c0c0c;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4230"
         d="m 210.7114,822.03491 21.625,23.78125 c -17.9661,16.7629 -33.8257,5.66154 -47.4375,-1.40625 l 25.8125,-22.375 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4506"
         d="m 225.0239,592.50366 c 14.3938,-0.2219 17.5334,4.14835 14.375,6.03125 -1.5136,0.90236 -10.6489,1.35945 -18.25,2.03125 -49.1766,8.52558 -56.5167,86.17774 -57.0625,120.34375 0,69.7504 34.5033,122.28125 73.1875,122.28125 0.2587,0 0.5232,-0.0263 0.7813,-0.0312 -3.9877,1.27278 -8.0908,1.9375 -12.2813,1.9375 -38.6841,0 -70.0312,-56.53085 -70.0313,-126.28125 0,-69.29956 30.9424,-125.588 69.2813,-126.3125 z"
         style="fill:#333333;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4494"
         d="m 143.9302,662.69116 c -1.2158,15.96881 -0.6694,31.40882 -1.2813,50.75 l -4.7187,7.3125 c -0.002,-0.41786 -0.0313,-0.83128 -0.0313,-1.25 0,-20.23024 2.1739,-39.44416 6.0313,-56.8125 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4260"
         d="m 205.1176,699.00366 c 4.4517,0.0615 9.2048,1.59563 14.2188,4.65625 l -2.8438,16.4375 -15.5624,0.71875 -39.75,24.21875 -10.9688,-6.71875 -12.2188,-18.78125 0.125,-8.21875 c 1.5986,-2.07482 0.171,-4.42084 18.3126,-2.59375 l -3.5938,26.1875 37.25,-22.5 0.0625,-6.25 c 1.9824,-4.72418 5.3124,-7.32288 10.625,-6.71875 1.4213,-0.31313 2.8599,-0.45798 4.3437,-0.4375 z"
         style="fill:#4d4d4d;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3021"
         d="m -281.6011,513.62866 c 11.6995,52.19599 35.1962,143.0786 42.1563,149.5 23.491,21.67304 88.2812,45.25 88.2812,45.25 0.1947,0.95222 177.172804,29.93581 270.25,48.71875 -0.6063,1.70717 -0.7804,2.74691 -2.75,2.40625 -18.471396,-5.59109 -261.9634,-45.68132 -271.3438,-48.6875 0,0 -53.8138,-21.46289 -85.75,-45.21875 -6.5036,-4.83782 -32.1466,-99.5899 -41.6562,-151.5625 l 0.8125,-0.40625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient4663);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3064"
         d="m 411.5239,545.37866 c 39.37205,1.52489 138.51424,29.51712 206.6875,42.5625 l 25.09375,17.96875 -36.9375,37.0625 -74.0625,-5.21875 c -37.73562,-33.5183 -79.58585,-61.45066 -122.3125,-88.84375 0,0 0.44274,-3.57341 1.53125,-3.53125 z"
         style="fill:#1a1a1a;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4157"
         d="m 269.5239,582.19116 262,56.4375 C 482.73303,630.32875 347.835,601.84778 270.5864,584.65991 l -1.0625,-2.46875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:0.6;color:#000000;fill:url(#radialGradient4195);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3068"
         d="m 414.05515,546.00366 c 0.15118,0.002 0.3472,-0.004 0.53125,0.0312 0.81716,0.0317 1.69305,0.10148 2.5625,0.15625 -4.23563,0.59498 -2.59375,2.53125 -2.59375,2.53125 0,0 79.56546,50.62728 119.0625,87.4375 l 70.5625,3.59375 -0.84375,0.84375 -71.15625,-3.6875 C 492.6831,600.09968 413.0864,549.47241 413.0864,549.47241 c 0,0 -1.29898,-3.49433 0.96875,-3.46875 z"
         style="fill:url(#radialGradient4442);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3890"
         d="m 395.93015,475.62866 c 57.12954,6.04901 112.36601,11.47034 184.90625,22.65625 86.45428,40.30438 136.92042,102.38075 183.09375,192.28125 l 6.28125,8.40625 -22.09375,-0.71875 C 616.19248,555.03288 505.42938,512.32619 395.93015,475.62866 z"
         style="fill:url(#radialGradient3900);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4661"
         d="m 552.18015,690.03491 16.21875,1.5625 148.40625,23.625 24.96875,8.375 0.8125,0.125 0.0312,0.84375 1.25,37.3125 0,0.3125 -0.15625,0.28125 -38.5625,58.5625 -0.3125,0.4375 -0.53125,0 -184.15625,0 -0.28125,0 -0.21875,-0.125 -51.25,-29.40625 -1,-0.5625 0.75,-0.9375 C 496.3675,757.13769 552.1801,690.03491 552.1801,690.03491 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3902"
         d="m 1203.2739,659.50366 c 0,0 -0.3625,0.89933 -1.3125,2.34375 l 1.3125,-2.34375 z m -1.375,2.46875 -7.2187,13.0625 -30,13.6875 18.4375,-12.84375 c 11.2395,-4.51312 16.5532,-10.56797 18.7812,-13.90625 z"
         style="fill:url(#linearGradient3915);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3945"
         d="m 294.1489,645.62866 61.7813,14.53125 1.8437,4.03125 -5.8437,6.84375 -4.7188,1 -49.25,-10.34375 -3.8125,-16.0625 z"
         style="fill:#4d4d4d;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5279"
         d="m 309.7426,650.81616 14.4376,3.46875 c 0.0425,0.0637 0.0507,0.12304 0.0937,0.1875 19.817,8.97007 28.3852,11.01116 -1.9375,11 l -17.6562,-3.9375 c -5.6984,-8.14776 -6.1453,-5.71266 5.0312,-10.6875 0.0161,-0.007 0.0151,-0.0241 0.0312,-0.0312 z"
         style="fill:url(#radialGradient5291);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3938"
         d="m 298.6489,660.62866 46.625,10.125 4.1563,-0.96875 2.4062,1.0625 -4.6875,1 -49.3125,-10.65625 0.8125,-0.5625 z"
         style="fill:#ffffff;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3017"
         d="m 371.8052,339.50366 c 78.2659,0.14018 157.02868,3.70863 237.2812,11.4375 116.5687,33.09245 219.10436,81.62122 314.9375,130.6875 l -36.875,2.53125 -73.25,15.65625 -125.25,-1.53125 -109.09375,0 C 472.48708,481.90962 368.7061,469.07989 266.9614,476.65991 c -25.8689,-46.84711 -61.1571,-89.93564 -101.7812,-130 68.9137,-4.7316 137.5668,-7.27994 206.625,-7.15625 z"
         style="fill:#111111;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5542"
         d="m 223.7739,342.25366 c 4.9673,0.0281 10.2427,0.0935 15.8437,0.15625 l -74.4374,4.25 c 4.5373,-3.79043 23.8229,-4.60284 58.5937,-4.40625 z"
         style="opacity:0.8;fill:url(#radialGradient6990);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5534"
         d="m 367.1176,346.53491 c 1.5888,0.003 3.1608,0.0252 4.75,0.0312 0.009,0.002 0.0226,-0.002 0.0313,0 31.35489,42.89975 52.43232,69.27389 68.53125,121.875 -73.61885,-9.72324 -96.51715,-4.12502 -167.40625,1.15625 -0.7231,-1.30942 -1.4482,-2.6346 -2.1875,-3.9375 -0.0579,-0.10209 -0.0982,-0.21045 -0.1562,-0.3125 -0.0641,-0.11257 -0.1234,-0.19998 -0.1876,-0.3125 -0.7728,-1.35584 -1.5847,-2.71369 -2.375,-4.0625 -0.608,-1.03794 -1.1943,-2.05994 -1.8124,-3.09375 -0.2301,-0.38463 -0.4874,-0.7722 -0.7188,-1.15625 -0.5484,-0.91024 -1.0688,-1.81172 -1.625,-2.71875 -0.0852,-0.13895 -0.1959,-0.26738 -0.2812,-0.40625 -0.3104,-0.50471 -0.5936,-1.02753 -0.9063,-1.53125 -1.6614,-2.67594 -3.3661,-5.35169 -5.0937,-8 -0.3467,-0.53137 -0.7133,-1.06347 -1.0626,-1.59375 -0.3414,-0.51822 -0.6874,-1.01409 -1.0312,-1.53125 -0.4591,-0.69065 -0.9115,-1.37372 -1.375,-2.0625 -0.0939,-0.13969 -0.1871,-0.29789 -0.2812,-0.4375 -0.7895,-1.1702 -1.5731,-2.33517 -2.375,-3.5 -0.7649,-1.11081 -1.5678,-2.20654 -2.3438,-3.3125 -0.8554,-1.21885 -1.6938,-2.44325 -2.5625,-3.65625 -0.1334,-0.18619 -0.2726,-0.37645 -0.4063,-0.5625 -0.9553,-1.32983 -1.9036,-2.64593 -2.875,-3.96875 -1.3076,-1.78098 -2.6327,-3.5441 -3.9687,-5.3125 -0.6237,-0.82544 -1.2765,-1.64603 -1.9063,-2.46875 -1.3624,-1.78033 -2.7033,-3.57607 -4.0937,-5.34375 -0.6035,-0.76715 -1.235,-1.51646 -1.8437,-2.28125 -1.2437,-1.56298 -2.4852,-3.10309 -3.75,-4.65625 -18.3469,-24.9819 -19.5511,-41.85868 -10.0313,-52.65625 49.7498,-2.79277 99.4354,-4.27688 149.3437,-4.1875 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4601"
         d="m 377.2739,341.94116 26.4375,0.1875 c 31.38276,43.45362 56.15549,90.52651 78.28125,136.625 L 457.7114,475.90991 C 435.6191,428.20662 406.61977,384.80874 377.2739,341.94116 z m 50.875,0.53125 18.4375,0.375 c 31.11928,38.349 79.87698,89.29031 84.84375,137.21875 l -26.1875,1.125 -77.09375,-138.71875 z"
         style="opacity:0.14224135;fill:url(#radialGradient4498);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4581"
         d="m 379.99265,365.03491 c 13.0829,0.23964 27.02464,2.84375 38.03125,2.84375 0,0 14.02213,24.61673 13.65625,38.125 -0.37391,13.80524 -16.03125,38.09375 -16.03125,38.09375 l -57.3125,0 c -14.4547,-3.48973 -20.5621,-25.33796 -20.4062,-38.09375 0.426,-11.08767 3.2407,-19.41751 6.4687,-25.40625 7.0577,-13.05327 20.7665,-15.8341 35.59375,-15.5625 z"
         style="fill:url(#linearGradient4583);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4004"
         d="m -178.5386,371.78491 c -39.7631,14.67484 -79.1512,29.79227 -116.375,47.375 l -0.2188,0.0625 -0.2187,0 -30.5937,-3.03125 c 1.3112,-0.40738 2.679,-0.81016 4,-1.21875 l 26.5624,2.59375 c 29.4555,-13.9015 60.2406,-26.28421 91.4688,-38.09375 8.5104,-2.56065 16.9573,-5.11346 25.375,-7.6875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient7015);fill-opacity:1;stroke:none;stroke-width:1.70000005;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4780"
         d="m 1144.2739,782.09741 15.3125,10.59375 -43.7187,10.65625 -9.4688,-14.46875 37.875,-6.78125 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4386"
         d="m 1076.7114,751.53491 39.1563,51.8125 -43.9375,-44.15625 4.7812,-7.65625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3901"
         d="m 1068.4614,757.81616 67.125,75.625 58.0313,-7.875 c -0.1141,0.72308 -0.2351,1.41764 -0.375,2.03125 -1.595,0.98052 -3.1678,1.89091 -4.75,2.71875 l -53.4063,7.25 -1.0625,0.125 -0.6875,-0.78125 -67.875,-76.4375 3,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient3922);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4321"
         d="m 926.55515,792.59741 4.59375,17.34375 c -54.11749,1.80516 -107.50383,1.49201 -162.53125,1.96875 l 3.28125,-17.34375 c 52.137,-0.41722 103.23688,-0.35012 154.65625,-1.96875 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect3949"
         d="m 1032.6177,785.84741 12.8125,16 c -32.7649,4.2186 -66.19313,6.42041 -103.7813,7.75 l -5.40625,-17.34375 c 34.70483,-1.15978 65.43025,-2.90054 96.37505,-6.40625 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4394"
         d="m 1034.0552,784.44116 c 2.5382,0.15553 17.0016,18.56228 17,18.5625 -81.76355,11.12446 -184.46268,10.00675 -280.56255,10.8125 l 0.28125,-1.90625 c 54.36724,-0.45406 106.95967,-0.18701 160.375,-1.96875 l -4.84375,-18.3125 9.9375,0.625 5.40625,17.34375 c 37.65323,-1.33189 71.3069,-3.52788 103.7813,-7.75 0.7002,-0.091 -12.074,-17.31336 -11.375,-17.40625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3863"
         d="m 1034.0552,784.44116 13.6562,17.09375 c -0.7593,0.10031 -1.5183,0.21427 -2.2812,0.3125 l -12.9375,-16.15625 1.5625,-1.25 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient3971);fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45393"
         d="m 926.30515,791.62866 9.9375,0.625 5.40625,17.34375 c 38.4651,-1.36061 72.9152,-3.69298 106.0313,-8.09375 2.5382,0.15553 3.3766,1.49978 3.375,1.5 -81.76355,11.12446 -184.46268,10.00675 -280.56255,10.8125 l 0.28125,-1.90625 c 54.36724,-0.45406 106.95967,-0.18701 160.375,-1.96875 l -4.84375,-18.3125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient45397);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4499"
         d="m 552.49265,690.12866 162.65625,27.09375 26.46875,7.375 1.25,37.3125 -38.59375,58.59375 -184.625,0 -50.75,-29.40625 83.59375,-100.96875 z"
         style="fill:#0d0d0d;fill-opacity:1;stroke:none;display:inline;enable-background:new" />
      <path
         inkscape:connector-curvature="0"
         id="path4458"
         d="m 552.18015,690.03491 16.21875,1.5625 147.46875,24.28125 25.75,8.71875 -183.125,-28.375 -6.3125,-6.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient4472);fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4032"
         d="m 467.6489,653.81616 c 83.24291,15.74897 173.62829,30.51552 304.5625,45.375 l -7.25,-7.5625 2.46875,0.21875 7.09375,7.625 2.65625,2.84375 c -133.66423,-15.937 -225.22466,-31.61167 -309.53125,-48.5 z"
         style="opacity:0.8;fill:url(#radialGradient4586);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4030"
         d="m 1203.3364,659.40991 -1.9062,3.21875 c -11.2423,15.71064 -36.0207,19.25283 -54.625,28.09375 l -32.9375,5.875 1.9375,-1.875 31,-4.96875 c 19.7375,-8.8584 46.431,-13.05266 56.5312,-30.34375 z"
         style="fill:url(#radialGradient4266);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4571"
         d="m 401.4614,365.15991 c 12.5061,0.12812 23.83065,0.96724 26.34375,2.71875 11.08646,7.7267 14.24673,24.61673 13.875,38.125 -0.37989,13.80524 -4.17911,31.4404 -16.28125,38.09375 -4.59549,2.52644 -60.857,4.90222 -66.8437,0 -10.3113,-8.44336 -12.9147,-24.79001 -12.125,-38.09375 0.8265,-13.92569 4.9006,-31.75689 17.3124,-38.125 3.6326,-1.86374 21.63953,-2.88348 37.7188,-2.71875 z"
         style="fill:url(#linearGradient4579);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect4529"
         d="m 456.43015,367.75366 c 7.24185,-0.27689 13.27764,4.18419 13.5,10 l 0.0312,1.4375 c 0.22236,5.81581 -5.4144,10.72312 -12.65625,11 l -44.15625,1.6875 c -7.24185,0.27689 -13.24639,-4.18419 -13.46875,-10 l -0.0625,-1.4375 c -0.22236,-5.81581 5.4144,-10.72312 12.65625,-11 l 44.15625,-1.6875 z"
         style="fill:#101010;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4171"
         d="m 269.3676,581.19116 260.62505,56.3125 c 0.51221,0.4641 1.03038,0.91469 1.53125,1.375 -87.2602,-18.8034 -174.7406,-37.64523 -262,-56.4375 l -0.1563,-1.25 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient4187);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3889"
         d="m 520.80515,637.00366 86.375,5.59375 5.75,-5.1875 103.25,51.90625 c -53.47973,-6.36487 -108.81652,-12.51484 -157.0625,-19.46875 l -38.3125,-32.84375 z"
         style="opacity:0.8;fill:url(#linearGradient4158);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45256"
         d="m 552.4614,690.19116 15.4375,15.375 -50.53125,88.4375 -46.3125,-3.5 81.40625,-100.3125 z"
         style="fill:url(#linearGradient45330);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4362"
         d="m -257.4761,499.65991 c -6.7713,2.7472 -13.1879,5.59874 -19.2813,8.53125 -19.0261,8.28935 -33.9697,17.81003 -46.75,25.0625 l -0.0624,-0.125 c 10.5958,-6.68975 22.2834,-13.86805 35.625,-20.875 9.0689,-4.50047 19.1372,-8.85491 30.4687,-12.59375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient4966);fill-opacity:1;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45162"
         d="m 581.5239,703.09741 6.84375,1.15625 c -0.33811,0.2751 -0.662,0.56855 -1,0.84375 -4.5503,0.028 -9.1382,0.0498 -13.75,0.0937 l 1.15625,-2.03125 c 2.26209,-0.0216 4.50299,-0.045 6.75,-0.0625 z m 8.65625,1.96875 c 0.88641,0.6794 1.77154,1.35095 2.65625,2.03125 3.9599,-0.0193 7.8939,-0.0208 11.8125,-0.0312 l 3.65625,0.625 c -0.5765,0.476 -1.14205,0.9612 -1.71875,1.4375 -4.46981,0.005 -8.9769,0.0113 -13.5,0.0312 -1.78601,-1.361 -3.55115,-2.7056 -5.34375,-4.0625 0.8172,-10e-4 1.6222,-0.0312 2.4375,-0.0312 z m 19.21875,4.0625 c 0.8713,0.6844 1.755,1.34595 2.625,2.03125 4.4485,0 8.8469,0.0184 13.25,0.0312 0.18679,-0.1544 0.3757,-0.31435 0.5625,-0.46875 l 2.28125,0.375 c -0.85723,0.7161 -1.7053,1.43955 -2.5625,2.15625 -4.4011,-0.0181 -8.83485,-0.0311 -13.28125,-0.0312 -1.7564,-1.3714 -3.51965,-2.72595 -5.28125,-4.09375 0.80269,0 1.60505,5e-4 2.40625,0 z m -16.65625,0.0312 c -1.6797,1.3763 -3.38169,2.7473 -5.0625,4.125 -4.54289,0.024 -9.11506,0.0548 -13.71875,0.0937 -1.18981,-0.8804 -2.36932,-1.747 -3.5625,-2.625 l 0.75,-1.3125 c 0.8467,0.6294 1.68635,1.27585 2.53125,1.90625 4.60661,-0.041 9.2045,-0.0688 13.75,-0.0937 0.84981,-0.6891 1.68184,-1.3738 2.53125,-2.0625 0.92259,0 1.86095,-0.0312 2.78125,-0.0312 z m 19.125,4.0625 c -1.6504,1.3713 -3.31805,2.7519 -4.96875,4.125 -4.46351,0.004 -8.95265,0.0152 -13.46875,0.0312 -1.79229,-1.3642 -3.5761,-2.73395 -5.375,-4.09375 l 2.4375,0 c 0.88939,0.6805 1.7997,1.34985 2.6875,2.03125 4.51871,-0.0179 9.00295,-0.0312 13.46875,-0.0312 0.8345,-0.6865 1.6657,-1.3764 2.5,-2.0625 0.9067,-6e-4 1.81405,0 2.71875,0 z m 16.4375,0.0312 c 0.85874,0.6885 1.73592,1.3732 2.59375,2.0625 4.38332,0.0151 8.74779,0.0374 13.09375,0.0625 0.51304,-0.4286 1.01813,-0.85285 1.53125,-1.28125 l 2.21875,0.40625 c -1.16281,0.9807 -2.33777,1.9556 -3.5,2.9375 -4.34426,-0.026 -8.71231,-0.0465 -13.09375,-0.0625 -1.73189,-1.3791 -3.48301,-2.7485 -5.21875,-4.125 0.7905,0.0129 1.58587,0 2.375,0 z m -54.75,0.125 c -1.70069,1.3812 -3.42259,2.77395 -5.125,4.15625 -0.65199,0.006 -1.31546,0.0251 -1.96875,0.0312 l 1.1875,-2.0625 c 0.1654,-0.002 0.3347,10e-4 0.5,0 0.86069,-0.6912 1.73345,-1.40265 2.59375,-2.09375 0.9393,-0.008 1.8758,-0.0183 2.8125,-0.0312 z m 36.15625,3.96875 c 0.8745,0.6857 1.7517,1.376 2.625,2.0625 4.4424,10e-4 8.88365,-0.013 13.28125,0 0.8212,-0.6842 1.61619,-1.34755 2.4375,-2.03125 0.89307,0.0129 1.79612,0 2.6875,0 -1.62511,1.3668 -3.25044,2.72485 -4.875,4.09375 -4.3956,-0.009 -8.8099,0 -13.25,0 -1.76301,-1.3738 -3.51315,-2.7546 -5.28125,-4.125 0.8016,-4e-4 1.5749,2e-4 2.375,0 z m -16.625,0.0312 c -1.6679,1.3766 -3.33121,2.7465 -5,4.125 -4.5354,0.0199 -9.12355,0.0607 -13.71875,0.0937 -1.8328,-1.3556 -3.6593,-2.7122 -5.5,-4.0625 0.8307,-0.008 1.6713,-0.0183 2.5,-0.0312 0.9099,0.6758 1.81075,1.35405 2.71875,2.03125 4.59819,-0.036 9.1494,-0.0405 13.6875,-0.0625 0.84369,-0.6892 1.68785,-1.40505 2.53125,-2.09375 l 2.78125,0 z m 51.53125,0.0625 c 0.78031,10e-4 1.56454,0.0312 2.34375,0.0312 0.84854,0.6915 1.71457,1.3707 2.5625,2.0625 4.32964,0.028 8.63735,0.0566 12.9375,0.0937 0.80607,-0.6791 1.59968,-1.35285 2.40625,-2.03125 0.33282,0.003 0.66732,-0.002 1,0 l 1.375,0.25 c -1.51242,1.2844 -3.02075,2.55695 -4.53125,3.84375 -4.29857,-0.037 -8.60956,-0.0648 -12.9375,-0.0937 -1.71195,-1.3843 -3.44171,-2.77375 -5.15625,-4.15625 z m 40.25,3.4375 6.3125,1.09375 c -1.68856,-0.0195 -3.37148,-0.0438 -5.0625,-0.0625 -0.41683,-0.3447 -0.83316,-0.68655 -1.25,-1.03125 z m -58.59375,0.59375 c 0.78949,0.013 1.58685,0.0312 2.375,0.0312 0.86201,0.6895 1.70138,1.3723 2.5625,2.0625 4.37777,0.016 8.75295,0.0374 13.09375,0.0625 0.81003,-0.6823 1.62716,-1.3809 2.4375,-2.0625 0.88181,0.003 1.74454,0.0312 2.625,0.0312 -1.60399,1.3624 -3.20999,2.72875 -4.8125,4.09375 -4.33899,-0.0249 -8.6867,-0.0465 -13.0625,-0.0625 -1.73851,-1.3811 -3.4765,-2.77775 -5.21875,-4.15625 z m -14.0625,0 c -1.6391,1.3725 -3.26705,2.7505 -4.90625,4.125 -4.4568,0.002 -8.95995,-0.013 -13.46875,0 -1.79871,-1.3676 -3.60105,-2.73055 -5.40625,-4.09375 0.81461,-10e-5 1.62469,0 2.4375,0 0.8926,0.6821 1.79651,1.34785 2.6875,2.03125 4.51141,-0.011 9.00955,0 13.46875,0 0.8287,-0.687 1.64005,-1.3759 2.46875,-2.0625 0.9053,-2e-4 1.81535,-4e-4 2.71875,0 z m -38.25,0.125 c -1.6883,1.3813 -3.37291,2.77375 -5.0625,4.15625 -2.37571,0.0185 -4.7944,0.0402 -7.1875,0.0625 l 1.1875,-2.0625 c 1.8921,-0.0179 3.8063,-0.047 5.6875,-0.0625 0.85439,-0.6911 1.7085,-1.3716 2.5625,-2.0625 0.93769,-0.008 1.8775,-0.0182 2.8125,-0.0312 z m 89.125,0.0937 c 0.77214,0.006 1.57245,0.0183 2.34375,0.0312 0.84051,0.6933 1.65981,1.369 2.5,2.0625 4.2871,0.0383 8.57845,0.081 12.84375,0.125 0.79902,-0.6771 1.57521,-1.35485 2.375,-2.03125 0.86704,0.009 1.75869,0.0183 2.625,0.0312 -1.58425,1.3524 -3.16899,2.7074 -4.75,4.0625 -4.2638,-0.043 -8.55823,-0.087 -12.84375,-0.125 -1.69632,-1.3875 -3.39594,-2.76995 -5.09375,-4.15625 z m 38.125,2 2.8125,0.5 0.0625,0 11.59375,2 0,0.1875 c -3.80435,-0.0484 -7.59632,-0.0792 -11.40625,-0.125 -1.01931,-0.8469 -2.04333,-1.7155 -3.0625,-2.5625 z m -91.125,1.875 c 0.8778,0.6872 1.77965,1.3746 2.65625,2.0625 4.4359,0.003 8.82705,0.0183 13.21875,0.0312 0.8156,-0.6852 1.65295,-1.378 2.46875,-2.0625 0.8919,0.013 1.76601,0.0312 2.65625,0.0312 -1.61418,1.3685 -3.23048,2.72275 -4.84375,4.09375 -4.3896,-0.011 -8.78505,-0.0312 -13.21875,-0.0312 -1.7696,-1.3767 -3.5379,-2.7516 -5.3125,-4.125 0.8005,-10e-5 1.5761,-10e-5 2.375,0 z m -16.59375,0.0312 c -1.65601,1.3777 -3.31225,2.77665 -4.96875,4.15625 -4.52771,0.0149 -9.1007,0.0345 -13.6875,0.0625 -1.8388,-1.36 -3.68445,-2.7076 -5.53125,-4.0625 0.82921,-0.006 1.6729,-0.0312 2.5,-0.0312 0.913,0.6781 1.80765,1.35175 2.71875,2.03125 4.5897,-0.0291 9.15709,-0.0444 13.6875,-0.0625 0.8376,-0.6894 1.6626,-1.3734 2.5,-2.0625 0.91959,-0.013 1.86385,-0.0312 2.78125,-0.0312 z m 53.8125,0.0937 c 0.85181,0.6923 1.68002,1.40115 2.53125,2.09375 4.3244,0.028 8.64238,0.0597 12.9375,0.0937 0.80092,-0.6803 1.60474,-1.3829 2.40625,-2.0625 0.87282,0.008 1.75322,0.0183 2.625,0.0312 -1.58703,1.3586 -3.16549,2.73235 -4.75,4.09375 -4.29344,-0.0349 -8.61489,-0.0657 -12.9375,-0.0937 -1.71859,-1.3859 -3.43515,-2.77215 -5.15625,-4.15625 0.77936,10e-4 1.56547,0 2.34375,0 z m 34.0625,0.28125 c 0.76594,0.008 1.51589,0.0183 2.28125,0.0312 0.83452,0.6941 1.66557,1.39945 2.5,2.09375 4.25539,0.0453 8.50889,0.077 12.75,0.125 0.79416,-0.6755 1.61104,-1.35635 2.40625,-2.03125 0.86242,0.01 1.70047,0.0183 2.5625,0.0312 -1.57581,1.3492 -3.14737,2.7104 -4.71875,4.0625 -4.23963,-0.048 -8.46488,-0.082 -12.71875,-0.125 -1.68472,-1.3888 -3.37729,-2.7991 -5.0625,-4.1875 z m -68.75,3.71875 c -1.6275,1.3743 -3.2478,2.7484 -4.875,4.125 l 0,0.0312 c -4.4501,0 -8.93619,-0.013 -13.4375,0 -1.80519,-1.3716 -3.62611,-2.72675 -5.4375,-4.09375 0.81309,-0.013 1.62611,-0.0312 2.4375,-0.0312 0.89591,0.6842 1.7931,1.3773 2.6875,2.0625 4.5039,-0.016 8.9851,-0.0306 13.4375,-0.0312 0.8228,-0.6881 1.64595,-1.3749 2.46875,-2.0625 0.904,0 1.81666,-6e-4 2.71875,0 z m 16.40625,0.0312 c 0.86537,0.6908 1.72924,1.40245 2.59375,2.09375 4.37189,0.0171 8.72723,0.0385 13.0625,0.0625 0.80454,-0.6837 1.6013,-1.3796 2.40625,-2.0625 0.88072,0.003 1.74563,0.0312 2.625,0.0312 -1.59327,1.365 -3.15858,2.72605 -4.75,4.09375 -4.33336,-0.023 -8.69267,-0.0465 -13.0625,-0.0625 -1.74531,-1.3834 -3.50105,-2.77535 -5.25,-4.15625 0.7884,0.013 1.58792,0 2.375,0 z m -54.59375,0.0937 c -1.67559,1.382 -3.35455,2.7418 -5.03125,4.125 -4.1227,0.0274 -8.29334,0.0877 -12.46875,0.125 l 1.21875,-2.09375 c 3.6593,-0.0331 7.3187,-0.0374 10.9375,-0.0625 0.8479,-0.6917 1.68355,-1.40255 2.53125,-2.09375 0.9358,-0.005 1.8793,0 2.8125,0 z m 91.3125,0.125 c 0.84376,0.694 1.68781,1.39965 2.53125,2.09375 4.28191,0.0357 8.55233,0.084 12.8125,0.125 0.7939,-0.6788 1.58024,-1.35325 2.375,-2.03125 0.86602,0.009 1.75972,0.0183 2.625,0.0312 -1.57429,1.3553 -3.1481,2.7042 -4.71875,4.0625 -4.25852,-0.0404 -8.53228,-0.089 -12.8125,-0.125 -1.70289,-1.3887 -3.4207,-2.76855 -5.125,-4.15625 0.77122,0.006 1.54211,0 2.3125,0 z m 33.8125,0.34375 c 0.76163,0.007 1.51997,0.0184 2.28125,0.0312 0.83037,0.6942 1.63826,1.39955 2.46875,2.09375 3.7139,0.0428 7.44791,0.0806 11.15625,0.125 l -0.0937,2.03125 c -3.59121,-0.0418 -7.18476,-0.0539 -10.78125,-0.0937 -1.67671,-1.3887 -3.35489,-2.7989 -5.03125,-4.1875 z m -89.03125,3.53125 c 0.8812,0.6889 1.77625,1.3729 2.65625,2.0625 4.4293,0.003 8.83335,0.0183 13.21875,0.0312 0.8098,-0.6865 1.62744,-1.3766 2.4375,-2.0625 0.89067,0 1.76723,0.0312 2.65625,0.0312 -1.60281,1.371 -3.21085,2.72005 -4.8125,4.09375 -4.3832,-0.013 -8.79175,0 -13.21875,0 -1.77651,-1.3801 -3.5312,-2.77955 -5.3125,-4.15625 0.7992,0 1.5773,-3e-4 2.375,0 z m -16.59375,0.0312 c -1.64369,1.3793 -3.29361,2.7436 -4.9375,4.125 l 0,0.0312 c -4.52001,0.013 -9.0469,0.008 -13.625,0.0312 -1.84521,-1.3654 -3.70969,-2.7025 -5.5625,-4.0625 0.82761,-0.002 1.67451,-0.0312 2.5,-0.0312 0.91611,0.6806 1.80455,1.34915 2.71875,2.03125 4.5812,-0.024 9.13365,-0.0172 13.65625,-0.0312 0.8314,-0.6902 1.66881,-1.40375 2.5,-2.09375 0.91811,-0.013 1.8342,0 2.75,0 z m 53.75,0.0937 c 0.85521,0.6934 1.70786,1.40015 2.5625,2.09375 4.31881,0.026 8.61656,0.0618 12.90625,0.0937 0.79547,-0.682 1.61009,-1.3813 2.40625,-2.0625 0.87174,0.008 1.72303,0.0183 2.59375,0.0312 -1.57641,1.3617 -3.14526,2.72905 -4.71875,4.09375 -4.28789,-0.0309 -8.58933,-0.0688 -12.90625,-0.0937 -1.72548,-1.3879 -3.45961,-2.77015 -5.1875,-4.15625 0.77835,10e-4 1.56647,0 2.34375,0 z m 36.3125,0.28125 c 0.83768,0.6946 1.66241,1.39915 2.5,2.09375 4.24997,0.041 8.51446,0.081 12.75,0.125 0.78901,-0.6772 1.58482,-1.35475 2.375,-2.03125 0.86132,0.01 1.7016,0.0184 2.5625,0.0312 -1.5658,1.3526 -3.12653,2.707 -4.6875,4.0625 -4.2339,-0.0442 -8.47042,-0.0841 -12.71875,-0.125 -1.6911,-1.39 -3.37094,-2.76695 -5.0625,-4.15625 0.765,0.007 1.51685,-0.013 2.28125,0 z m -56.90625,3.75 c 0.7873,0.013 1.58902,0.0312 2.375,0.0312 0.86884,0.692 1.72572,1.3698 2.59375,2.0625 4.36573,0.0161 8.70185,0.0395 13.03125,0.0625 0.79878,-0.6852 1.60696,-1.378 2.40625,-2.0625 0.87955,0.002 1.74679,0.0312 2.625,0.0312 -1.582,1.3681 -3.13895,2.72265 -4.71875,4.09375 -4.32744,-0.0209 -8.69888,-0.0475 -13.0625,-0.0625 -1.75243,-1.3865 -3.49411,-2.77265 -5.25,-4.15625 z m -14.03125,0 c -1.6154,1.3768 -3.22885,2.7457 -4.84375,4.125 -4.443,0 -8.91244,-0.013 -13.40625,0 -1.81189,-1.3761 -3.6195,-2.7534 -5.4375,-4.125 l 2.4375,0 c 0.89921,0.6864 1.78979,1.3752 2.6875,2.0625 4.49629,-0.013 8.96075,-10e-4 13.40625,0 0.8166,-0.6893 1.65195,-1.3739 2.46875,-2.0625 0.9026,0 1.7868,-9e-4 2.6875,0 z m -38.125,0.0625 c -1.66269,1.3834 -3.30515,2.77125 -4.96875,4.15625 -4.59931,0.0261 -9.24164,0.0568 -13.90625,0.0937 -0.91429,-0.6573 -1.8335,-1.31295 -2.75,-1.96875 l 0.75,-1.28125 c 0.55081,0.3979 1.10625,0.789 1.65625,1.1875 4.66789,-0.038 9.30374,-0.0667 13.90625,-0.0937 0.84129,-0.6925 1.69014,-1.3705 2.53125,-2.0625 0.93409,-0.002 1.84976,-0.0312 2.78125,-0.0312 z m 91.1875,0.15625 c 0.84713,0.6947 1.71565,1.39875 2.5625,2.09375 4.2763,0.0328 8.52671,0.0557 12.78125,0.0937 0.78845,-0.6807 1.58558,-1.35155 2.375,-2.03125 0.8649,0.008 1.72958,0.0183 2.59375,0.0312 -1.56366,1.3586 -3.12792,2.73175 -4.6875,4.09375 -4.2528,-0.0385 -8.50673,-0.092 -12.78125,-0.125 -1.70976,-1.3902 -3.41394,-2.76695 -5.125,-4.15625 0.77022,0.005 1.51185,0 2.28125,0 z m 33.78125,0.3125 c 0.76059,0.008 1.521,0.0183 2.28125,0.0312 0.83339,0.6945 1.66649,1.39915 2.5,2.09375 3.49727,0.0361 6.97673,0.0552 10.46875,0.0937 l -0.0625,2.0625 c -3.38653,-0.0363 -6.76472,-0.0591 -10.15625,-0.0937 -1.68282,-1.3892 -3.34883,-2.7981 -5.03125,-4.1875 z m -88.875,3.59375 c 0.88469,0.6906 1.77275,1.3711 2.65625,2.0625 4.4225,0.005 8.8084,0.0184 13.1875,0.0312 0.8037,-0.6879 1.60216,-1.3751 2.40625,-2.0625 0.8894,0.0129 1.79975,0 2.6875,0 -1.59092,1.3743 -3.19187,2.7478 -4.78125,4.125 -4.37685,-0.013 -8.76751,0 -13.1875,0 -1.7837,-1.3841 -3.58681,-2.77565 -5.375,-4.15625 0.7979,-10e-4 1.60985,-6e-4 2.40625,0 z m -16.5625,0 c -1.63111,1.3817 -3.27514,2.77215 -4.90625,4.15625 -4.512,0.009 -9.0554,0.0122 -13.625,0.0312 -1.85169,-1.3711 -3.7034,-2.72775 -5.5625,-4.09375 0.82589,0 1.64474,-0.0312 2.46875,-0.0312 0.9192,0.6835 1.86375,1.3777 2.78125,2.0625 4.5725,-0.021 9.11019,-0.0182 13.625,-0.0312 0.82489,-0.6915 1.64384,-1.40265 2.46875,-2.09375 l 2.75,0 z m 51.3125,0.0937 c 0.77729,0 1.56751,0.0312 2.34375,0.0312 0.85875,0.6943 1.70426,1.39905 2.5625,2.09375 4.31287,0.024 8.62237,0.0325 12.90625,0.0625 0.78971,-0.6839 1.58448,-1.34835 2.375,-2.03125 0.87055,0.006 1.72421,-0.013 2.59375,0 -1.56515,1.3653 -3.12567,2.72525 -4.6875,4.09375 -4.28201,-0.0289 -8.56407,-0.0386 -12.875,-0.0625 -1.73272,-1.3904 -3.48378,-2.7989 -5.21875,-4.1875 z m -90.15625,0.0937 c -1.6846,1.3864 -3.34545,2.76865 -5.03125,4.15625 -0.2684,0.002 -0.5438,-0.002 -0.8125,0 l 1.875,-3.21875 1.125,-0.90625 c 0.952,-0.008 1.89455,-0.0182 2.84375,-0.0312 z m 128.75,0.1875 c 0.841,0.6951 1.6903,1.39855 2.53125,2.09375 4.2441,0.0383 8.48926,0.0841 12.71875,0.125 0.78349,-0.6791 1.55897,-1.35295 2.34375,-2.03125 0.8601,0.009 1.73409,0.0184 2.59375,0.0312 -1.55504,1.3563 -3.10649,2.7029 -4.65625,4.0625 -4.22773,-0.0407 -8.47642,-0.088 -12.71875,-0.125 -1.69786,-1.391 -3.39554,-2.76575 -5.09375,-4.15625 0.76396,0.006 1.51788,-0.013 2.28125,0 z m -56.78125,3.78125 c 0.78612,0.0129 1.55893,0.0312 2.34375,0.0312 0.87251,0.6937 1.75327,1.3682 2.625,2.0625 4.35937,0.016 8.70798,0.0405 13.03125,0.0625 0.79273,-0.687 1.58167,-1.3763 2.375,-2.0625 0.87833,10e-4 1.74801,0.0312 2.625,0.0312 -1.57016,1.3717 -3.15117,2.7498 -4.71875,4.125 l 0,-0.0312 c -4.32124,-0.022 -8.64278,-0.0161 -13,-0.0312 -1.75991,-1.3895 -3.5181,-2.8006 -5.28125,-4.1875 z m -14,0 c -1.603,1.38 -3.21041,2.7424 -4.8125,4.125 l -13.375,0 c -1.8192,-1.3811 -3.64375,-2.7482 -5.46875,-4.125 l 2.4375,0 c 0.9026,0.6888 1.78631,1.3726 2.6875,2.0625 l 13.40625,0 c 0.8103,-0.6908 1.59575,-1.3723 2.40625,-2.0625 0.9012,-10e-5 1.81945,-10e-4 2.71875,0 z m -38.0625,0.0312 c -1.6496,1.3857 -3.2874,2.76865 -4.9375,4.15625 -4.59041,0.0201 -9.2203,0.0638 -13.875,0.0937 -1.896,-1.3655 -3.81406,-2.73485 -5.71875,-4.09375 0.8418,-0.006 1.69165,-0.0312 2.53125,-0.0312 0.9416,0.6803 1.8731,1.3807 2.8125,2.0625 4.6581,-0.032 9.2815,-0.0718 13.875,-0.0937 0.83459,-0.6936 1.69674,-1.3695 2.53125,-2.0625 0.9323,0 1.85145,-0.0312 2.78125,-0.0312 z m 88.75,0.15625 c 0.76916,0.004 1.51292,0.0312 2.28125,0.0312 0.85071,0.6955 1.71205,1.39805 2.5625,2.09375 4.27034,0.031 8.53274,0.0598 12.78125,0.0937 0.78264,-0.6826 1.56003,-1.3808 2.34375,-2.0625 0.86368,0.007 1.73081,0.0183 2.59375,0.0312 -1.5523,1.3628 -3.10845,2.72735 -4.65625,4.09375 -4.24667,-0.034 -8.48153,-0.0648 -12.75,-0.0937 -1.71705,-1.3924 -3.43804,-2.7964 -5.15625,-4.1875 z m 36,0.3125 c 0.7595,0.008 1.52213,0.0183 2.28125,0.0312 0.83659,0.6949 1.66326,1.3675 2.5,2.0625 3.26266,0.0311 6.52348,0.0616 9.78125,0.0937 l -0.0625,2.0625 c -3.14206,-0.03 -6.29084,-0.0646 -9.4375,-0.0937 -1.68937,-1.3902 -3.37362,-2.76605 -5.0625,-4.15625 z m -88.71875,3.625 c 0.88839,0.6927 1.8001,1.40015 2.6875,2.09375 4.4154,0.006 8.78385,0.0183 13.15625,0.0312 0.79741,-0.6901 1.60839,-1.40445 2.40625,-2.09375 0.88807,0.013 1.7698,0.0312 2.65625,0.0312 -1.5785,1.3783 -3.14215,2.7438 -4.71875,4.125 -4.37026,-0.013 -8.7743,-0.0312 -13.1875,-0.0312 -1.7912,-1.3885 -3.5794,-2.77125 -5.375,-4.15625 0.7967,0 1.5799,-10e-4 2.375,0 z m -16.53125,0 c -1.618,1.3847 -3.22605,2.76885 -4.84375,4.15625 -4.50409,0.007 -9.03276,0.0163 -13.59375,0.0312 -1.8588,-1.3773 -3.72796,-2.7528 -5.59375,-4.125 l 2.46875,0 c 0.9226,0.6866 1.82909,1.3746 2.75,2.0625 4.564,-0.0151 9.11819,-0.0182 13.625,-0.0312 0.81829,-0.6932 1.6192,-1.40115 2.4375,-2.09375 0.9149,-10e-5 1.83729,9e-4 2.75,0 z m 53.59375,0.125 c 0.86251,0.6955 1.70047,1.39755 2.5625,2.09375 4.3067,0.023 8.59725,0.0355 12.875,0.0625 0.78364,-0.686 1.59047,-1.3774 2.375,-2.0625 0.86935,0.005 1.72542,0.0312 2.59375,0.0312 -1.55322,1.3697 -3.10674,2.7518 -4.65625,4.125 -4.27582,-0.025 -8.57031,-0.0717 -12.875,-0.0937 -1.74043,-1.393 -3.47629,-2.76505 -5.21875,-4.15625 0.77617,-10e-5 1.56864,0 2.34375,0 z m -92.34375,0.0312 c -1.6706,1.3883 -3.3283,2.76645 -5,4.15625 -2.0756,0.0137 -4.19205,0.047 -6.28125,0.0625 l 1.21875,-2.09375 c 1.5577,-0.0119 3.1375,-0.0204 4.6875,-0.0312 0.8457,-0.6947 1.68586,-1.3681 2.53125,-2.0625 0.94991,-0.006 1.89654,-0.0312 2.84375,-0.0312 z m 126.25,0.1875 c 0.76284,0.005 1.55024,0.0312 2.3125,0.0312 0.84454,0.6958 1.68674,1.39775 2.53125,2.09375 4.23782,0.0334 8.46453,0.0568 12.6875,0.0937 0.77757,-0.6812 1.53353,-1.35085 2.3125,-2.03125 0.85879,0.008 1.73542,-0.013 2.59375,0 -1.54347,1.3604 -3.08727,2.72975 -4.625,4.09375 -4.22111,-0.036 -8.45155,-0.0607 -12.6875,-0.0937 -1.7051,-1.3926 -3.41971,-2.7955 -5.125,-4.1875 z m -68.375,3.8125 c -1.59,1.3838 -3.1612,2.76955 -4.75,4.15625 l -13.375,0 c -1.82681,-1.3865 -3.63645,-2.77405 -5.46875,-4.15625 0.80901,0 1.59905,9e-4 2.40625,0 0.9063,0.6916 1.81375,1.40105 2.71875,2.09375 4.48111,7e-4 8.9439,0 13.375,0 0.80369,-0.693 1.60235,-1.40165 2.40625,-2.09375 0.8998,0 1.78959,-10e-4 2.6875,0 z m 14,0.0312 c 0.78495,0.013 1.56011,0.0312 2.34375,0.0312 0.87639,0.6956 1.74932,1.3663 2.625,2.0625 4.35283,0.014 8.68305,0.0435 13,0.0625 0.78635,-0.6893 1.58793,-1.3739 2.375,-2.0625 l 2.625,0 c -1.55767,1.3763 -3.13282,2.77645 -4.6875,4.15625 l 0,-0.0312 c -4.31486,-0.019 -8.64935,-0.0173 -13,-0.0312 -1.76791,-1.3935 -3.51036,-2.7968 -5.28125,-4.1875 z m -52,0 c -1.6359,1.3887 -3.27015,2.7967 -4.90625,4.1875 -4.58161,0.017 -9.19865,0.0386 -13.84375,0.0625 -1.90271,-1.373 -3.80774,-2.7583 -5.71875,-4.125 0.84001,-0.003 1.69345,0 2.53125,0 0.9449,0.6839 1.90106,1.3768 2.84375,2.0625 4.6484,-0.0251 9.25915,-0.0464 13.84375,-0.0625 0.8277,-0.6952 1.64105,-1.39925 2.46875,-2.09375 0.9305,-0.013 1.85324,-0.0312 2.78125,-0.0312 z m 90.90625,0.1875 c 0.8545,0.6968 1.70821,1.39685 2.5625,2.09375 4.26406,0.026 8.53912,0.0629 12.78125,0.0937 0.77644,-0.6849 1.53485,-1.3787 2.3125,-2.0625 0.86238,0.007 1.73212,0.0183 2.59375,0.0312 -1.54017,1.3674 -3.08976,2.72245 -4.625,4.09375 -4.24022,-0.0291 -8.48786,-0.0354 -12.75,-0.0625 -1.72485,-1.3945 -3.43047,-2.7942 -5.15625,-4.1875 0.76804,0.001 1.51404,0 2.28125,0 z m 33.65625,0.25 c 0.7583,0.006 1.52332,0.0183 2.28125,0.0312 0.84005,0.6955 1.69102,1.39815 2.53125,2.09375 2.50386,0.0201 4.99933,0.0409 7.5,0.0625 l -1.78125,2.03125 c -1.81268,-0.015 -3.62307,-0.0165 -5.4375,-0.0312 -1.69647,-1.3912 -3.39794,-2.7963 -5.09375,-4.1875 z m -88.53125,3.6875 c 0.8923,0.6952 1.7961,1.39785 2.6875,2.09375 4.4084,0.007 8.79055,0.0184 13.15625,0.0312 0.79079,-0.6925 1.5837,-1.40225 2.375,-2.09375 0.88672,0.013 1.77113,0.0312 2.65625,0.0312 -1.56547,1.3827 -3.15555,2.77005 -4.71875,4.15625 -4.36351,-0.012 -8.7189,-0.0312 -13.125,-0.0312 -1.7994,-1.3932 -3.60275,-2.7976 -5.40625,-4.1875 0.7955,10e-5 1.5811,-9e-4 2.375,0 z m -16.5,0 c -1.60449,1.3887 -3.2087,2.7961 -4.8125,4.1875 -4.4963,0.005 -9.04125,0.0183 -13.59375,0.0312 -1.8663,-1.3843 -3.72075,-2.77735 -5.59375,-4.15625 0.82281,-0.013 1.64795,-0.0312 2.46875,-0.0312 0.9263,0.6899 1.8253,1.40265 2.75,2.09375 4.5554,-0.012 9.09475,-0.0312 13.59375,-0.0312 0.81139,-0.6951 1.62601,-1.39915 2.4375,-2.09375 0.91341,10e-4 1.83891,7e-4 2.75,0 z m 53.46875,0.125 c 0.8665,0.6973 1.72766,1.39625 2.59375,2.09375 4.3003,0.02 8.60362,0.0385 12.875,0.0625 0.77716,-0.6884 1.5656,-1.3751 2.34375,-2.0625 0.86806,0.002 1.7267,0 2.59375,0 -1.54057,1.3744 -3.08857,2.77805 -4.625,4.15625 l 0,-0.0312 c -4.2694,-0.022 -8.5455,-0.0435 -12.84375,-0.0625 -1.74868,-1.3963 -3.49956,-2.76185 -5.25,-4.15625 l 2.3125,0 z m -92.15625,0 c -1.6565,1.3915 -3.31155,2.7943 -4.96875,4.1875 -3.90371,0.02 -7.86011,0.0369 -11.8125,0.0625 l 1.1875,-2.09375 c 3.4264,-0.0233 6.8602,-0.0444 10.25,-0.0625 0.8385,-0.6962 1.6617,-1.39805 2.5,-2.09375 0.948,-0.002 1.89845,0 2.84375,0 z m 126.03125,0.1875 c 0.76171,0.003 1.52014,0.0312 2.28125,0.0312 0.84831,0.6966 1.71415,1.39685 2.5625,2.09375 4.2312,0.031 8.44019,0.0618 12.65625,0.0937 0.77122,-0.6838 1.53975,-1.3795 2.3125,-2.0625 0.85737,0.006 1.73683,0.0184 2.59375,0.0312 -1.53104,1.3654 -3.06894,2.72455 -4.59375,4.09375 -4.2141,-0.031 -8.42699,-0.0657 -12.65625,-0.0937 -1.71291,-1.3942 -3.44336,-2.7938 -5.15625,-4.1875 z m -54.28125,3.875 c 0.78374,0.013 1.56129,0.0312 2.34375,0.0312 0.88052,0.6975 1.77635,1.39545 2.65625,2.09375 4.34618,0.0139 8.65832,0.0133 12.96875,0.0312 0.77964,-0.6919 1.56329,-1.3716 2.34375,-2.0625 l 2.625,0 c -1.5445,1.3814 -3.08388,2.77105 -4.625,4.15625 -4.30833,-0.0161 -8.62476,-0.0182 -12.96875,-0.0312 -1.77649,-1.3975 -3.56462,-2.82385 -5.34375,-4.21875 z m -13.9375,0 c -1.5764,1.3883 -3.1751,2.76445 -4.75,4.15625 -4.4215,9e-4 -8.84181,-9e-4 -13.3125,0 -1.8351,-1.3926 -3.69116,-2.76795 -5.53125,-4.15625 0.80749,10e-4 1.63169,6e-4 2.4375,0 0.9102,0.6944 1.80965,1.39825 2.71875,2.09375 l 13.34375,0 c 0.7968,-0.6953 1.60905,-1.39945 2.40625,-2.09375 0.8983,0 1.7911,-0.001 2.6875,0 z m -37.9375,0 c -1.622,1.3926 -3.2532,2.7926 -4.875,4.1875 -4.573,0.012 -9.1768,0.0444 -13.8125,0.0625 -1.90999,-1.3815 -3.83209,-2.7502 -5.75,-4.125 0.83831,0 1.69505,-0.0312 2.53125,-0.0312 0.9483,0.688 1.89736,1.3728 2.84375,2.0625 4.63901,-0.019 9.2366,-0.0183 13.8125,-0.0312 0.82049,-0.6971 1.64815,-1.39735 2.46875,-2.09375 0.92879,-0.013 1.85485,-0.0312 2.78125,-0.0312 z m 90.75,0.1875 c 0.85857,0.698 1.73533,1.39555 2.59375,2.09375 4.25756,0.024 8.4833,0.0355 12.71875,0.0625 0.76982,-0.6876 1.54136,-1.376 2.3125,-2.0625 0.86104,0.004 1.73346,0.0312 2.59375,0.0312 -1.52723,1.3726 -3.07191,2.7485 -4.59375,4.125 -4.23347,-0.024 -8.4632,-0.0396 -12.71875,-0.0625 -1.73326,-1.3971 -3.45355,-2.7915 -5.1875,-4.1875 l 2.28125,0 z m 33.59375,0.21875 c 0.75704,0.003 1.52461,0.0312 2.28125,0.0312 0.83244,0.6868 1.66736,1.34455 2.5,2.03125 l -0.9375,1.09375 c -1.2805,-1.0465 -2.56369,-2.10975 -3.84375,-3.15625 z m -88.34375,3.75 c 0.8965,0.6977 1.79189,1.39525 2.6875,2.09375 4.40149,0.006 8.76604,0.0183 13.125,0.0312 0.78382,-0.6951 1.55931,-1.39935 2.34375,-2.09375 0.88535,0.013 1.7725,0.0312 2.65625,0.0312 -1.5518,1.388 -3.10712,2.76435 -4.65625,4.15625 -4.3568,-0.0101 -8.7259,-0.0312 -13.125,-0.0312 -1.80821,-1.3985 -3.62571,-2.7924 -5.4375,-4.1875 0.7941,0 1.61355,-0.001 2.40625,0 z m -16.5,0 c -1.5905,1.3935 -3.19175,2.791 -4.78125,4.1875 -4.4885,10e-4 -8.98695,-0.013 -13.53125,0 -1.87439,-1.3915 -3.74429,-2.77005 -5.625,-4.15625 l 2.4375,0 c 0.93009,0.6936 1.8839,1.39885 2.8125,2.09375 4.5471,-0.003 9.04015,-0.0312 13.53125,-0.0312 0.8043,-0.6977 1.633,-1.39695 2.4375,-2.09375 0.9118,-5e-4 1.80914,3e-4 2.71875,0 z m 51.09375,0.0937 c 0.77385,0.0129 1.53968,0.0312 2.3125,0.0312 0.87079,0.699 1.75455,1.39435 2.625,2.09375 4.29377,0.0169 8.54769,0.0113 12.8125,0.0312 0.77031,-0.6912 1.54107,-1.3723 2.3125,-2.0625 0.86672,0.001 1.75928,0.0312 2.625,0.0312 -1.52711,1.3799 -3.07121,2.7409 -4.59375,4.125 -4.26278,-0.0191 -8.52082,-0.0464 -12.8125,-0.0625 -1.75758,-1.3996 -3.52223,-2.7897 -5.28125,-4.1875 z m -89.6875,0 c -1.64201,1.3952 -3.29501,2.7902 -4.9375,4.1875 -4.65821,0.0171 -9.36635,0.0385 -14.09375,0.0625 -0.79451,-0.5592 -1.57901,-1.1295 -2.375,-1.6875 l 0.75,-1.28125 c 0.4088,0.2891 0.81025,0.5855 1.21875,0.875 4.7309,-0.027 9.43226,-0.0435 14.09375,-0.0625 0.8313,-0.6981 1.66911,-1.39615 2.5,-2.09375 l 2.84375,0 z m 128.09375,0.1875 c 0.85242,0.6978 1.70998,1.39575 2.5625,2.09375 4.22427,0.026 8.44744,0.0666 12.65625,0.0937 0.7644,-0.6869 1.54645,-1.3768 2.3125,-2.0625 0.26091,0.002 0.52039,-0.002 0.78125,0 l -3.53125,4.125 c -3.9576,-0.0242 -7.90355,-0.04 -11.875,-0.0625 -1.7214,-1.3965 -3.46638,-2.7916 -5.1875,-4.1875 0.7605,0.001 1.52135,0 2.28125,0 z m -70.375,3.90625 c -1.5624,1.394 -3.1271,2.79 -4.6875,4.1875 l 0,0.0312 c -4.4144,-0.0129 -8.8493,-0.0309 -13.3125,-0.0312 -1.8439,-1.399 -3.68275,-2.7926 -5.53125,-4.1875 0.8061,-3e-4 1.60174,2e-4 2.40625,0 0.9145,0.6976 1.8365,1.39515 2.75,2.09375 l 13.3125,0 c 0.7897,-0.6979 1.585,-1.39655 2.375,-2.09375 0.8969,0 1.7924,-0.001 2.6875,0 z m 16.28125,0.0312 c 0.88498,0.6997 1.77181,1.4245 2.65625,2.125 4.33948,0.011 8.66493,0.0172 12.96875,0.0312 0.77257,-0.6949 1.53903,-1.39995 2.3125,-2.09375 0.87441,0 1.75192,0.0312 2.625,0.0312 -1.53057,1.3871 -3.06699,2.76485 -4.59375,4.15625 -4.30171,-0.014 -8.60021,-0.0182 -12.9375,-0.0312 -1.78575,-1.4019 -3.58698,-2.81935 -5.375,-4.21875 l 2.34375,0 z m -54.15625,0 c -1.6075,1.3973 -3.20549,2.7875 -4.8125,4.1875 -4.5644,0.009 -9.15475,0.0183 -13.78125,0.0312 -1.9179,-1.3901 -3.8247,-2.77245 -5.75,-4.15625 0.8366,-0.0129 1.6656,-0.0312 2.5,-0.0312 0.9521,0.6924 1.89335,1.39985 2.84375,2.09375 4.62961,-0.014 9.24522,-0.0182 13.8125,-0.0312 0.8133,-0.6993 1.6242,-1.39505 2.4375,-2.09375 l 2.75,0 z m 88.34375,0.125 c 0.7657,0 1.51638,0.0312 2.28125,0.0312 0.86298,0.6993 1.73083,1.39415 2.59375,2.09375 4.25086,0.019 8.49023,0.0406 12.71875,0.0625 0.76279,-0.6906 1.51703,-1.3732 2.28125,-2.0625 0.85963,9e-4 1.73488,0 2.59375,0 -1.51337,1.3783 -3.02372,2.77345 -4.53125,4.15625 l 0,-0.0312 c -4.2265,-0.02 -8.46993,-0.0132 -12.71875,-0.0312 -1.74239,-1.4 -3.47599,-2.81995 -5.21875,-4.21875 z m -127.625,0 c -1.66461,1.3962 -3.3344,2.7897 -5,4.1875 -0.1136,6e-4 -0.23015,-5e-4 -0.34375,0 l 2.375,-4.125 c 0.0225,-0.0186 0.04,-0.0439 0.0625,-0.0625 0.96491,-0.002 1.94425,0 2.90625,0 z m 58.8125,4.03125 c -1.57591,1.399 -3.17551,2.81645 -4.75,4.21875 l 0,-0.0312 c -4.4809,0 -8.9639,0.0312 -13.5,0.0312 -1.8833,-1.3994 -3.76735,-2.7934 -5.65625,-4.1875 0.8197,1e-4 1.61971,0.001 2.4375,0 0.93441,0.6973 1.8795,1.39515 2.8125,2.09375 4.53879,-0.013 9.04774,-0.0303 13.53125,-0.0312 0.7969,-0.7004 1.5778,-1.39415 2.375,-2.09375 0.9102,-1e-4 1.84189,0 2.75,0 z m 16.4375,0.0312 c 0.9011,0.7006 1.81845,1.39255 2.71875,2.09375 4.3945,0.006 8.77275,0.0184 13.125,0.0312 0.77651,-0.6981 1.53527,-1.39655 2.3125,-2.09375 l 2.65625,0 c -1.53741,1.394 -3.09065,2.7893 -4.625,4.1875 -4.35,-0.007 -8.70155,-0.0312 -13.09375,-0.0312 -1.81771,-1.4041 -3.64785,-2.7868 -5.46875,-4.1875 0.7929,0 1.5836,-9e-4 2.375,0 z m -54.96875,0.0312 c -1.62711,1.3999 -3.27916,2.7853 -4.90625,4.1875 l 0,0.0312 c -4.6489,0.012 -9.31385,0.0153 -14.03125,0.0312 -1.96519,-1.388 -3.93226,-2.77575 -5.90625,-4.15625 l 2.5625,0 c 0.97589,0.6907 1.93224,1.3696 2.90625,2.0625 4.7206,-0.0181 9.41041,-0.0172 14.0625,-0.0312 0.82351,-0.7004 1.64545,-1.4252 2.46875,-2.125 0.94408,-0.013 1.90235,0 2.84375,0 z m 91.84375,0.0312 c 0.87544,0.7006 1.7498,1.39255 2.625,2.09375 4.28713,0.013 8.55441,0.0465 12.8125,0.0625 0.76305,-0.6944 1.51698,-1.40025 2.28125,-2.09375 0.86537,0 1.76068,0.0312 2.625,0.0312 -1.51281,1.3861 -3.02345,2.76565 -4.53125,4.15625 -4.25603,-0.015 -8.52746,-0.0495 -12.8125,-0.0625 -1.76721,-1.4034 -3.54421,-2.7859 -5.3125,-4.1875 0.77266,0.013 1.54088,0 2.3125,0 z m 36.0625,0.15625 c 0.8569,0.6989 1.70545,1.39465 2.5625,2.09375 2.06683,0.01 4.12479,0.0213 6.1875,0.0312 l -1.78125,2.09375 c -1.35454,-0.006 -2.70614,-0.0254 -4.0625,-0.0312 -1.73066,-1.3985 -3.45742,-2.7893 -5.1875,-4.1875 l 2.28125,0 z m -70.25,3.96875 c -1.5475,1.4002 -3.0798,2.81455 -4.625,4.21875 -4.40741,-0.013 -8.85661,-0.0303 -13.3125,-0.0312 -1.8535,-1.4059 -3.7049,-2.7859 -5.5625,-4.1875 0.80479,-10e-5 1.60326,0 2.40625,0 0.91911,0.7011 1.83191,1.39175 2.75,2.09375 4.45851,0.013 8.9027,0 13.3125,0 0.782,-0.7013 1.56115,-1.39365 2.34375,-2.09375 l 2.6875,0 z m -37.8125,0 c -1.5923,1.403 -3.1584,2.81265 -4.75,4.21875 l 0,-0.0312 c -4.5561,0.004 -9.16355,0.0183 -13.78125,0.0312 -1.9266,-1.3993 -3.84786,-2.7946 -5.78125,-4.1875 l 2.5,0 c 0.9562,0.6969 1.9204,1.39535 2.875,2.09375 4.62069,-0.01 9.191,-0.0312 13.75,-0.0312 0.80559,-0.7023 1.6318,-1.39235 2.4375,-2.09375 0.9253,-10e-5 1.827,9e-4 2.75,0 z m 54.0625,0.0312 c 0.88982,0.7022 1.79813,1.39085 2.6875,2.09375 4.3328,0.009 8.64032,0.0183 12.9375,0.0312 0.7651,-0.6983 1.51516,-1.39645 2.28125,-2.09375 0.87306,0.013 1.75327,0.0312 2.625,0.0312 -1.51582,1.3938 -3.01965,2.7893 -4.53125,4.1875 -4.29506,-0.01 -8.60689,-0.0183 -12.9375,-0.0312 -1.79578,-1.4069 -3.60861,-2.81445 -5.40625,-4.21875 l 2.34375,0 z m -93.28125,0.0625 c -1.6493,1.4008 -3.28759,2.7846 -4.9375,4.1875 -1.95239,0.006 -3.94145,0.0243 -5.90625,0.0312 0.335,-0.7177 0.6709,-1.38435 1,-2.09375 1.48219,-0.006 2.99355,0.006 4.46875,0 0.8351,-0.7007 1.6651,-1.4248 2.5,-2.125 l 2.875,0 z m 129.6875,0.0312 c 0.86776,0.7008 1.75721,1.4239 2.625,2.125 4.24401,0.0139 8.46609,0.0153 12.6875,0.0312 0.75528,-0.694 1.52444,-1.3698 2.28125,-2.0625 l 2.5625,0 c -1.49861,1.3849 -3.00771,2.76665 -4.5,4.15625 -4.21934,-0.015 -8.44556,-0.0182 -12.6875,-0.0312 -1.75234,-1.4029 -3.49768,-2.81665 -5.25,-4.21875 0.7645,0.0129 1.51759,0 2.28125,0 z m -54.53125,4.09375 c 0.90599,0.7035 1.81335,1.4207 2.71875,2.125 4.3875,0.003 8.77945,-0.013 13.125,0 0.76883,-0.7016 1.51161,-1.39325 2.28125,-2.09375 l 2.65625,0 c -1.52225,1.4007 -3.04373,2.7823 -4.5625,4.1875 l 0,0.0312 c -4.34335,-0.002 -8.70845,-0.0312 -13.09375,-0.0312 -1.8281,-1.4101 -3.63795,-2.81195 -5.46875,-4.21875 0.7916,0 1.55364,-6e-4 2.34375,0 z m -16.40625,0 c -1.5606,1.4054 -3.12849,2.80965 -4.6875,4.21875 l -13.5,0 c -1.89289,-1.4076 -3.7895,-2.81635 -5.6875,-4.21875 0.8182,0 1.6212,8e-4 2.4375,0 0.93901,0.7015 1.87469,1.39095 2.8125,2.09375 4.5309,0 9.05524,2e-4 13.53125,0 0.7891,-0.7037 1.55415,-1.39095 2.34375,-2.09375 0.9086,0 1.8434,-2e-4 2.75,0 z m -38.46875,0.0312 c -1.6115,1.4053 -3.23224,2.81055 -4.84375,4.21875 -4.6397,0.008 -9.32385,-0.013 -14.03125,0 -1.9737,-1.3987 -3.9558,-2.76485 -5.9375,-4.15625 0.8516,-0.0129 1.71329,-0.0312 2.5625,-0.0312 0.9799,0.6961 1.95959,1.39585 2.9375,2.09375 4.7108,-0.012 9.38825,-0.0182 14.03125,-0.0312 0.8157,-0.7034 1.62181,-1.39115 2.4375,-2.09375 l 2.84375,0 z m 91.6875,0.0312 c 0.88049,0.7029 1.7759,1.39065 2.65625,2.09375 4.28045,0.01 8.52996,0.0183 12.78125,0.0312 0.75534,-0.6979 1.52459,-1.39705 2.28125,-2.09375 0.86397,0.0131 1.73082,0.0312 2.59375,0.0312 -1.49762,1.393 -3.00785,2.7896 -4.5,4.1875 -4.24922,-0.01 -8.50289,-0.0183 -12.78125,-0.0312 -1.77773,-1.4074 -3.56539,-2.81295 -5.34375,-4.21875 l 2.3125,0 z m 36,0.0937 c 0.53062,0.431 1.06303,0.8814 1.59375,1.3125 l -0.90625,1.0625 c -0.98885,-0.796 -1.98018,-1.5792 -2.96875,-2.375 0.75795,0.0129 1.52392,0 2.28125,0 z m -70.09375,4.0625 c -1.53201,1.407 -3.06456,2.80725 -4.59375,4.21875 -4.40061,0 -8.8012,9e-4 -13.25,0 -1.864,-1.4133 -3.72615,-2.80955 -5.59375,-4.21875 0.80351,10e-5 1.60445,0 2.40625,0 0.92409,0.7048 1.8267,1.4194 2.75,2.125 l 13.28125,0 c 0.7741,-0.7048 1.56895,-1.4211 2.34375,-2.125 0.894,10e-5 1.76395,-8e-4 2.65625,0 z m -37.71875,0 c -1.57671,1.4095 -3.17441,2.80595 -4.75,4.21875 l -13.71875,0 c -1.93609,-1.4089 -3.8702,-2.81585 -5.8125,-4.21875 0.83319,0 1.63764,10e-4 2.46875,0 0.9607,0.7018 1.94705,1.4219 2.90625,2.125 4.61199,0 9.16775,-0.0312 13.71875,-0.0312 0.7977,-0.7055 1.60835,-1.38905 2.40625,-2.09375 0.92369,10e-4 1.85995,6e-4 2.78125,0 z m 53.96875,0.0312 c 0.89505,0.7048 1.79276,1.38845 2.6875,2.09375 4.32616,0.005 8.61571,0.0183 12.90625,0.0312 0.75717,-0.7019 1.52296,-1.39305 2.28125,-2.09375 l 2.59375,0 c -1.50022,1.4008 -2.97317,2.7818 -4.46875,4.1875 l 0,0.0312 c -4.28844,-0.003 -8.61348,-0.0312 -12.9375,-0.0312 -1.80671,-1.412 -3.59817,-2.80915 -5.40625,-4.21875 0.78012,0 1.56491,-10e-4 2.34375,0 z m -93.125,0 c -1.63341,1.4064 -3.27255,2.8414 -4.90625,4.25 -3.616,0.007 -7.2789,0.0234 -10.9375,0.0312 0.3312,-0.6689 0.65656,-1.3482 1.03125,-2.125 3.15411,-0.007 6.31509,-0.0226 9.4375,-0.0312 0.827,-0.7037 1.64185,-1.39085 2.46875,-2.09375 0.9608,-0.013 1.94825,-0.0312 2.90625,-0.0312 z m 129.46875,0.0625 c 0.87297,0.7027 1.7519,1.39085 2.625,2.09375 4.08014,0.009 8.12865,0.0192 12.1875,0.0312 l -1.8125,2.09375 c -3.33158,-0.005 -6.65383,0.0102 -10,0 -1.76317,-1.4064 -3.5185,-2.81315 -5.28125,-4.21875 l 2.28125,0 z m -54.40625,4.125 c 0.91149,0.7067 1.8392,1.4177 2.75,2.125 l 13.0625,0 c 0.76072,-0.7056 1.5196,-1.38935 2.28125,-2.09375 0.88127,1e-4 1.77656,-8e-4 2.65625,0 -1.50625,1.4085 -3.02887,2.80565 -4.53125,4.21875 -4.33677,-0.013 -8.6839,0 -13.0625,0 -1.8393,-1.4163 -3.68975,-2.8367 -5.53125,-4.25 0.7904,-9e-4 1.5862,-4e-4 2.375,0 z m -16.40625,0 c -1.5447,1.4125 -3.0824,2.8333 -4.625,4.25 -4.46631,-2e-4 -8.94805,-8e-4 -13.46875,0 -1.90339,-1.4162 -3.81076,-2.8388 -5.71875,-4.25 0.8168,-3e-4 1.62259,4e-4 2.4375,0 0.944,0.7058 1.8696,1.418 2.8125,2.125 4.5232,-9e-4 9.03119,-3e-4 13.5,0 0.78109,-0.7074 1.56226,-1.4187 2.34375,-2.125 0.90731,1e-4 1.81365,-2e-4 2.71875,0 z m -38.40625,0.0312 c -1.5956,1.4121 -3.18625,2.80375 -4.78125,4.21875 l -14,0 c -1.983,-1.41 -3.94711,-2.81595 -5.9375,-4.21875 l 2.53125,0 c 0.9844,0.7018 1.9549,1.4214 2.9375,2.125 4.7014,-9e-4 9.39695,-0.0312 14.03125,-0.0312 0.8076,-0.7067 1.59866,-1.38775 2.40625,-2.09375 0.94051,0 1.8746,0.001 2.8125,0 z m 91.5625,0.0312 c 0.88597,0.7051 1.7703,1.38845 2.65625,2.09375 4.2738,0.004 8.53679,0.0312 12.78125,0.0312 0.74715,-0.7019 1.50144,-1.39335 2.25,-2.09375 l 2.59375,0 c -1.48145,1.4005 -2.96195,2.7818 -4.4375,4.1875 -4.24235,10e-5 -8.50953,0 -12.78125,0 -1.78916,-1.4119 -3.58569,-2.80835 -5.375,-4.21875 0.77026,0 1.54327,-10e-4 2.3125,0 z m -17.78125,4.1875 c 0.90076,0.7075 1.78692,1.417 2.6875,2.125 4.31965,0.013 8.62227,0 12.90625,0 0.74879,-0.7061 1.49999,-1.38895 2.25,-2.09375 0.87035,0 1.72474,-7e-4 2.59375,0 -1.4837,1.4089 -2.95888,2.80455 -4.4375,4.21875 l -12.875,0 c -1.81861,-1.4174 -3.64931,-2.8348 -5.46875,-4.25 0.77894,0 1.56608,-5e-4 2.34375,0 z m -16.21875,0 c -1.5155,1.4149 -3.01885,2.8303 -4.53125,4.25 l -13.25,0 c -1.8754,-1.4209 -3.77786,-2.8331 -5.65625,-4.25 0.8021,0 1.60574,-10e-5 2.40625,0 0.92959,0.7085 1.88359,1.4155 2.8125,2.125 l 13.25,0 c 0.7659,-0.7089 1.51455,-1.4173 2.28125,-2.125 0.8926,2e-4 1.7967,-4e-4 2.6875,0 z m -37.6875,0 c -1.5604,1.4168 -3.09735,2.8294 -4.65625,4.25 l -13.71875,0 c -1.9466,-1.4191 -3.89165,-2.8369 -5.84375,-4.25 0.83169,9e-4 1.63905,5e-4 2.46875,0 0.9656,0.7067 1.94194,1.4168 2.90625,2.125 4.6038,0 9.17545,8e-4 13.71875,0 0.7894,-0.7092 1.5852,-1.4166 2.375,-2.125 0.9221,-2e-4 1.8302,3e-4 2.75,0 z m -39.0625,0 c -1.6169,1.413 -3.25799,2.8343 -4.875,4.25 l -14.25,0 0.21875,-2.09375 c 4.5534,-10e-4 9.07469,-0.0312 13.5625,-0.0312 0.8188,-0.7068 1.65016,-1.4187 2.46875,-2.125 0.95901,0 1.91911,8e-4 2.875,0 z m 129.25,0.0312 c 0.87865,0.7044 1.77734,1.4206 2.65625,2.125 1.37165,0 2.7247,-0.002 4.09375,0 l -1.8125,2.09375 -1.9375,0 c -1.76355,-1.4008 -3.51859,-2.81855 -5.28125,-4.21875 0.76203,0 1.52007,-9e-4 2.28125,0 z"
         style="fill:url(#linearGradient33790);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45213"
         d="m 570.24265,705.56616 -47.875,89.65625 0,18.90625 -5,0 0,-19.5 0,-0.625 0.3125,-0.5625 50.21875,-87.875 2.34375,0 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45275"
         d="m 675.5239,798.53491 0,2.46875 -153.96875,0 0.0312,-2.46875 153.9375,0 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1f1f1f;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4501"
         d="m 742.61765,761.40991 -37.9375,53.71875 -181.5625,0.4375 -3.375,-1.4375 183.90625,0 36.9375,-52.40625 2.03125,-0.3125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33795);fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4666"
         d="m 715.8364,720.19116 23.125,4.9375 -23.34375,-2.9375 0.21875,-2 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4720"
         d="m 1192.3052,694.03491 1.5,0.0312 c 1.7364,26.11979 2.0967,52.34499 -2.3125,78.9375 l -0.031,0.40625 -0.3437,0.21875 -30.8438,20.40625 -0.094,0.0625 -0.125,0.0312 -44.1875,9.21875 -0.4688,0.0937 -0.2812,-0.375 -38.1875,-51.25 0.9062,-1.375 38.1875,51.34375 43.5625,-9.09375 30.4063,-20.15625 c 4.4478,-26.16667 4.0031,-52.33333 2.3125,-78.5 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33799);fill-opacity:1;stroke:none;stroke-width:1.5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4756"
         d="m 1194.5552,690.50366 c 1.5779,0 2.875,1.26579 2.875,2.84375 0,1.57796 -1.2971,2.875 -2.875,2.875 -1.578,0 -2.8438,-1.29704 -2.8438,-2.875 0,-1.57796 1.2658,-2.84375 2.8438,-2.84375 z"
         style="opacity:0.51724135;fill:url(#radialGradient33802);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4790"
         d="m 1068.5239,539.59741 41.9375,0.65625 c 0.013,0.01 0.049,-0.01 0.062,0 62.7262,46.77133 86.7369,103.0608 92.8125,119.15625 -9.6212,16.47115 -33.8197,21.01287 -53.1562,29.0625 l -33.7188,3.03125 7.5625,-9.875 c -28.8837,6.45598 -57.2764,12.9059 -86.1562,17 l -50.87505,4.625 C 973.75139,664.94448 942.72288,628.10934 896.5239,595.22241 l 87.875,-25.84375 -9.46875,-4.875 93.59375,-24.90625 z"
         style="opacity:0.1;fill:url(#radialGradient33805);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3806"
         d="m 1110.3364,540.15991 c 28.7323,24.49073 56.2988,54.37555 78.375,88.375 -6.4048,4.17809 -14.023,5.98637 -22.25,6.625 -20.5018,-14.04974 -41.3958,-24.84256 -64.75,-33.1875 l -12.9687,-17.78125 21.5937,-44.03125 z"
         style="fill:#1a1a1a;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5529"
         d="m 1130.8677,566.22241 c 3.2096,0.091 6.4466,1.13397 9.6562,4.125 l 29.4063,36.15625 c -3.7306,8.91336 -9.4258,15.53452 -17.1563,19.78125 -0.021,-0.003 -0.042,0.003 -0.062,0 -16.1574,-9.83285 -32.8042,-17.82191 -50.9687,-24.3125 l -8.125,-11.125 c 9.2486,-8.99064 18.9592,-17.6118 31.5,-23.96875 1.9257,-0.4314 3.8242,-0.71084 5.75,-0.65625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3850"
         d="m 1125.5239,566.56616 c 11.646,11.44254 25.5,26.96875 25.5,26.96875 -1.1814,9.07003 -1.644,21.41247 -2.9375,29.96875 -5.6096,-3.27069 -11.2998,-6.33553 -17.0937,-9.1875 2.5938,-6.56247 4.5625,-23.84375 4.5625,-23.84375 l -15.3438,-18.84375 4.3125,-4.3125 1,-0.75 z"
         style="fill:url(#linearGradient33810);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3859"
         d="m 1162.9927,600.37866 1.1562,5.125 -0.4062,8.75 -10.9688,12.0625 c -1.276,-0.77698 -2.5609,-1.52731 -3.8437,-2.28125 l 5.7187,-10.03125 3.875,-13.28125 4.4688,-0.34375 z"
         style="fill:url(#linearGradient33813);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4206"
         d="m 917.7739,470.50366 c 8.81277,3.94454 17.69361,7.93371 26.96875,12.125 l 19.59375,-3.40625 c 8.01688,1.44942 15.76574,3.09649 23.28125,4.90625 51.30155,19.46567 82.24275,52.55129 106.53125,88.75 l -0.875,1.78125 c -25.2774,-37.88229 -57.4803,-72.20108 -112.71875,-91.28125 l -0.0312,0 c -5.27919,-1.17356 -10.6719,-2.28159 -16.1875,-3.28125 l -19.4375,3.375 -0.28125,0.0312 -0.21875,-0.0937 c -8.58444,-3.87918 -16.78103,-7.55156 -24.96875,-11.21875 l -11.59375,0.0937 c -1.09185,-0.55318 -2.18756,-1.10344 -3.28125,-1.65625 l 13.21875,-0.125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33816);fill-opacity:1;stroke:none;stroke-width:1.70000005;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4832"
         d="m 776.9614,767.90991 -12.0625,85.34375 -3.53125,6.34375 0.0625,-9.875 12.59375,-66.28125 2.9375,-15.53125 z"
         style="fill:url(#linearGradient33819);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4026"
         d="m 1124.0239,681.62866 -1.75,1.9375 c -45.0964,10.61203 -90.6846,18.599 -135.78125,22.25 -75.08056,-1.46877 -148.418,-7.93755 -221.53125,-14.1875 l -1.03125,-1.0625 c 73.83211,5.94948 147.28068,12.31861 223.0625,13.71875 45.68145,-3.49291 91.34985,-12.44571 137.03125,-22.65625 z"
         style="fill:url(#radialGradient33822);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5031"
         d="m 1101.8052,827.19116 -11.875,14.65625 c -116.40534,8.72858 -225.75655,13.14633 -325.0313,11.40625 l 3.46875,-24.46875 14.125,5.875 c 104.64588,-0.0637 209.00915,2.90672 319.31255,-7.46875 z"
         style="fill:#0c0c0c;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4328"
         d="m 1099.3989,823.37866 c 2.1231,0 2.625,0.69163 1.9375,1.96875 -150.68735,8.82996 -105.50586,11.25788 -317.3125,11.28125 -2.39067,0.64058 -12.40063,-4.5626 -16,-6.3125 l 0.375,-1.625 c 11.7325,4.98184 9.67288,5.91797 16.96875,6 104.1187,0.91204 208.64778,-1.81933 314.03125,-11.3125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33827);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path5073"
         d="m 963.9614,479.94116 c 0,0 15.76574,3.09649 23.28125,4.90625 51.30155,19.46567 82.24275,52.55129 106.53125,88.75 l -0.875,1.78125 c -25.2774,-37.88229 -57.4803,-72.20108 -112.71875,-91.28125 l -0.0312,0 c -5.27919,-1.17356 -16.1875,-3.28125 -16.1875,-3.28125 l 0,-0.875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33830);fill-opacity:1;stroke:none;stroke-width:1.70000005;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45287"
         d="m 535.5864,762.12866 -18.21875,31.875 0,5.15625 c -0.47643,-5.10544 -8.30214,-5.21607 -14.96875,-6.28125 14.95956,1.14141 19.83752,-9.7728 33.1875,-30.75 z"
         style="fill:#101010;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45258"
         d="m 471.05515,790.50366 46.3125,3.5 0,20.125 -46.3125,-23.625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45267"
         d="m 569.0239,702.00366 145.625,24.1875 -0.625,3.9375 -144.125,-23.9375 0.34375,-0.625 -1.21875,-3.5625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45348"
         d="m 568.2739,699.84741 146.6875,24.375 -0.625,3.9375 -144.59375,-24.03125 -1.46875,-4.28125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4672"
         d="m 567.6489,698.06616 2.59375,7.5 -2.34375,0 -0.53125,-5.53125 0.28125,-1.96875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#323232;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45269"
         d="m 714.9614,724.22241 0.625,31.15625 -2,0 -0.1875,-29.8125 1.5625,-1.34375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4664"
         d="m 713.5864,755.12866 27,6.59375 -36.9375,52.40625 -27.96875,-13.5 37.90625,-45.5 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45281"
         d="m 713.5864,755.12866 2,0.25 -40.0625,45.625 0,-2.46875 38.0625,-43.40625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#333333;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45297"
         d="m 529.0239,773.62866 -9.28125,21.375 0,19.125 -2.375,0 -46.28125,-23.65625 46.28125,3.53125 11.65625,-20.375 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4872"
         d="m 1122.5239,682.22241 -52.4687,77.59375 c -38.4588,5.27188 -110.66277,-34.07972 -141.2813,-55.71875 19.40518,1.0174 38.94106,2.54937 58.78125,2.9375 44.40905,-3.59533 88.81005,-12.45603 133.21875,-22.90625 l 1.75,-1.90625 z"
         style="opacity:0.5;fill:url(#radialGradient4890);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45378"
         d="m 1151.3677,693.31616 c -0.028,0.0841 -0.3066,0.22146 -0.7188,0.375 0.2406,-0.12438 0.4777,-0.24797 0.7188,-0.375 z m -0.7188,0.375 c -15.2897,7.9038 -29.5692,10.51038 -43.9375,13.5 l 4.5625,-6.75 c 2.7001,1.70658 34.32,-4.86678 39.375,-6.75 z"
         style="fill:url(#linearGradient45386);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5060"
         d="m 568.7739,848.72241 192.65625,1 -0.0625,9.5 -0.21875,0.375 c -115.12647,-1.78824 -238.9619,0.50323 -344.40625,-4.75 -5.27243,-0.54125 -10.55104,-1.08648 -15.8125,-1.65625 l 167.84375,-4.46875 z"
         style="fill:url(#linearGradient5071);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45414"
         d="m 312.4926,784.59741 149.2188,6.90625 107.0625,57.21875 -4.375,9.3125 c -91.77881,-0.94293 -179.63041,-3.43428 -250,-12.78125 -0.2058,-21.6967 -0.8705,-41.85458 -1.9063,-60.65625 z"
         style="fill:url(#linearGradient4503);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45441"
         d="m 540.18015,580.44116 19.96875,4.09375 c -0.70711,0.35355 -8.125,6.34375 -8.125,6.34375 l 6.375,37.125 -21.21875,-9.71875 -4.0625,-31.28125 7.0625,-6.5625 z"
         style="fill:url(#linearGradient45685);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45445"
         d="m 425.7739,546.47241 191.4375,43.46875 0,0.0312 0.0625,0 23.15625,16.1875 -5.5,1.46875 -18.53125,-13.78125 c -21.76479,-7.42914 -190.625,-47.375 -190.625,-47.375 z"
         style="fill:url(#radialGradient45809);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45449"
         d="m 608.68015,617.94116 c 2.56517,0 4.6875,2.09108 4.6875,4.65625 0,2.56517 -2.12233,4.6875 -4.6875,4.6875 -2.56517,0 -4.65625,-2.12233 -4.65625,-4.6875 0,-2.56517 2.09108,-4.65625 4.65625,-4.65625 z m 0,2 c -1.48429,0 -2.65625,1.17196 -2.65625,2.65625 0,1.48428 1.17196,2.65625 2.65625,2.65625 1.48428,0 2.6875,-1.17197 2.6875,-2.65625 0,-1.48429 -1.20322,-2.65625 -2.6875,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5946);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45443"
         d="m 487.3364,601.28491 c 0.007,-0.0729 6.72909,1.83864 16.34375,5 -9.58023,-2.99625 -16.34375,-5 -16.34375,-5 z m 17.46875,5.375 c 24.73128,7.75354 68.26972,22.03367 78.40625,29.65625 l 21.75,0 28.71875,-23.34375 -26.9375,26.84375 -34.65625,0 c -7.48371,-11.76323 -44.72792,-25.68482 -67.28125,-33.15625 z"
         style="fill:url(#radialGradient45779);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45455"
         d="m 608.68015,606.72241 c 2.56516,0 4.6875,2.09108 4.6875,4.65625 0,2.56517 -2.12234,4.6875 -4.6875,4.6875 -2.56517,0 -4.65625,-2.12233 -4.65625,-4.6875 0,-2.56517 2.09107,-4.65625 4.65625,-4.65625 z m 0,2 c -1.48429,0 -2.65625,1.17196 -2.65625,2.65625 0,1.48428 1.17196,2.65625 2.65625,2.65625 1.48428,0 2.6875,-1.17197 2.6875,-2.65625 0,-1.48429 -1.20322,-2.65625 -2.6875,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5944);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45457"
         d="m 606.5864,596.28491 c 2.56517,0 4.65625,2.09108 4.65625,4.65625 0,2.56517 -2.09108,4.6875 -4.65625,4.6875 -2.56517,0 -4.6875,-2.12233 -4.6875,-4.6875 0,-2.56517 2.12232,-4.65625 4.6875,-4.65625 z m 0,2 c -1.48429,0 -2.6875,1.17196 -2.6875,2.65625 0,1.48428 1.20321,2.6875 2.6875,2.6875 1.48428,0 2.65625,-1.20322 2.65625,-2.6875 0,-1.48429 -1.17197,-2.65625 -2.65625,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5942);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45459"
         d="m 587.0239,589.75366 c 2.56517,0 4.6875,2.09108 4.6875,4.65625 0,2.56517 -2.12233,4.6875 -4.6875,4.6875 -2.56517,0 -4.65625,-2.12233 -4.65625,-4.6875 0,-2.56517 2.09107,-4.65625 4.65625,-4.65625 z m 0,2 c -1.48429,0 -2.65625,1.17196 -2.65625,2.65625 0,1.48428 1.17196,2.65625 2.65625,2.65625 1.48428,0 2.6875,-1.17197 2.6875,-2.65625 0,-1.48429 -1.20322,-2.65625 -2.6875,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5940);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45461"
         d="m 587.55515,600.69116 c 2.56517,0 4.6875,2.12234 4.6875,4.6875 0,2.56517 -2.12233,4.65625 -4.6875,4.65625 -2.56517,0 -4.65625,-2.09108 -4.65625,-4.65625 0,-2.56516 2.09108,-4.6875 4.65625,-4.6875 z m 0,2.03125 c -1.48429,0 -2.65625,1.17196 -2.65625,2.65625 0,1.48428 1.17196,2.65625 2.65625,2.65625 1.48428,0 2.6875,-1.17197 2.6875,-2.65625 0,-1.48429 -1.20322,-2.65625 -2.6875,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5938);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45463"
         d="m 588.0864,611.12866 c 2.56517,0 4.6875,2.12233 4.6875,4.6875 0,2.56517 -2.12233,4.65625 -4.6875,4.65625 -2.56517,0 -4.65625,-2.09108 -4.65625,-4.65625 0,-2.56517 2.09107,-4.6875 4.65625,-4.6875 z m 0,2 c -1.48429,0 -2.65625,1.20321 -2.65625,2.6875 0,1.48428 1.17196,2.65625 2.65625,2.65625 1.48428,0 2.65625,-1.17197 2.65625,-2.65625 0,-1.48429 -1.17197,-2.6875 -2.65625,-2.6875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5936);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45465"
         d="m 589.05515,621.90991 c 2.56517,0 4.6875,2.12233 4.6875,4.6875 0,2.56517 -2.12233,4.65625 -4.6875,4.65625 -2.56517,0 -4.65625,-2.09108 -4.65625,-4.65625 0,-2.56517 2.09108,-4.6875 4.65625,-4.6875 z m 0,2.03125 c -1.48429,0 -2.65625,1.17196 -2.65625,2.65625 0,1.48428 1.17196,2.65625 2.65625,2.65625 1.48428,0 2.6875,-1.17197 2.6875,-2.65625 0,-1.48429 -1.20322,-2.65625 -2.6875,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient5934);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.796;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45467"
         d="m 565.7114,620.22241 13.4375,0.4375 -3.25,6.1875 -17.34375,-0.25 7.15625,-6.375 z"
         style="fill:url(#radialGradient5932);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45469"
         d="m 570.68015,609.87866 9.28125,0.0937 -3.46875,7.4375 -16,-0.28125 10.1875,-7.25 z"
         style="fill:url(#radialGradient5930);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45471"
         d="m 576.3364,600.06616 3.25,0.46875 -2.5625,6.34375 -8.75,0.0937 8.0625,-6.90625 z"
         style="fill:url(#radialGradient5928);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect45623"
         d="m 595.9614,608.62866 3.15625,11.78125 -9.53125,2.5625 c -1.19526,-5.34202 -0.33349,-10.31642 6.375,-14.34375 z"
         style="fill:url(#radialGradient5926);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45659"
         d="m 489.6489,573.31616 c 11.59798,0 21,9.40202 21,21 0,5.93091 -2.47632,11.28 -6.4375,15.09375 -1.5368,-1.17901 -3.10332,-2.32691 -4.65625,-3.5 1.65088,-2.99128 2.59375,-6.43636 2.59375,-10.09375 0,-11.37005 -9.02979,-20.6092 -20.3125,-20.96875 2.41997,-0.97317 5.04361,-1.53125 7.8125,-1.53125 z"
         style="fill:url(#radialGradient45667);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45655"
         d="m 494.80515,572.65991 c 11.59798,0 21,9.40202 21,21 0,7.29353 -3.73082,13.7053 -9.375,17.46875 -0.52156,-0.40322 -1.03833,-0.81571 -1.5625,-1.21875 4.52513,-3.84683 7.40625,-9.56454 7.40625,-15.96875 0,-11.54473 -9.31925,-20.91421 -20.84375,-21 1.10254,-0.17877 2.22197,-0.28125 3.375,-0.28125 z"
         style="fill:url(#radialGradient45675);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45702"
         d="m 493.5864,591.65991 c 1.2692,0 2.28125,1.0433 2.28125,2.3125 0,1.2692 -1.01205,2.28125 -2.28125,2.28125 -1.2692,0 -2.3125,-1.01205 -2.3125,-2.28125 0,-1.2692 1.0433,-2.3125 2.3125,-2.3125 z"
         style="fill:url(#radialGradient45754);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45706"
         d="m 489.0864,591.75366 c 1.22039,0 2.1875,0.99836 2.1875,2.21875 0,1.22039 -0.96711,2.1875 -2.1875,2.1875 -1.22039,0 -2.21875,-0.96711 -2.21875,-2.1875 0,-1.22039 0.99836,-2.21875 2.21875,-2.21875 z"
         style="fill:url(#radialGradient45746);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45708"
         d="m 480.2114,583.15991 c 1.41565,0 2.5625,1.14685 2.5625,2.5625 0,1.41565 -1.14685,2.5625 -2.5625,2.5625 -1.41565,0 -2.5625,-1.14685 -2.5625,-2.5625 0,-1.41565 1.14685,-2.5625 2.5625,-2.5625 z"
         style="fill:url(#radialGradient45730);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45710"
         d="m 476.8364,579.94116 c 1.31802,0 2.375,1.08823 2.375,2.40625 0,1.31802 -1.05698,2.375 -2.375,2.375 -1.31802,0 -2.40625,-1.05698 -2.40625,-2.375 0,-1.31802 1.08823,-2.40625 2.40625,-2.40625 z"
         style="fill:url(#radialGradient45738);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45712"
         d="m 441.8989,558.37866 26.59375,10.84375 c -10.49697,-0.85802 -18.0739,-0.79606 -26.59375,-10.84375 z"
         style="fill:url(#radialGradient45722);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45811"
         d="m 1111.4302,577.28491 c 0.9621,2.96684 1.5312,6.43981 1.5312,10.15625 0,7.12689 -2.0388,13.35731 -5.0937,16.8125 -2.0295,-0.77739 -4.0583,-1.54276 -6.125,-2.28125 l -8.125,-11.125 17.8125,-13.5625 z"
         style="opacity:0.82325583;fill:url(#radialGradient45865);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45813"
         d="m 1117.6489,572.53491 c 2.1158,3.60117 3.4375,8.77959 3.4375,14.53125 0,9.32319 -3.5036,17.13526 -8.1875,19.1875 -0.8118,-0.32895 -1.6222,-0.67078 -2.4375,-1 -0.043,-0.017 -0.082,-0.046 -0.125,-0.0625 -0.1653,-0.0664 -0.3341,-0.12254 -0.5,-0.1875 -0.1548,-0.056 -0.3152,-0.0965 -0.4687,-0.15625 3.481,-3.22402 5.875,-9.87491 5.875,-17.59375 0,-4.24266 -0.7419,-8.16087 -1.9688,-11.375 l 1.4063,-1.09375 c 1.4536,3.37265 2.3437,7.6304 2.3437,12.28125 0,6.56806 -1.7395,12.35955 -4.4062,15.9375 3.2531,-3.35726 5.4687,-9.75972 5.4687,-17.15625 0,-4.5029 -0.8129,-8.64983 -2.1875,-11.96875 l 1.75,-1.34375 z"
         style="opacity:0.82325583;fill:url(#radialGradient4613);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45887"
         d="m 1110.3364,540.15991 c 28.7323,24.49073 56.2988,54.37555 78.375,88.375 -6.4048,4.17809 -14.023,5.98637 -22.25,6.625 -20.5018,-14.04974 -41.3958,-24.84256 -64.75,-33.1875 l -12.9687,-17.78125 21.5937,-44.03125 z"
         style="fill:url(#linearGradient45912);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45846"
         d="m 1110.3364,540.15991 c 10.7734,6.90721 62.8301,58.66132 78.375,88.375 l -1.625,0.96875 c -21.872,-36.99099 -46.2365,-60.44092 -76.75,-89.34375 z"
         style="fill:url(#linearGradient45857);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45883"
         d="m 1110.9614,584.90991 c 0.4698,1.8569 0.75,4.04893 0.75,6.375 0,4.46061 -1.0085,8.36869 -2.5,10.53125 -0.9908,-0.48656 -1.9597,-0.9753 -2.9687,-1.4375 l -3.9688,-6.96875 8.6875,-8.5 z"
         style="opacity:0.82325583;fill:url(#linearGradient45910);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45914"
         d="m -464.5074,484.28491 c 5.0434,6.40922 8.8544,25.30006 5.9063,45.4375 -1.8714,12.78342 -6.2737,24.40538 -11.1875,33.4375 0.4364,-24.23536 1.2446,-48.77436 5.875,-76.5 -0.2299,-0.83219 -0.4135,-1.6159 -0.5938,-2.375 z"
         style="opacity:0.82325583;fill:url(#linearGradient45926);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4427"
         d="m -463.4448,513.25366 c 0.406,0.0502 0.8483,0.59269 1.375,1.59375 l 5.7812,12.1875 c 1.1573,2.26102 0.659,2.32809 4.1562,3.3125 1.2404,-0.13685 0.9688,0.4043 0.9688,1.65625 -0.5945,2.05493 0.2241,7.50687 -2.6875,8.09375 -1.3697,0.38426 -2.489,0.14579 -3.75,-0.9375 -3.3298,-2.86042 -5.2038,-8.5505 -7.1875,-14.0625 -0.6809,-3.24635 -0.739,-7.34739 0.2812,-10.59375 0.3033,-0.86341 0.6565,-1.30015 1.0626,-1.25 z"
         style="fill:#999999;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4425"
         d="m -463.0386,514.31616 c 0.3747,0.0463 0.7953,0.51387 1.2812,1.4375 l 5.3126,11.25 c 1.0678,2.08613 0.6169,2.15424 3.8437,3.0625 1.1445,-0.12626 0.875,0.37614 0.875,1.53125 -0.5485,1.89598 0.2177,6.92726 -2.4687,7.46875 -1.2638,0.35454 -2.2742,0.15576 -3.4376,-0.84375 -3.0721,-2.63916 -4.826,-7.88311 -6.6562,-12.96875 -0.6282,-2.99524 -0.6914,-6.81726 0.25,-9.8125 0.2798,-0.79663 0.6253,-1.17127 1,-1.125 z"
         style="fill:url(#linearGradient4436);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46040"
         d="m -182.0698,478.78491 c 53.1062,14.51499 97.737604,31.81145 142.281204,45.125 119.2907,35.65462 -69.167604,-5.23202 -105.000004,-10.5 -30.6669,-3.63607 12.7188,170.5625 12.7188,170.5625 0,0 -41.4219,-160.45315 -75.2813,-185.75 -20.0205,-6.26198 -48.3125,8.125 -48.3125,8.125 0,0 13.3743,-12.57147 14.9375,-13.15625 8.7814,-3.28499 20.8847,-9.34794 58.6563,-14.40625 z"
         style="fill:url(#radialGradient46058);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45756"
         d="m 419.55515,547.84741 c 37.10485,1.43708 130.53367,27.79957 194.78125,40.09375 l 23.6875,16.9375 -34.84375,34.9375 c -56.11183,-27.65144 -57.05752,-7.9742 -85.71875,-17.9375 -40.54601,-33.31189 -99.3125,-70.6875 -99.3125,-70.6875 0,0 0.38042,-3.38348 1.40625,-3.34375 z"
         style="opacity:0.82325583;fill:url(#radialGradient45769);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45781"
         d="m 482.6489,564.65991 127.9375,28.53125 c -47.85531,4.14477 -81.96633,10.15402 -127.9375,-28.53125 z"
         style="fill:url(#radialGradient45783);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46003"
         d="m -295.1324,729.22241 c 1.7956,0 3.3216,1.05223 4.0626,2.5625 l 18.4062,0 3.5,6.03125 -23.9062,0 c -4.6885,0 -6.5479,-1.50787 -6.625,-4.03125 0,-2.514 2.0484,-4.5625 4.5624,-4.5625 z"
         style="fill:#808080;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45985"
         d="m -295.1324,729.22241 c 1.7956,0 3.3216,1.05223 4.0626,2.5625 l 18.4062,0 3.5,6.03125 -23.9062,0 c -4.6885,0 -6.5479,-1.50787 -6.625,-4.03125 0,-2.514 2.0484,-4.5625 4.5624,-4.5625 z"
         style="fill:url(#radialGradient45997);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45979"
         d="m -295.1324,728.72241 c 1.8546,0 3.3764,1.07234 4.25,2.5625 l 18.2188,0 0.2812,0 0.1563,0.25 3.5,6.03125 0.4375,0.75 -0.875,0 -23.9062,0 c -2.3979,0 -4.1244,-0.38052 -5.3126,-1.15625 -1.1881,-0.77573 -1.7702,-1.99371 -1.8124,-3.375 0,-2.7856 2.2769,-5.0625 5.0624,-5.0625 z m 0,1 c -2.2422,0 -4.0624,1.8201 -4.0624,4.0625 0.035,1.14209 0.4108,1.9222 1.3437,2.53125 0.9329,0.60905 2.4906,1 4.7813,1 l 23.0312,0 -2.9062,-5.03125 -18.125,0 -0.3126,0 -0.125,-0.28125 c -0.6617,-1.34897 -2.0246,-2.28125 -3.625,-2.28125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#666666;fill-opacity:1;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path46823"
         d="m -342.3824,593.65991 10.9688,6.25 25.5,84 0,75 -19.3125,5.8125 -4.25,-74.28125 c -2.5664,-39.10669 -7.0791,-70.9836 -12.9063,-96.78125 z"
         style="fill:url(#radialGradient4410);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46154"
         d="m -306.0386,683.53491 0.125,0.375 0,75 -19.3125,5.8125 -4.25,-74.28125 c -0.049,-0.7418 -0.1059,-1.45088 -0.1563,-2.1875 l 23.5938,-4.71875 z"
         style="fill:url(#linearGradient46851);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46010"
         d="m 95.648904,766.03491 -7.8125,48.375 -308.500004,-27.125 c 129.449704,10.494 276.129204,-1.09625 316.312504,-21.25 z"
         style="fill:url(#radialGradient33243);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46214"
         d="m 96.273904,771.37866 c -7.1322,8.65229 -7.9648,23.83821 -10.125,34.78125 l -105.2187,-10.03125 c 41.6133,-4.27862 81.6616,-10.55711 115.3437,-24.75 z"
         style="fill:url(#linearGradient33246);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4657"
         d="m 93.930204,772.90991 c 0.0446,1.26272 -0.3643,2.85811 -1.5,4.90625 l -10.8438,26.21875 c -17.8946,-6.9077 -47.4515,-9.49052 -71,-8.96875 27.8088,-4.04893 62.0726,-8.80296 83.3438,-22.15625 z"
         style="fill:url(#linearGradient33249);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4665"
         d="m 93.336404,769.69116 c 0.853,0.0882 -0.3238,1.88685 -1.3125,4.28125 l -9.5937,23.28125 c -9.8656,-1.49354 -13.5296,-8.23253 -14.6876,-16.375 l 22.9688,-10.125 c 1.4202,-0.78782 2.2373,-1.10261 2.625,-1.0625 z"
         style="fill:url(#radialGradient33262);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46194"
         d="m -81.069796,727.40991 c 75.3310999,14.26731 163.992,28.72476 200.781196,34.625 3.4079,23.35916 10.2816,43.93921 17.9688,63.875 l -385.8438,-40.75 c 108.3272,8.10281 208.461804,17.8706 316.562504,26.0625 8.8483,0.67281 8.9221,-1.83803 13.0625,-9.875 l 10.5938,-24.03125 c 6.5262,-11.76778 -6.1876,-11.75 -6.1876,-11.75 0,0 -113.5069,-18.86189 -170.4374,-27.625 l 3.5,-10.53125 z"
         style="fill:url(#radialGradient33265);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46313"
         d="m 92.398904,768.78491 0.75,1.53125 c -19.2066,9.4584 -43.6253,16.0925 -76.0937,19.5625 25.1324,-3.70621 51.5198,-9.60773 75.3437,-21.09375 z"
         style="fill:url(#radialGradient33268);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46853"
         d="m -338.1324,594.65991 c 0.9909,0.0223 2.3452,0.14724 3.7813,0.53125 2.872,0.76801 4.3376,4.34368 5.6563,8.6875 25.563,76.76221 31.6888,85.13207 27.625,158.125 l -4,-0.125 c 3.7259,-76.59624 -0.8823,-84.4011 -25.4063,-158.34375 -0.8732,-2.87603 -2.8418,-3.94798 -4.9063,-4.5 -0.8451,-0.22601 -2.2728,-0.21115 -3.6562,-0.125 -0.2929,-1.33192 -0.5751,-2.66852 -0.875,-3.96875 l 0.1562,-0.25 c 0,0 0.6343,-0.0537 1.625,-0.0312 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33271);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4566"
         d="m -305.9136,749.50366 c 0.07,2.1665 0,6.69972 0,9.40625 l -16.625,5 c 4.9201,-1.66919 14.9882,-6.04155 16.625,-14.40625 z m -16.8438,14.46875 c -1.4889,0.49452 -2.4687,0.75 -2.4687,0.75 l 2.4687,-0.75 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33274);fill-opacity:1;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4582"
         d="m -306.2574,754.87866 c 0.0281,0.87232 0,2.72274 0,3.8125 l -6.6874,2 c 1.9809,-0.67209 6.0284,-2.44453 6.6874,-5.8125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33277);fill-opacity:1;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4586"
         d="m -333.4448,645.34741 c 7.0625,40.04711 10.9392,86.17767 9.4687,126.65625 0.019,5.18968 19.375,6.75 19.375,6.75 0,0 -19.5025,-1.60814 -19.625,-2.96875 -1.0027,-30.33115 -3.0579,-56.33036 -4.9063,-84.125 -1.0975,-16.72483 -2.5538,-32.1376 -4.3124,-46.3125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33280);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4633"
         d="m 93.836404,773.06616 c 0.347,1.59595 -0.0021,3.75157 -1.6562,6.6875 l -10.2188,22.84375 c -4.001,7.64397 -4.0746,10.01491 -12.625,9.375 -4.2515,-0.42066 -8.4419,-0.8185 -12.6562,-1.21875 3.905,0.30367 7.7907,0.60858 11.7187,0.90625 8.8483,0.67281 8.9221,-1.83803 13.0625,-9.875 l 10.5938,-24 c 1.0197,-1.83872 1.579,-3.41048 1.7812,-4.71875 z m -37.1562,37.6875 c -30.9952,-2.41027 -61.2675001,-5.02882 -91.3126,-7.6875 29.6023999,2.23354 59.9704,4.71094 91.3126,7.6875 z M -247.1011,784.78491 c 73.1165,5.46908 142.0614,12.05877 212.375004,18.28125 C -108.6726,797.48755 -178.0296,793.16051 -247.1011,784.78491 z"
         style="fill:url(#radialGradient33283);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4707"
         d="m -211.3511,784.81616 c 102.8205,7.98398 195.576404,15.72791 290.937504,20.25 -1.8323,3.62703 -3.0925,5.52425 -6.3438,6.0625 -93.21,-7.42462 -189.143504,-17.27932 -284.593704,-26.3125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33286);fill-opacity:1;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="rect4215"
         d="m -325.2261,764.72241 c 5.5062,10.13631 15.6698,12.73597 26.0625,15.0625 l -25.3438,-2.6875 -0.7187,-12.375 z"
         style="opacity:0.82325583;fill:url(#linearGradient4228);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4245"
         d="m -75.038596,363.69116 -97.906204,44.9375 -50.5313,6.40625 c 60.7924,-27.12998 107.6227,-45.52324 148.437504,-51.34375 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4234"
         d="m -80.476096,364.53491 3,0.125 0.0313,0.125 -3.2813,1.5 -2.4063,-0.0937 -1.2187,1.71875 -1.25,-0.0937 1.9375,-2.75 c 1.0621,-0.19256 2.1338,-0.35476 3.1875,-0.53125 z m -12.125,2.3125 0.4063,0.65625 -1.0938,-0.0312 -0.25,-0.40625 c 0.3147,-0.0696 0.6236,-0.15047 0.9375,-0.21875 z m 0.5937,0.6875 6.2188,0.3125 0.375,0.59375 -2.3125,1.0625 -4.2187,-0.21875 -1.2188,1.71875 -1.25,-0.0312 2.4062,-3.4375 z m -10.000004,1.53125 1,1.5625 -1.125,-0.0312 -0.8124,-1.3125 c 0.3123,-0.0796 0.626,-0.14032 0.9374,-0.21875 z m 1.1876,1.59375 6.218704,0.28125 0.8437,1.34375 -0.9687,0.4375 -6.031304,-0.3125 -1.25,1.75 -1.25,-0.0625 2.4376,-3.4375 z m -10.4376,0.875 1.4376,2.25 -1.125,-0.0625 -1.1563,-1.84375 -0.3125,-0.0312 c 0.3835,-0.10933 0.774,-0.20484 1.1562,-0.3125 z m 1.5938,2.21875 6.2188,0.28125 1.3124,2.09375 -0.8437,0.375 -0.4063,-0.6875 -6.2187,-0.25 -1.2187,1.6875 -1.2813,-0.0625 2.4375,-3.4375 z m -10.6875,0.46875 1.6875,2.65625 -1.125,-0.0625 -1.1562,-1.8125 -1.7188,-0.0625 c 0.7771,-0.24378 1.5404,-0.48129 2.3125,-0.71875 z m 1.8437,2.6875 6.2188,0.28125 1.75,2.78125 -0.8125,0.375 -0.875,-1.375 -6.2187,-0.3125 -1.2188,1.71875 -1.25,-0.0625 2.4062,-3.40625 z m -10.8437,0.1875 1.8437,2.9375 -1.125,-0.0625 -1.125,-1.8125 -2.4062,-0.125 c 0.9491,-0.31976 1.8709,-0.62647 2.8125,-0.9375 z m 2.0625,2.9375 6.1562,0.28125 2.25,3.5 -0.3124,0.125 -0.7188,-0.0312 -1.1562,-1.8125 -6.2188,-0.3125 -1.2188,1.71875 -1.25,-0.0625 2.4688,-3.40625 z m -10.9375,0.0937 1.9063,3.03125 -1.125,-0.0625 -1.1563,-1.84375 -2.5625,-0.125 c 0.9892,-0.35229 1.9565,-0.65653 2.9375,-1 z m 2.0625,3 6.2188,0.3125 2.3124,3.65625 -1.125,-0.0625 -1.125,-1.84375 -6.2187,-0.25 -1.2187,1.6875 -1.2813,-0.0625 2.4375,-3.4375 z m -10.875,0.15625 1.875,2.96875 -1.125,-0.0625 -1.1562,-1.8125 -2.2813,-0.0937 c 0.9049,-0.33682 1.7894,-0.67007 2.6875,-1 z m 2.0625,3 6.2187,0.28125 2.3126,3.625 -1.125,-0.0625 -1.125,-1.8125 -6.2188,-0.28125 -1.2188,1.6875 -1.2812,0 2.4375,-3.4375 z m -10.8125,0.28125 1.7812,2.8125 -1.125,-0.0312 -1.125,-1.84375 -1.7812,-0.0937 c 0.7545,-0.29119 1.5002,-0.55704 2.25,-0.84375 z m 28.3438,0.53125 1.2812,0.0625 -1.9688,0.90625 0.6876,-0.96875 z m -26.3438,2.3125 6.1875,0.28125 2.3437,3.65625 -1.1562,-0.0937 -1.1562,-1.78125 -6.1876,-0.28125 -1.25,1.6875 -1.25,-0.0625 2.4688,-3.40625 z m -10.6875,0.53125 1.6563,2.5625 -1.125,-0.0625 -1.1563,-1.78125 -1.0313,-0.0625 c 0.5524,-0.2196 1.1065,-0.4389 1.6563,-0.65625 z m 28.2187,0.28125 3.0938,0.15625 -4.8125,2.1875 1.7187,-2.34375 z m -26.375,2.3125 6.1876,0.28125 2.3124,3.65625 -1.125,-0.0625 -1.125,-1.84375 -6.1874,-0.28125 -1.25,1.6875 -1.2813,-0.0312 2.4687,-3.40625 z m 17.5313,0.8125 4.9687,0.21875 -3.4687,1.59375 -1.4375,-0.0625 -0.7812,1.09375 -1.3438,0.59375 -0.375,0 2.4375,-3.4375 z m -27.9687,0.0625 1.4062,2.21875 -1.0938,-0.0312 -1.1874,-1.84375 c 0.2885,-0.11764 0.587,-0.22669 0.875,-0.34375 z m 1.5937,2.21875 6.1875,0.28125 2.3438,3.65625 -1.125,-0.0625 -1.1563,-1.8125 -6.1875,-0.28125 -1.25,1.71875 -1.25,-0.0625 2.4375,-3.4375 z m 17.5625,0.8125 6.1875,0.3125 0.1563,0.25 -3.0626,1.40625 -3.25,-0.15625 -1.2187,1.6875 -1.25,-0.0625 2.4375,-3.4375 z m -27.75,0.46875 1.1875,1.84375 -1.0937,-0.0625 -0.9063,-1.4375 c 0.2691,-0.11223 0.544,-0.23198 0.8125,-0.34375 z m 1.375,1.84375 6.1875,0.28125 2.3125,3.65625 -1.125,0 -1.1562,-1.84375 -6.1876,-0.3125 -1.2187,1.71875 -1.2813,-0.0937 2.4688,-3.40625 z m 17.5312,0.8125 6.1876,0.3125 0.625,0.96875 -1.6876,0.75 -5.0624,-0.21875 -1.25,1.6875 -1.2813,-0.0937 2.4687,-3.40625 z m -27.4062,0.9375 0.8438,1.34375 -1.125,-0.0312 -0.625,-0.9375 c 0.302,-0.12846 0.6048,-0.24709 0.9062,-0.375 z m 1.0312,1.40625 6.1876,0.28125 2.3437,3.65625 -1.0937,-0.0625 -1.1876,-1.84375 -6.1874,-0.28125 -1.2188,1.71875 -1.2812,-0.0937 2.4374,-3.375 z m 17.5313,0.8125 6.2187,0.28125 1.0626,1.6875 -0.8438,0.375 -0.1875,-0.28125 -6.1875,-0.3125 -1.25,1.6875 -1.25,-0.0312 2.4375,-3.40625 z m -27.0937,1.4375 0.5312,0.84375 -1.0938,-0.0312 -0.2812,-0.4375 c 0.2852,-0.12326 0.559,-0.2522 0.8438,-0.375 z m 0.7187,0.84375 6.2187,0.28125 2.3126,3.65625 -1.0938,-0.0625 -1.1562,-1.78125 -6.2188,-0.34375 -1.2188,1.75 -1.2812,-0.0625 2.4375,-3.4375 z m 17.5625,0.8125 6.1875,0.28125 1.5313,2.4375 -0.2188,0.0937 -0.7188,0.0937 -0.5624,-0.84375 -6.1876,-0.28125 -1.2187,1.71875 -1.2813,-0.0625 2.4688,-3.4375 z m -26.7812,2.03125 0.1874,0.28125 -0.75,-0.0312 c 0.189,-0.0827 0.374,-0.16751 0.5626,-0.25 z m 0.4062,0.28125 6.1875,0.28125 2.2187,3.4375 -1,0.125 -1.1562,-1.78125 -6.2188,-0.28125 -1.1874,1.6875 -1.3126,-0.0625 2.4688,-3.40625 z m 17.5625,0.8125 6.1563,0.3125 0.4062,0.625 -7.9688,1 1.4063,-1.9375 z m -25.875,2.375 5.6875,0.21875 1,1.59375 -1.3438,0.15625 -5.8124,-0.25 -0.8126,1.09375 -1.4687,0.1875 1.9375,-2.625 c 0.2709,-0.11989 0.5422,-0.25548 0.8125,-0.375 z m -6.2187,3.21875 1.3437,0.0625 -1.3125,0.15625 c -0.014,-0.0714 -0.0173,-0.14672 -0.0312,-0.21875 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4387"
         d="m 240.8052,643.06616 22.375,0.65625 1.4062,5.125 -21.9062,-1.40625 c -7.926,16.73958 -9.497,33.47917 -12.375,50.21875 -0.151,5.07974 -1.3446,10.78186 1.4374,13.90625 l -7.0937,-0.3125 -1.625,13.625 -11.375,6 -1.1875,-3.96875 6.0625,-6.8125 2.8125,-16.4375 -6.6875,-17.75 c 3.0058,5.36336 11.5024,16.43202 14.9063,9 2.2854,-17.94912 6.461,-35.20752 13.25,-51.84375 z"
         style="fill:#888888;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4467"
         d="m 215.7739,591.44116 c 2.5817,0.0562 5.2647,0.3917 8,1.03125 5.2903,1.37273 10.3842,3.97189 15.2187,7.65625 -4.8982,-2.13804 -10.2243,-1.65167 -15.2187,-3.25 -33.539,-10.73336 -66.8639,55.94534 -67.9687,125.75 -0.0209,-1.28211 -0.0632,-2.55231 -0.0626,-3.84375 0.0241,-65.42906 21.3064,-128.18706 60.0313,-127.34375 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4447"
         d="m 223.8052,709.12866 6.9687,0.84375 1.9375,3.1875 c -0.2946,0.44195 0.3771,-0.59109 0.4062,2.03125 0.6497,0.70766 1.3262,1.3401 1.9688,2 l 1.2188,5.1875 -6.5313,14.75 -7.2813,-10.78125 1.3126,-17.21875 z"
         style="fill:#554400;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4393"
         d="m 200.3676,601.47241 c 3.133,-0.009 1.8526,1.40232 2.3438,6.03125 -4.4347,5.31484 -12.7224,12.46202 -12.5625,21.5625 l -8.9063,-0.25 c 3.3351,-10.55472 7.6645,-22.88927 14.2813,-26.90625 2.2562,-0.25431 3.7994,-0.43459 4.8437,-0.4375 z"
         style="fill:#232323;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4395"
         d="m 181.2426,628.81616 15.625,0.4375 18.5313,38.875 -2.875,7.34375 -6.7813,0.78125 -24.5,-47.4375 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4398"
         d="m 246.8989,637.03491 13.4375,0.15625 2.8438,6.5625 -22.375,-0.6875 6.0937,-6.03125 z"
         style="fill:#999999;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4403"
         d="m 1118.2427,600.34741 c 1.143,0.0817 2.4675,1.07612 3.3437,2.59375 1.1683,2.02351 1.1085,4.23853 -0.1562,4.96875 -1.2648,0.73022 -3.238,-0.32024 -4.4063,-2.34375 -1.1683,-2.0235 -1.1085,-4.23853 0.1563,-4.96875 0.3161,-0.18255 0.6814,-0.27722 1.0625,-0.25 z"
         style="fill:url(#radialGradient4412);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4414"
         d="m 1105.4927,594.15991 c 0.9996,0.0714 2.14,0.9228 2.9062,2.25 1.0217,1.76962 0.9811,3.70516 -0.125,4.34375 -1.1061,0.6386 -2.8533,-0.26164 -3.875,-2.03125 -1.0217,-1.7696 -0.9498,-3.73641 0.1563,-4.375 0.2765,-0.15965 0.6042,-0.2113 0.9375,-0.1875 z"
         style="fill:url(#radialGradient4416);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4418"
         d="m 1099.9302,588.72241 c 1.0671,0.0762 2.3069,0.98937 3.125,2.40625 1.0907,1.88919 0.9933,3.97451 -0.1875,4.65625 -1.1809,0.68175 -3.0031,-0.29834 -4.0938,-2.1875 -1.0907,-1.88918 -1.0246,-3.9745 0.1563,-4.65625 0.2952,-0.17044 0.6442,-0.24416 1,-0.21875 z"
         style="fill:url(#radialGradient4420);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4422"
         d="m 1109.8364,586.34741 c 1.353,0 2.4375,2.44843 2.4375,5.46875 0,3.02032 -1.0845,5.46875 -2.4375,5.46875 -1.353,0 -2.4687,-2.44843 -2.4687,-5.46875 0,-3.02032 1.1157,-5.46875 2.4687,-5.46875 z"
         style="fill:url(#radialGradient4433);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4435"
         d="m 504.3364,586.75366 c 3.09031,0 5.59375,4.03103 5.59375,9.03125 0,5.00022 -2.50344,9.0625 -5.59375,9.0625 -3.09031,0 -5.625,-4.06228 -5.625,-9.0625 0,-5.00022 2.53469,-9.03125 5.625,-9.03125 z"
         style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4232"
         d="m 226.5864,749.90991 c 5.2198,3.16375 11.9262,5.36997 15.4375,10.40625 l -8.9375,11.09375 -6.75,42 c 6.7976,10.1594 17.6959,10.11438 25.5,9.40625 l -17.75,16.6875 -20.25,-21.84375 -1.625,-36.625 7.1875,-24.1875 7.1875,-6.9375 z"
         style="fill:url(#radialGradient4564);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4248"
         d="m 201.4614,703.65991 c 1.3353,0.002 2.7446,0.1848 4.1875,0.5625 5.7716,1.5108 9.7098,5.60917 8.7813,9.15625 -0.9286,3.5471 -6.3535,5.1983 -12.125,3.6875 -5.7716,-1.5108 -9.7098,-5.60915 -8.7813,-9.15625 0.6964,-2.66031 3.9315,-4.25683 7.9375,-4.25 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4251"
         d="m 211.4302,679.53491 c 1.5655,-0.0661 4.9845,2.35398 8.5,6.15625 4.3266,4.67972 7.1845,9.70475 6.4062,11.25 -0.7783,1.54526 -4.9233,-0.97657 -9.25,-5.65625 -4.3267,-4.67972 -7.1846,-9.736 -6.4062,-11.28125 0.1459,-0.28974 0.3887,-0.45349 0.75,-0.46875 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4255"
         d="m 165.9302,650.28491 c 11.6082,16.38131 22.1009,36.17849 34.8437,49.15625 -5.2476,-0.62419 -8.2669,1.83079 -10.1875,5.78125 1.9936,-8.58773 -24.6562,-54.9375 -24.6562,-54.9375 z m 24.6562,54.9375 c -0.09,0.38763 -0.2257,0.71148 -0.4375,0.9375 0.1359,-0.3224 0.2891,-0.63229 0.4375,-0.9375 z"
         style="fill:#333333;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4257"
         d="m 139.7739,709.90991 c 0.416,0.0574 0.8466,0.3474 1.2187,0.9375 l 12.9688,19 36.125,-17.4375 -37.25,22.5 -14.7188,-23.59375 c 0.303,-0.93625 0.963,-1.50185 1.6563,-1.40625 z"
         style="fill:#b3b3b3;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4276"
         d="m 247.8989,648.12866 c 1.4092,0.002 3.244,0.038 5.7187,0.0312 -19.6228,74.86553 3.6274,36.48022 6.875,46.09375 1.3321,3.94299 6.2659,18.71333 3.9063,22.71875 -7.735,18.7982 -7.3384,16.74765 -28.7187,-5.09375 -9.1058,-14.12021 2.1848,-49.97043 6.0937,-60.8125 1.5843,-2.64618 1.8975,-2.94395 6.125,-2.9375 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4282"
         d="m 277.3989,699.81616 0.5625,27.78125 -16.375,13.71875 -27.4062,-20.15625 -1.5938,-6.34375 16.5938,13.9375 6.4062,0.65625 2.6562,-2.125 19.1563,-27.46875 z"
         style="fill:#999999;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4284"
         d="m 235.3989,722.00366 26.1875,19.3125 -15.75,-8.40625 -0.1875,7.1875 -11.2813,-4.28125 -11,7.78125 c 2.7538,-5.8883 1.6957,-11.58639 -6.25,-12.5625 l 5.9376,-6.15625 6.5937,10.15625 5.75,-13.03125 z"
         style="fill:#666666;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4335"
         d="m 147.6176,738.81616 c 0,0 1.6602,24.41559 5.9376,35.6875 3.834,8.3406 6.5845,18.16574 10.2812,24.34375 11.804,-0.73703 0.6895,4.24089 4.1875,8.34375 6.5497,12.17912 13.5032,23.11618 22.7813,34.15625 8.6625,6.39572 22.2106,6.41869 32.8437,5.34375 -13.5334,6.47689 -34.088,5.3753 -43.8125,-5.90625 -36.7234,-42.60365 -32.213,-70.56194 -32.2188,-101.96875 z"
         style="fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4272"
         d="m 195.0864,748.90991 5,8.5 -17.25,9.65625 c -4.0549,7.26076 -1.41,18.5771 -3.4062,28.59375 -5.9502,-7.10523 -5.0102,0.26586 -6.375,1.75 -1.8493,2.39612 -5.5851,2.1926 -8.875,2.59375 l -3.5313,-31.625 34.4375,-19.46875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4366"
         d="m 195.0864,748.90991 5,8.5 c 0,0 -16.3389,4.82915 -14.8438,-2.9375 l 9.8438,-5.5625 z"
         style="fill:url(#linearGradient4374);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4315"
         d="m 223.0552,724.87866 -3.9688,5.03125 -60.2812,34.21875 9.7812,-10.59375 54.4688,-28.65625 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4460"
         d="m 220.5239,833.84741 c -7.2679,9.4484 -22.0558,9.20839 -35.625,10.5625 l 5.4375,-5.0625 30.1875,-5.5 z"
         style="fill:#333333;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4308"
         d="m 218.4614,585.56616 5.9375,1.1875 c 6.8783,3.95512 12.2341,10.27616 18.1563,15.71875 l -7.3438,3.5625 c -6.3321,-4.62374 -11.3676,-11.23287 -16.3125,-17.9375 l -0.0937,0 -0.3438,-2.53125 z"
         style="fill:#4d4d4d;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4390"
         d="m 210.0552,579.40991 c 38.6839,0 70.0624,62.72558 70.0624,140.09375 0,77.36817 -31.3785,140.09375 -70.0624,140.09375 -1.3473,0 -2.6717,-0.0999 -4,-0.25 36.8195,-4.1533 66.0624,-65.16536 66.0624,-139.84375 0,-74.67839 -29.2429,-135.69045 -66.0624,-139.84375 1.3283,-0.15012 2.6527,-0.25 4,-0.25 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4264"
         d="m 209.0864,817.97241 c 2.508,0.28259 1.0206,3.78422 -0.4375,4.9375 l -15.875,16 -7.875,5.5 c -4.743,-0.0633 -3.5402,-2.04137 -3.3125,-2.78125 l 14.25,-22.96875 12.6875,-0.6875 c 0.2041,-0.0113 0.3953,-0.0188 0.5625,0 z"
         style="fill:#555555;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4438"
         d="m 224.6802,710.53491 6.2812,0.46875 1.3438,1.59375 c -0.2506,0.38687 0.2564,-0.10798 0.2812,2.1875 0.5527,0.61947 1.1096,1.17234 1.6562,1.75 l 1.0313,4.5625 -5.5313,12.90625 -6.2187,-9.4375 1.1563,-14.03125 z"
         style="fill:#806600;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4382"
         d="m 208.0552,579.40991 c 38.6838,0 70.0625,62.72558 70.0624,140.09375 0,77.36817 -31.3786,140.09375 -70.0624,140.09375 38.1069,-1.33579 68.8125,-63.56181 68.8124,-140.09375 0,-76.82642 -30.9396,-139.2238 -69.25,-140.09375 0.146,-0.002 0.2916,0 0.4376,0 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4317"
         d="m 216.4926,720.09741 -6.0312,6.8125 -41.875,18.125 0,8.5 -7.4688,9.28125 0.0626,-17.78125 39.75,-24.21875 15.5624,-0.71875 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4267"
         d="m 197.5864,753.15991 2.5,4.25 6.75,-3.25 5.375,26.875 1.625,36.625 -18,1 1.75,-65.5 z"
         style="fill:#171717;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4351"
         d="m 176.5552,794.47241 c 0.4335,0.0171 0.7813,0.61743 1.1874,0.8125 2.8281,12.22848 9.6636,18.38931 16.5938,24.875 l -0.875,2.875 c -1.6614,-2.00446 -16.3839,-14.30345 -16.9375,-28.09375 0.1788,-0.31151 0.1029,-0.43061 0.0313,-0.46875 z m -3.5,2.9375 c 0.2868,0.0354 0.6389,0.37458 1.0937,1.25 3.8015,12.89414 12.3732,21.73076 19.0625,25.53125 l -2,3.0625 c -8.4794,-7.12947 -16.3016,-18.09966 -19.3125,-28.59375 0.3608,-0.52743 0.6782,-1.30908 1.1563,-1.25 z"
         style="fill:url(#radialGradient4423);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4274"
         d="m 193.0552,748.50366 c 0.7608,0.0335 1.4608,0.15363 2.0312,0.40625 l -34.4375,19.46875 c -1.2607,13.68219 0.2892,24.323 5.625,30.9375 l -6.8437,3.4375 c -2.7765,3.10474 -6.8789,5.62995 -5.3126,-4.5625 l 4.6876,-34.40625 c 11.303,-6.33617 26.8954,-15.60554 34.25,-15.28125 z"
         style="fill:#4d4d4d;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4432"
         d="m 245.8989,732.53491 c 17.9239,9.59011 15.6892,8.77341 25.9063,0.21875 l -0.0626,1.09375 c -8.9498,11.94198 -11.5228,8.24225 -25.125,0.9375 15.7427,16.51531 25.2612,22.64117 19,43.65625 l -5.4687,-21.03125 -25.8125,-21.5625 11.3125,4.28125 0.25,-7.59375 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4442"
         d="m 271.5239,701.40991 0.3437,6.34375 -14.1562,20.3125 c -2.0995,3.00788 -2.7075,3.39017 -2.125,1.34375 l 15.9375,-28 z"
         style="fill:#4d4d4d;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4444"
         d="m 234.3676,735.81616 c 3.4213,1.5357 0.6912,7.33915 -3.3437,12.6875 11.9401,7.58656 19.4815,13.47079 19.25,16.3125 -5.1335,-1.20471 -13.7815,-9.45866 -21.375,-13.71875 -4.8852,-1.08416 -10.399,9.66767 -9.4687,5.71875 1.2206,-2.81018 -0.034,-2.86112 14.9374,-21 z"
         style="fill:#808080;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4449"
         d="m 260.1489,757.40991 5.4687,21.03125 -2.9374,11.25 -7.5,-22.90625 c -1.532,-4.5482 1.2317,-6.3294 4.9687,-9.375 z"
         style="fill:#838383;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4493"
         d="m 209.9614,821.40991 10.5625,12.4375 -27.75,5.0625 17.1875,-17.5 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4511"
         d="m 223.3052,736.37866 c 1.5787,2.72816 -7.3861,29.76936 -11.0938,44.65625 l -5.375,-26.875 16.4688,-17.78125 z"
         style="fill:#b3b3b3;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4522"
         d="m 234.3676,735.84741 -14.9374,20.96875 3.9374,-13.21875 11,-7.75 z"
         style="fill:#4d4d4d;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect4527"
         d="m 457.61765,368.75366 c 6.76887,-0.27688 12.38591,4.18418 12.59375,10 l 0.0625,1.4375 c 0.20784,5.81582 -5.07872,10.14131 -11.84375,10.5 l -41.28125,2.1875 c -6.76503,0.35867 -12.38591,-4.18419 -12.59375,-10 l -0.0625,-1.4375 c -0.20784,-5.81582 5.07488,-10.72311 11.84375,-11 l 41.28125,-1.6875 z"
         style="fill:url(#linearGradient4549);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4531"
         d="m 405.8364,373.44116 c 2.73367,0 4.9375,2.23508 4.9375,4.96875 0,2.73367 -2.20383,4.9375 -4.9375,4.9375 -2.73367,0 -4.96875,-2.20383 -4.96875,-4.9375 0,-2.73367 2.23508,-4.96875 4.96875,-4.96875 z"
         style="opacity:0.2;fill:url(#radialGradient4539);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4613"
         d="m 252.7426,416.03491 c 16.05,0 30.3369,7.55578 39.5313,19.28125 -0.1587,-3.4e-4 -0.3097,1.9e-4 -0.4687,0 -5.737,-0.007 -11.719,0.0965 -17.9376,0.28125 -5.9494,-4.28472 -13.2372,-6.8125 -21.125,-6.8125 -5.0235,0 -9.8091,1.02425 -14.1562,2.875 -2.5253,-3.55088 -5.1237,-7.05612 -7.75,-10.5625 6.6235,-3.22373 14.0436,-5.0625 21.9062,-5.0625 z"
         style="fill:#242424;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4622"
         d="m 252.7426,418.53491 c 14.5429,0 27.5588,6.51568 36.3126,16.78125 -0.8756,0.003 -1.7388,0.0236 -2.625,0.0312 -8.3584,-9.10732 -20.3573,-14.8125 -33.6876,-14.8125 -6.846,0 -13.328,1.51965 -19.1562,4.21875 -0.4011,-0.54513 -0.815,-1.08093 -1.2188,-1.625 6.1785,-2.92628 13.0839,-4.59375 20.375,-4.59375 z"
         style="fill:url(#linearGradient4745);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4631"
         d="m 252.7426,426.97241 c 9.2272,0 17.7023,3.2051 24.4063,8.53125 -0.875,0.0214 -1.7399,0.0371 -2.625,0.0625 -6.1506,-4.37204 -13.6669,-6.96875 -21.7813,-6.96875 -5.0778,0 -9.9252,1.01956 -14.3437,2.84375 -0.3257,-0.45737 -0.6415,-0.91837 -0.9687,-1.375 4.708,-1.9989 9.8746,-3.09375 15.3124,-3.09375 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4634"
         d="m 252.7426,415.65991 c 16.294,0 30.7779,7.69407 40.0313,19.65625 -0.3272,-0.001 -0.64,4e-4 -0.9687,0 -0.319,-3.9e-4 -0.6484,-1.9e-4 -0.9688,0 -9.0016,-11.06936 -22.714,-18.15625 -38.0938,-18.15625 -7.6108,0 -14.824,1.72112 -21.25,4.8125 -0.3027,-0.40623 -0.6019,-0.81311 -0.9062,-1.21875 6.6865,-3.26319 14.2119,-5.09375 22.1562,-5.09375 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4667"
         d="m 294.1489,436.37866 c 77.395,0.0913 110.80231,17.69375 145.4375,43.15625 -57.16006,-5.62823 -113.4992,-7.89647 -169.1562,-3.75 -7.0919,-12.84305 -14.9225,-25.38867 -23.4063,-37.65625 17.3502,-1.21191 32.9867,-1.76667 47.125,-1.75 z"
         style="fill:#333333;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect4696"
         d="m 442.55515,360.53491 c 3.13389,0 5.65625,4.21517 5.65625,9.4375 l 0,10.5 c 0,5.22232 -2.52236,9.40625 -5.65625,9.40625 -3.1339,0 -5.65625,-4.18393 -5.65625,-9.40625 l 0,-10.5 c 0,-5.22233 2.52235,-9.4375 5.65625,-9.4375 z"
         style="fill:#333333;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4702"
         d="m 443.18015,360.53491 c 0.31549,0 0.60351,0.0581 0.90625,0.125 -3.01867,0.68902 -5.3125,4.57976 -5.3125,9.3125 l 0,10.46875 c 0,4.73273 2.29383,8.62348 5.3125,9.3125 -0.30274,0.0669 -0.59076,0.125 -0.90625,0.125 -3.47667,0 -6.28125,-4.21518 -6.28125,-9.4375 l 0,-10.46875 c 0,-5.22233 2.80458,-9.4375 6.28125,-9.4375 z"
         style="fill:#161616;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="rect4698"
         d="m 443.1489,360.00366 c 3.66558,0 6.625,1.05196 6.625,2.375 l 0,2.65625 c 0,1.32304 -2.95942,2.40625 -6.625,2.40625 -3.66557,0 -6.59375,-1.08321 -6.59375,-2.40625 l 0,-2.65625 c 0,-1.32304 2.92818,-2.375 6.59375,-2.375 z"
         style="fill:url(#linearGradient4713);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4265"
         d="m 231.7426,711.94116 2.0938,9.25 -4.1875,9.84375 -4.7187,-7.1875 1.0624,-11 5.75,-0.90625 z"
         style="fill:url(#linearGradient4273);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4283"
         d="m 247.1489,735.53491 2.5937,3.6875 c -5.6297,0.53963 -3.6613,2.70153 -2.5,7.40625 l -12.875,-10.75 12.7813,-0.34375 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4287"
         d="m 165.9302,650.28491 4.3124,7.65625 -6.6562,2.65625 -17.3438,-7 19.6876,-3.3125 z"
         style="fill:url(#linearGradient4295);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4305"
         d="m 218.4614,585.56616 c 8.0104,43.61365 5.724,38.96479 19.7812,41.71875 l -13.7812,-0.875 -6,-40.84375 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4330"
         d="m 235.2114,606.03491 c 3.9572,6.9697 7.3284,4.18082 12.1562,6.71875 2.3279,1.22366 3.4479,5.31557 4.1563,7.625 -2.578,6.06652 -16.8223,17.9774 -4.625,16.65625 -2.2146,1.94721 -5.3736,3.48624 -6.0937,6.03125 -4.6409,5.6793 -4.3956,11.3832 -6.375,17.0625 l 3.8124,-32.84375 -3.0312,-21.25 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4405"
         d="m 197.4926,755.81616 4.3438,1.3125 -4.8438,18.09375 0.5,-19.40625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4411"
         d="m 207.7426,776.78491 c 1.1398,-0.16774 2.7014,1.21339 4.7188,4.21875 l -0.4062,36.75 -3.625,0.1875 -9.375,0.84375 c 8.3574,-1.71624 5.3139,-41.14188 8.6874,-42 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4348"
         d="m 219.4302,757.19116 c -1.6821,15.50625 -3.6784,28.55227 -5.1563,42.875 -0.6741,6.53269 0.3655,12.14458 -1.6875,19.65625 -2.6965,-3.90828 -0.8945,-22.60444 -0.375,-38.6875 l 7.2188,-23.84375 z"
         style="fill:#131313;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4286"
         d="m 213.7739,815.72241 c 0.7947,0.043 1.7766,0.62222 2.9063,1.96875 l 18.4062,19.75 c 1.0819,1.31742 -0.1671,3.50364 -2.1562,5.53125 l 7.0624,-5.71875 c -2.3103,3.00015 -4.3966,6.1161 -7.6562,8.5625 l -18.3438,-19.96875 c -3.5227,-3.52271 -3.0568,-10.27868 -0.2187,-10.125 z"
         style="fill:#222222;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4228"
         d="m 214.9302,816.22241 c 0.2286,0.068 0.5187,0.25655 0.9374,0.625 l 19.2188,20.59375 c 0.013,0.51755 3.1934,-2.51869 3.2812,-1.96875 0.089,0.55681 -3.8355,3.94201 -4.2812,4.03125 l -19.375,-20.875 c -0.3799,-1.58098 -0.4672,-2.61013 0.2188,-2.40625 z"
         style="fill:#a9a9a9;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4450"
         d="m 197.9926,820.03491 -15.875,20.625 c 5.2323,-10.47775 10.0911,-19.51438 12.6876,-20.4375 l 3.1874,-0.1875 z"
         style="fill:#999999;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4479"
         d="m 138.0239,719.53491 9.3125,14.71875 c 0.8376,26.47482 -0.7415,44.92301 4.3125,69 -7.8469,-21.0171 -12.7692,-46.5906 -13.6875,-74.375 0.0478,-2.90719 -0.0352,-6.4173 0.0625,-9.34375 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4512"
         d="m 163.5864,651.40991 c 0.722,0.007 1.216,0.24722 1.875,0.90625 0.1237,0.1801 0.2515,0.3815 0.375,0.5625 -0.4105,1.23531 -0.8395,2.48342 -1.25,3.71875 -1.5325,4.75716 -3.456,3.26474 -4.6875,1.625 -1.4697,-1.86937 -2.5095,-3.92511 -2.5,-5.84375 l 4.5313,-0.75 c 0.7093,-0.1191 1.2229,-0.22286 1.6562,-0.21875 z"
         style="fill:#111111;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4514"
         d="m 251.4614,638.25366 c 0.7407,-0.002 1.7375,0.12262 3.1875,0.4375 1.9736,0.42861 3.8427,1.37789 5.5,2.53125 0.2745,0.81226 0.5463,1.61323 0.8125,2.4375 l -20.1562,-0.59375 c 9.0956,-2.18976 7.4465,-4.80481 10.6562,-4.8125 z"
         style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4523"
         d="m 222.8052,588.25366 c 5.4694,3.93128 15.2462,11.35247 15.375,13.03125 -0.3472,7.24966 -8.1241,-6.35426 -15.375,-13.03125 z"
         style="fill:#333333;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4495"
         d="m 218.8989,588.09741 c 3.9746,5.54602 14.9467,11.54149 16.3125,17.90625 l 3.0312,21.28125 c -13.7434,-2.69249 -11.9485,1.37351 -19.3437,-39.1875 z"
         style="fill:#b3b3b3;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4537"
         d="m 234.3676,735.81616 c 22.0193,14.73166 22.2562,18.34018 25.8126,21.59375 -3.3695,1.82665 -5.4089,5.07894 -8.1876,6.96875 -1.4525,0.5913 -2.3178,0.12468 -3.0312,-0.625 l -20.8125,-17.0625 c -3.4325,4.5811 -10.3355,17.1152 -8.7187,10.125 1.2206,-2.81018 -0.034,-2.86112 14.9374,-21 z"
         style="fill:#aaaaab;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4373"
         d="m 171.1489,636.84741 c 4.2177,0.004 7.6928,2.21268 9.6875,7.625 3.0527,8.92448 7.5303,15.26489 11.375,22.375 6.2653,11.58636 10.689,21.50917 18.4062,32.9375 l -9.8437,-0.34375 c -12.5783,-12.30808 -20.808,-30.87501 -31.9063,-47.03125 -1.2541,-1.2541 -2.1879,-1.94024 -4.4374,-1.5625 -6.7103,1.84734 -9.819,1.44043 -14.7188,2.15625 -3.2934,0.50137 -3.6912,-1.46508 -2.875,-2.28125 8.1263,-7.74581 17.283,-13.88153 24.3125,-13.875 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4396"
         d="m 185.9302,588.03491 0,3.5 c -16.1341,10.76272 -29.7135,32.38029 -38.4688,60.40625 l -1.125,0.28125 c 8.6938,-29.86662 22.7431,-52.94799 39.5938,-64.1875 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4262"
         d="m 171.1489,636.84741 c 4.2177,0.004 7.6928,2.21268 9.6875,7.625 3.0527,8.92448 7.5303,15.26489 11.375,22.375 6.2653,11.58636 10.689,21.50917 18.4062,32.9375 l -9.8437,-0.34375 c -12.5783,-12.30808 -20.808,-30.87501 -31.9063,-47.03125 -1.2541,-1.2541 -2.1879,-1.94024 -4.4374,-1.5625 -6.7103,1.84734 -9.819,1.44043 -14.7188,2.15625 -3.2934,0.50137 -3.6912,-1.46508 -2.875,-2.28125 8.1263,-7.74581 17.283,-13.88153 24.3125,-13.875 z"
         style="fill:url(#radialGradient4371);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4331"
         d="m 233.8052,716.00366 c 0.083,0.0538 0.3368,0.36835 0.8124,1 5.2442,4.41987 16.1885,13.48629 19.9063,17.3125 0.8535,0.87834 0.895,1.08524 -0.5,0.65625 -12.1895,-6.89245 -20.8002,-19.34518 -20.2187,-18.96875 z"
         style="fill:#4d4d4d;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4623"
         d="m 105.1489,747.47241 17.1875,5 0.0312,5.21875 -16.3437,-3.03125 -0.875,-7.1875 z"
         style="fill:url(#linearGradient4642);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4675"
         d="m 58.586404,784.06616 c 2.47,-0.003 1.9618,2.56972 2.625,4.90625 -0.5654,4.56324 -1.4983,4.79209 -5.375,4.65625 -4.6867,-0.16915 -8.7829,-0.73959 -12.625,-1.5 -15.2774,-2.95219 -13.319,-3.15219 -4.6875,-4 5.978,-1.02419 11.9382,-2.05133 17.8125,-3.59375 0.9392,-0.31033 1.68,-0.46802 2.25,-0.46875 z"
         style="fill:url(#radialGradient4686);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4241"
         d="m 217.8989,731.28491 c 4.9366,0.32798 7.4719,4.96343 5,9.40625 -7.3227,5.98756 -13.5309,15.38042 -21.7813,16.21875 -3.7884,-0.94727 0.4063,-3 -6.0312,-8 -5.9729,-2.07854 -23.8246,8.49626 -36.2812,14.875 8.979,-7.90536 21.2134,-13.26369 34.7187,-19.34375 6.4188,-2.88974 15.1011,-10.65729 17.625,-11.28125 2.5065,-1.45873 4.8183,-2.00334 6.75,-1.875 z"
         style="fill:#ffffff;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4243"
         d="m 217.6489,733.84741 c 1.2997,0.0779 2.22,0.62502 2.5625,1.625 0.9133,2.66661 -2.6636,7.70179 -7.9688,11.25 -5.3051,3.54816 -10.3366,4.26033 -11.25,1.59375 -0.9133,-2.66661 2.6637,-7.7018 7.9688,-11.25 3.3157,-2.21763 6.5214,-3.34855 8.6875,-3.21875 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4325"
         d="m 197.9926,820.03491 -15.875,20.625 c 5.2323,-10.47775 10.0911,-19.51438 12.6876,-20.4375 l 3.1874,-0.1875 z"
         style="fill:#999999;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4306"
         d="m 160.6802,768.34741 4.7812,1.09375 c -1.4619,20.55518 17.2975,25.22634 0.8125,29.875 -7.6804,-3.1057 -6.7252,-17.97475 -5.5937,-30.96875 z"
         style="fill:#2d2d2d;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4389"
         d="m 187.4926,588.81616 c 0.4154,1.84955 6.224,8.97918 13.0938,11.8125 1.5417,1.23152 0.8947,1.37103 -0.2188,1.28125 -9.7388,-2.32736 -16.4024,16.78082 -17.7812,26.8125 l 23.1562,47.53125 c -8.1558,2.85278 -23.4988,-48.04492 -31.5312,-41.84375 5.0753,-12.90777 6.1543,-11.79707 13.2812,-45.59375 z"
         style="fill:#808080;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4391"
         d="m 185.8989,588.06616 c 8.1701,6.1296 -3.7967,15.61535 -5.0313,41.0625 6.8118,16.85866 13.9767,30.83956 22.6563,45.71875 -7.1675,-11.85134 -20.0259,-33.64775 -23.625,-45.96875 -1.9704,-8.02928 2.8504,-17.91491 4.7187,-28.65625 0.6866,-3.94688 0.6647,-8.56474 1.2813,-12.15625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4462"
         d="m 168.5552,644.25366 c -6.09,3.48987 -12.1422,5.27537 -18.9376,6.28125 -0.1173,-1.19005 1.0237,-2.23704 3.4063,-3.09375 l 15.5313,-3.1875 z"
         style="fill:#ffffff;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3550"
         d="m 177.6802,634.94116 c 1.9405,-0.0556 3.1532,0.77802 5.4374,5.03125 15.2665,36.01408 23.5029,40.67241 32.7188,54.40625 1.1127,3.35741 2.9527,6.20022 3.25,9.46875 -2.9486,-0.43462 -5.1318,-2.43124 -7.75,-4.1875 -12.0337,-18.32831 -22.4957,-36.70526 -29.8438,-54.3125 -2.7785,-4.55413 -3.6332,-4.71608 -10,-3.5 l -18.625,5.5 c 3.8061,-3.24444 11.8384,-7.92798 20.1563,-11.90625 2.0619,-0.0983 3.4918,-0.46667 4.6563,-0.5 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4392"
         d="m 208.4302,578.09741 c 24.1907,-0.0985 46.8219,26.20861 55.0312,56.125 -6.2191,-16.53743 -31.9618,-73.86119 -77.3125,-47.96875 7.3302,-5.63737 14.8759,-8.12611 22.2813,-8.15625 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4415"
         d="m 209.0239,580.25366 c 28.4373,0.16864 54.6122,35.89384 62.6875,85.71875 -4.8837,-28.27511 -31.3638,-101.47007 -82.1875,-80.84375 5.78,-3.527 11.9167,-4.66352 18.1563,-4.875 0.4524,-0.0153 0.8923,-0.003 1.3437,0 z"
         style="fill:#c0c0c0;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3552"
         d="m 182.6489,628.87866 7.5,0.1875 c -0.01,6.83824 -0.006,11.12636 1.375,18.03125 -2.6023,-5.28466 -6.2969,-12.91761 -8.875,-18.21875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4585"
         d="m 371.8052,339.50366 c 78.2659,0.14018 157.02868,3.70863 237.2812,11.4375 116.5687,33.09245 219.10436,81.62122 314.9375,130.6875 l -36.875,2.53125 -73.25,15.65625 -125.25,-1.53125 -109.09375,0 C 472.48708,481.90962 368.7061,469.07989 266.9614,476.65991 c -25.8689,-46.84711 -61.1571,-89.93564 -101.7812,-130 68.9137,-4.7316 137.5668,-7.27994 206.625,-7.15625 z"
         style="fill:url(#linearGradient3679);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4679"
         d="m 371.8052,339.47241 c 78.2659,0.14018 157.05993,3.70863 237.31245,11.4375 116.5687,33.09245 219.07311,81.65247 314.90625,130.71875 l -36.875,2.5 -73.21875,15.65625 -125.28125,-1.5 -109.09375,0 C 472.48708,481.90962 368.7061,469.04864 266.9614,476.62866 c -25.8689,-46.84711 -61.1572,-89.93564 -101.7812,-130 68.9137,-4.7316 137.5668,-7.27994 206.625,-7.15625 z m 7.5312,4 c -65.2482,-0.11366 -130.107,2.24582 -195.2188,6.59375 38.3831,36.8157 71.7146,76.38904 96.1563,119.4375 96.1314,-6.96538 194.21389,4.85876 295.375,19.90625 l 103.0625,0 118.34375,1.375 69.21875,-14.375 34.8125,-2.3125 C 810.5404,429.00972 713.69273,384.41278 603.55515,354.00366 527.73018,346.9015 453.28441,343.60122 379.3364,343.47241 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4765"
         d="m 486.7114,349.47241 c 44.15842,1.75778 88.62661,4.73486 133.5625,9.0625 137.68765,39.4058 303.67393,125.36433 295.34375,122.90625 0,0 -25.28134,1.74064 -35.46875,2.4375 l -70.5,16.03125 c 0,0 2.58246,0.73742 6.25,1.875 l -35.53125,-0.40625 C 689.13302,444.21834 592.37748,390.59055 486.7114,349.47241 z"
         style="fill:url(#linearGradient33441);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3887"
         d="m 243.8676,503.19116 c 91.7505,0.0146 197.93318,72.64398 278.37505,131.21875 l -55.0625,-11.375 C 378.6118,578.37899 311.2056,553.90322 260.3364,544.25366 c -29.3007,-27.59237 -61.9149,-45.43113 -115.1562,-2.53125 29.0815,-27.4193 62.7851,-38.53695 98.6874,-38.53125 z"
         style="opacity:0.8;fill:url(#radialGradient33444);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4400"
         d="m 1050.9614,803.75366 0.2188,2 c -94.62492,13.12394 -192.47595,10.18079 -280.9063,10.6875 l 0,-2 c 99.24413,0.43345 188.17602,0.48574 280.6875,-10.6875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4448"
         d="m 1061.0239,807.97241 37.125,14.875 c -26.9322,2.44781 -53.8023,4.3865 -80.625,5.9375 11.6195,-11.14013 26.6821,-18.67226 43.4688,-20.8125 l 0.031,0 z"
         style="fill:url(#radialGradient33448);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4346"
         d="m 235.2114,721.94116 c 16.1391,9.37544 -14.96,9.8358 5.5625,13.75 l -6.4063,0.125 c 1.3532,3.5566 -6.3892,5.72054 2.8438,6.9375 -7.4866,0.58087 -9.0709,1.82387 -9.0312,-2.34375 l 2.125,-7.71875 4.9062,-10.75 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4408"
         d="m 161.8989,683.97241 c 0.022,1.07732 -0.0114,2.25014 -0.6563,7.28125 -0.6437,5.03111 -1.3412,14.21211 -1.5,23.65625 -0.0458,1.10953 -0.0656,2.19632 -0.0624,3.1875 -4e-4,0.084 0,0.16598 0,0.25 -4e-4,0.14703 0,0.29035 0,0.4375 0,2.76147 0.059,5.50135 0.1562,8.21875 l -1.5,0.71875 c -3.9264,-10.83464 -3.4541,-6.44238 -3,1.46875 l -0.875,0.40625 c -7.8675,-8.35163 -2.1266,-8.21888 -3.6562,-13.4375 -3.0683,-6.32 -3.4169,-5.64432 2.0624,-3.53125 4.2067,2.72167 7.8613,-23.07012 9.0313,-28.65625 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4453"
         d="m 230.8676,715.47241 1.3126,5.8125 -2.625,6.1875 -2.9688,-4.5 0.6562,-6.9375 3.625,-0.5625 z"
         style="fill:url(#radialGradient33453);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4515"
         d="m 298.7114,622.15991 c 162.64228,35.84056 430.54186,77.3392 478.4375,80.15625 0.0825,0.0474 -10.99975,11.89763 -35.375,21.28125 -24.71481,9.51435 -66.80649,11.20937 -129.25,-14.375 -16.78928,-2.3947 -38.17872,-8.43257 -44.15625,-9.03125 -13.89867,-1.84171 -15.38802,-9.64021 -24.71875,-11.96875 -55.82258,-13.93086 -244.9375,-66.0625 -244.9375,-66.0625 z"
         style="fill:url(#linearGradient33456);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4525"
         d="m 777.1489,711.12866 -0.0937,33 c -2.14965,-1.54063 -3.94442,-3.64259 -5.34375,-5.8125 -4.37971,-8.26188 -0.44121,-18.59886 5.4375,-27.1875 z"
         style="fill:url(#linearGradient33459);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4615"
         d="m 1192.6802,777.09741 c 0.1283,-0.01 0.2556,0.006 0.375,0.0312 1.2278,0.25734 1.9414,2.45597 1.9062,8.46875 -0.058,9.87223 0.8278,40.69119 -1.7187,42 l -40,-29.84375 36.125,-18.59375 c 1.3008,-1.10573 2.4139,-1.99408 3.3125,-2.0625 z"
         style="fill:url(#linearGradient33462);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4637"
         d="m 1155.8677,799.69116 4.3437,3.25 -37.7187,9.8125 -3,-4.375 36.375,-8.6875 z"
         style="fill:url(#linearGradient33465);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4647"
         d="m 519.74265,821.40991 184.8125,0.0625 56.875,28.25 -192.65625,-1 -49.03125,-27.3125 z"
         style="fill:url(#linearGradient33468);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4658"
         d="m 709.24265,823.81616 3.21875,1.59375 -178.59375,2.375 -7.5,-3.96875 182.875,0 z"
         style="fill:url(#linearGradient33471);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4696"
         d="m 518.36765,718.37866 -50.96875,73 -5.6875,0.125 17.875,-23.09375 c 10.37997,-13.08166 38.78125,-50.03125 38.78125,-50.03125 z"
         style="fill:url(#radialGradient33474);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4268"
         d="m 745.6489,761.15991 c 0,0 16.89726,3.41441 25.5625,5.125 5.68697,0.77167 4.41686,1.47213 3.53125,6.28125 -4.92264,26.72072 -10.59154,53.49225 -14.6875,76.15625 l -191.28125,0 C 532.72992,829.79289 495.37002,814.00945 461.7114,791.50366 l 5.6875,-0.125 102.125,55.34375 189.40625,0 13.375,-70.4375 c 0.85083,-4.57869 2.91715,-8.039 -1.40625,-8.75 l -25.25,-6.375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33477);fill-opacity:1;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4466"
         d="m 224.4614,626.40991 13.7812,0.875 c -0.3,13.46385 -2.2541,25.26316 -4.5624,36.71875 l -6.5626,32.3125 c -1.6766,-10.83612 -21.9455,-22.2743 -18.0312,-16.375 24.7812,36.42544 -7.7344,-1.61297 -1.0938,-4.34375 1.8426,-0.33941 3.2612,-0.51916 5.0938,-0.25 9.8349,-28.39476 10.1186,-42.21752 11.375,-48.9375 z"
         style="fill:#6e6e6e;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45928"
         d="m -212.4448,490.69116 36.0312,18.78125 c 13.0654,71.14174 27.4193,119.78104 44.2188,165.71875 0.5199,4.25669 2.564,9.02136 -2.25,11.5 l -25.75,15.5 c -21.9581,-7.04272 -39.4594,-18.56569 -58.75,-37.75 -6.285,-6.25024 -8.8091,-5.79692 -12.5,-20.75 -13.3234,-42.22268 -22.5626,-86.89583 -32.75,-131 23.6479,-17.88508 26.9237,-19.57214 51.75,-22 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45084"
         d="m -211.9761,490.62866 1.3437,0.6875 1.2188,5.28125 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.0625 -1.5312,-6.40625 c 0.1636,-0.0161 0.3032,-0.0463 0.4687,-0.0625 z m -5.2187,0.5625 1.5937,6.875 -2.2813,4.15625 -0.375,-1.59375 1.1563,-2.09375 -1.7187,-7.15625 c 0.5353,-0.0628 1.0663,-0.1257 1.625,-0.1875 z m -6.375,0.78125 1.7812,7.59375 -2.2812,4.15625 -0.4063,-1.625 1.1563,-2.0625 -1.8438,-7.78125 c 0.5281,-0.0861 1.0416,-0.19985 1.5938,-0.28125 z m -6.2813,1.1875 1.875,7.875 -2.2813,4.15625 -0.4062,-1.59375 1.1562,-2.0625 -1.9062,-8 c 0.5168,-0.1332 1.0266,-0.2529 1.5625,-0.375 z m 24.8125,1.09375 1.8125,0.9375 -2.25,4.09375 -0.375,-1.59375 1.1563,-2.0625 -0.3438,-1.375 z m -30.9375,0.6875 1.7813,7.5625 -2.2813,4.15625 -0.375,-1.59375 1.125,-2.0625 -1.75,-7.46875 c 0.4983,-0.2032 0.996,-0.40895 1.5,-0.59375 z m 32.8437,0.4375 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4376,-1.84375 z m -6.1874,1.46875 3.9062,2.71875 2.1562,8.9375 -2.2812,4.1875 -0.4062,-1.59375 1.1562,-2.09375 -2.1562,-8.9375 -1.9688,-1.375 -0.4062,-1.84375 z m 9.875,0.3125 0.4062,0.21875 -0.25,0.4375 -0.1562,-0.65625 z m -42.4688,0.4375 1.5312,6.375 -2.2812,4.15625 -0.375,-1.59375 1.125,-2.0625 -1.4688,-6.0625 c 0.4991,-0.2825 0.9791,-0.5533 1.4688,-0.8125 z m 26.375,0.71875 3.9375,2.71875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.125,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4375,-1.84375 z m -6.1875,1.5 3.9063,2.6875 2.1562,8.96875 -2.2812,4.1875 -0.4063,-1.59375 1.125,-2.09375 -2.0937,-8.96875 -2,-1.34375 -0.4063,-1.84375 z m 27.9063,0.28125 1.875,0.96875 1.0937,4.5 -2.2813,4.1875 -0.4062,-1.59375 1.1562,-2.09375 -1.4374,-5.96875 z m -53.8438,0.90625 1.0625,4.4375 -2.2813,4.15625 -0.375,-1.59375 1.125,-2.0625 -0.9374,-4 c 0.4874,-0.3281 0.9356,-0.6309 1.4062,-0.9375 z m 19.7188,0.28125 3.9374,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.0938,-8.96875 -2,-1.34375 -0.4374,-1.84375 z m -6.1876,1.46875 3.9063,2.71875 2.1563,8.9375 -2.3126,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4376,-1.84375 z m 47.7813,1.25 1.375,0.6875 -1.9687,3.59375 -0.375,-1.59375 1.125,-2.09375 -0.1563,-0.59375 z m -54,0.21875 3.9375,2.71875 2.125,8.96875 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.9375 -1.9688,-1.375 -0.4687,-1.84375 z m -12.9375,0.6875 0.5,2.03125 -2.2812,4.125 -0.4063,-1.59375 1.1563,-2.0625 -0.375,-1.5 c 0.4753,-0.3459 0.9488,-0.6716 1.4062,-1 z m 68.8125,0.0625 3,1.5625 0.7813,0.53125 2.1562,8.96875 -2.3125,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.125,-8.96875 -1.9688,-1.34375 -0.3125,-1.25 z m -62.0625,0.71875 3.9062,2.71875 2.1563,8.96875 -2.3125,4.15625 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4375,-1.84375 z m 55.7188,0.15625 3.9374,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.1562,-8.96875 -1.9375,-1.34375 -0.4687,-1.84375 z m -61.9376,1.3125 3.9376,2.71875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.09375 -2.1563,-8.9375 -1.9375,-1.34375 -0.4688,-1.875 z m 55.75,0.15625 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4376,-1.84375 z m -6.2187,1.46875 3.9375,2.71875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.09375 -2.1562,-8.9375 -1.9376,-1.375 -0.4687,-1.84375 z m -55.4375,0.0625 3.625,2.5 2.125,9 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9688,-1.34375 -0.3437,-1.5 c 0.063,-0.0474 0.1244,-0.10925 0.1875,-0.15625 z m -1,0.75 -1.625,2.96875 -0.3438,-1.5 c 0.6879,-0.5181 1.3157,-0.97975 1.9688,-1.46875 z m 50.25,0.6875 3.9062,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9687,-1.34375 -0.4375,-1.84375 z m -6.2188,1.46875 3.9376,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.1563,-8.96875 -1.9375,-1.34375 -0.4688,-1.84375 z m -47.0312,0.0937 1.4375,1 2.125,8.96875 -1.7813,3.25 c -0.1211,-0.5323 -0.2538,-1.06165 -0.375,-1.59375 l 0.6563,-1.1875 -2.1563,-8.96875 -0.9687,-0.65625 0,-0.0312 c 0.3906,-0.2954 0.6829,-0.49465 1.0625,-0.78125 z m 40.875,1.375 3.9062,2.71875 2.0938,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9688,-1.34375 -0.4062,-1.84375 z m -6.2188,1.46875 3.9376,2.71875 2.0937,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.1563,-8.9375 -1.9374,-1.375 -0.4376,-1.84375 z m -6.1874,1.46875 3.9062,2.71875 2.125,8.96875 -2.2812,4.15625 -0.4063,-1.59375 1.1563,-2.09375 -2.125,-8.9375 -1.9688,-1.375 -0.4062,-1.84375 z m 55.7187,0.15625 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.1563,-8.96875 -1.9375,-1.34375 -0.4375,-1.84375 z m -61.9375,1.3125 3.9062,2.71875 2.1563,8.96875 -2.2813,4.1875 -0.4062,-1.625 1.1562,-2.09375 -2.1562,-8.9375 -1.9375,-1.34375 -0.4375,-1.875 z m 55.75,0.15625 3.9062,2.71875 2.125,8.9375 -2.2812,4.1875 -0.4062,-1.59375 1.1562,-2.09375 -2.125,-8.9375 -1.9688,-1.375 -0.4062,-1.84375 z m -61.9375,1.34375 3.9063,2.6875 2.125,8.96875 -2.2813,4.1875 -0.4063,-1.59375 1.1563,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4063,-1.84375 z m 55.7187,0.125 3.9063,2.71875 2.1563,8.96875 -2.2813,4.15625 -0.4063,-1.59375 1.1563,-2.09375 -2.1563,-8.9375 -1.9374,-1.375 -0.4376,-1.84375 z m -61.9374,1.34375 3.9062,2.71875 2.1562,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.1562,-8.96875 -1.9376,-1.34375 -0.4374,-1.84375 z m 55.7187,0.125 3.9375,2.71875 2.125,8.96875 -2.2812,4.1875 -0.4063,-1.625 1.1563,-2.09375 -2.125,-8.9375 -1.9688,-1.34375 -0.4375,-1.875 z m -61.9375,1.34375 3.9375,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4375,-1.84375 z m 55.75,0.15625 3.9062,2.6875 2.1563,8.96875 -2.2813,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.1562,-8.96875 -1.9375,-1.34375 -0.4375,-1.84375 z m -6.2188,1.46875 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4376,-1.84375 z m -6.1874,1.46875 3.9062,2.71875 2.1562,8.9375 -2.2812,4.1875 -0.4062,-1.59375 1.1562,-2.09375 -2.1562,-8.96875 -1.9688,-1.34375 -0.4062,-1.84375 z m -6.2188,1.46875 3.9375,2.71875 2.125,8.96875 -2.2813,4.15625 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4375,-1.84375 z m -6.1875,1.46875 3.9063,2.71875 2.1562,8.96875 -2.2812,4.1875 -0.4063,-1.625 1.125,-2.09375 -2.125,-8.9375 -1.9687,-1.34375 -0.4063,-1.875 z m 55.7187,0.15625 0.0313,0.0312 c 0.062,0.3129 0.1255,0.6255 0.1875,0.9375 l -0.2188,-0.96875 z m -61.9374,1.34375 3.9374,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.0938,-8.96875 -2,-1.34375 -0.4374,-1.84375 z m 55.75,0.125 3.9062,2.71875 2.1562,8.96875 -2.3124,4.15625 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.9375 -1.9688,-1.375 -0.4062,-1.84375 z m -61.9376,1.34375 3.9063,2.6875 2.1563,8.96875 -2.3126,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.0937,-8.96875 -1.9687,-1.34375 -0.4376,-1.84375 z m 55.7188,0.125 3.9375,2.71875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.125,-2.09375 -2.0937,-8.9375 -2,-1.34375 -0.4375,-1.875 z m -61.9375,1.34375 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9688,-1.34375 -0.4687,-1.84375 z m 55.75,0.15625 3.9063,2.6875 2.1562,8.96875 -2.3125,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.0937,-8.96875 -1.9688,-1.34375 -0.4375,-1.84375 z m -61.9375,1.3125 3.9062,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4375,-1.84375 z m 55.7188,0.15625 3.9374,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.1562,-8.96875 -1.9375,-1.34375 -0.4687,-1.84375 z m -6.1876,1.46875 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4376,-1.84375 z m -55.0312,0.34375 3.2188,2.21875 2.125,8.96875 -1.9688,3.625 c -0.1234,-0.5419 -0.2518,-1.0829 -0.375,-1.625 l 0.8438,-1.53125 -2.125,-8.9375 -1.3126,-0.90625 c -0.1366,-0.6033 -0.2696,-1.2092 -0.4062,-1.8125 z m 48.8125,1.125 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.1562,-8.9375 -1.9376,-1.375 -0.4687,-1.84375 z m -6.1875,1.46875 3.9062,2.71875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4375,-1.84375 z m -6.2188,1.5 3.9376,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.1563,-8.96875 -1.9375,-1.34375 -0.4688,-1.84375 z m -6.1562,1.46875 3.875,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9688,-1.34375 -0.4062,-1.84375 z m 55.6875,0.0937 3.3125,2.3125 c 0.7376,3.4876 1.5034,6.90375 2.25,10.28125 l -1.7812,3.28125 -0.375,-1.625 1.1562,-2.09375 -2.1562,-8.9375 -1.9376,-1.375 -0.4687,-1.84375 z m -61.9063,1.375 3.9376,2.71875 2.0937,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.1563,-8.96875 -1.9374,-1.34375 -0.4376,-1.84375 z m 55.7188,0.125 3.9062,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9687,-1.375 -0.4375,-1.8125 z m -61.9062,1.34375 3.9062,2.71875 2.0938,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.125,-8.9375 -1.9688,-1.375 -0.4062,-1.84375 z m 55.6874,0.125 3.9063,2.71875 2.1563,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.1563,-2.09375 -2.1563,-8.96875 -1.9375,-1.375 -0.4688,-1.8125 z m -61.9062,1.34375 3.9062,2.71875 2.1563,8.96875 -2.2813,4.15625 -0.4062,-1.59375 1.1562,-2.09375 -2.1562,-8.9375 -1.9375,-1.375 -0.4375,-1.84375 z m 55.6875,0.125 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9688,-1.375 -0.4687,-1.8125 z m -61.9063,1.34375 3.9376,2.71875 2.125,8.96875 -2.2813,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9687,-1.34375 -0.4376,-1.875 z m 55.75,0.125 3.875,2.71875 2.1563,8.9375 -2.2813,4.1875 -0.4062,-1.59375 1.1875,-2.09375 -2.1563,-8.9375 -1.9687,-1.40625 -0.4063,-1.8125 z m -6.2187,1.46875 3.9375,2.71875 2.0938,8.96875 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.09375 -2.125,-8.9375 -1.9688,-1.40625 -0.4375,-1.8125 z m -6.1875,1.5 3.9062,2.6875 2.125,8.96875 -2.2812,4.1875 -0.4062,-1.59375 1.1874,-2.09375 -2.1562,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m -6.2188,1.46875 3.9376,2.6875 2.125,8.96875 -2.2813,4.1875 -0.4063,-1.59375 1.1563,-2.09375 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.8125 z m -6.1874,1.46875 3.9062,2.71875 2.1562,8.9375 -2.3124,4.1875 -0.4063,-1.59375 1.1563,-2.09375 -2.125,-8.96875 -1.9688,-1.34375 -0.4062,-1.84375 z m -6.2188,1.46875 3.9375,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4375,-1.84375 z m 55.75,0.15625 3.9062,2.6875 2.1563,8.96875 -2.3125,4.1875 -0.4062,-1.59375 1.1562,-2.09375 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m -61.9375,1.3125 3.9063,2.71875 2.1562,8.96875 -2.3125,4.15625 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.9375 -1.9687,-1.375 -0.4063,-1.84375 z m 55.7187,0.15625 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.8125 z m -61.9374,1.3125 3.9374,2.71875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.34375 -0.4374,-1.875 z m 55.75,0.15625 3.9062,2.71875 2.1562,8.9375 -2.3124,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4062,-1.8125 z m -61.9376,1.34375 3.9063,2.6875 2.1563,8.96875 -2.3126,4.1875 -0.375,-1.59375 1.125,-2.09375 -2.125,-8.96875 -1.9687,-1.34375 -0.4063,-1.84375 z m 55.7188,0.125 3.9375,2.71875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.125,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4375,-1.8125 z m -6.1875,1.5 3.9063,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m -55.3125,0.15625 3.5,2.40625 2.125,8.9375 -2.0938,3.84375 c -0.126,-0.531 -0.2493,-1.06255 -0.375,-1.59375 l 0.9376,-1.75 -2.1563,-8.96875 -1.5,-1.0625 c -0.1399,-0.6054 -0.2979,-1.2069 -0.4375,-1.8125 z m 49.0938,1.3125 3.9374,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.1562,-8.96875 -1.9376,-1.375 -0.4374,-1.8125 z m -6.1876,1.46875 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m -6.2187,1.46875 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4375,-1.8125 z m -6.1875,1.46875 3.9062,2.71875 2.125,8.96875 -2.2812,4.15625 -0.375,-1.625 1.125,-2.0625 -2.0938,-8.9375 -1.9687,-1.40625 -0.4375,-1.8125 z m 55.7188,0.15625 2.9062,2 c 0.8571,3.6335 1.6928,7.20435 2.5625,10.71875 l -1.6875,3.125 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m -61.9376,1.3125 3.9063,2.71875 2.1563,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.1563,-2.0625 -2.1563,-8.9375 -1.9375,-1.375 -0.4688,-1.84375 z m 55.75,0.15625 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.0937,-8.9375 -1.9687,-1.40625 -0.4376,-1.8125 z m -61.9374,1.34375 3.9062,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m 55.7187,0.125 3.9063,2.71875 2.1562,8.96875 -2.2812,4.15625 -0.375,-1.625 1.1562,-2.0625 -2.1562,-8.9375 -1.9376,-1.40625 -0.4687,-1.8125 z m -61.9375,1.34375 3.9062,2.71875 2.1563,8.9375 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.1563,-8.96875 -1.9374,-1.375 -0.4688,-1.8125 z m 55.75,0.125 3.9062,2.71875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.65625 1.1562,-2.03125 -2.125,-8.96875 -1.9687,-1.375 -0.4375,-1.84375 z m -61.9375,1.34375 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4375,-1.8125 z m 55.7187,0.15625 3.9063,2.6875 2.1563,8.96875 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.1563,-8.96875 -1.9375,-1.375 -0.4688,-1.8125 z m -6.2187,1.46875 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4687,-1.8125 z m -6.1875,1.46875 3.9062,2.71875 2.1563,8.9375 -2.2813,4.1875 -0.4062,-1.625 1.1875,-2.0625 -2.1563,-8.96875 -1.9687,-1.375 -0.4375,-1.8125 z m -6.1875,1.46875 3.9063,2.71875 2.125,8.96875 -2.2813,4.15625 -0.375,-1.625 1.1563,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4375,-1.8125 z m -6.1875,1.46875 3.9062,2.71875 2.125,8.96875 -2.2812,4.1875 -0.4062,-1.65625 1.1562,-2.0625 -2.125,-8.9375 -1.9688,-1.375 -0.4062,-1.84375 z m -6.2188,1.5 3.9376,2.6875 2.0937,8.96875 -2.25,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.8125 z m 55.75,0.125 3.9063,2.71875 2.125,8.96875 -2.3125,4.15625 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4063,-1.8125 z m -61.9374,1.34375 3.9062,2.71875 2.1562,8.9375 -2.3124,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m 55.7187,0.125 3.9375,2.71875 2.0938,8.96875 -2.25,4.1875 -0.4063,-1.65625 1.1563,-2.0625 -2.125,-8.9375 -1.9688,-1.375 -0.4375,-1.84375 z m -61.9375,1.34375 3.9375,2.71875 2.125,8.9375 -2.2813,4.1875 -0.4062,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4375,-1.8125 z m 55.75,0.15625 3.9062,2.6875 2.1563,8.96875 -2.3125,4.1875 -0.4062,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m -61.9375,1.3125 3.9063,2.71875 2.1562,8.9375 -2.3125,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4063,-1.8125 z m 55.7187,0.15625 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.8125 z m -6.1874,1.46875 3.9062,2.71875 2.1562,8.9375 -2.3124,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m -55.375,0.0937 3.5624,2.46875 2.125,8.96875 -1.9374,3.53125 c -0.1361,-0.5292 -0.271,-1.06405 -0.4063,-1.59375 l 0.8125,-1.46875 -2.125,-8.9375 -1.5938,-1.125 c -0.1506,-0.6139 -0.2875,-1.22935 -0.4374,-1.84375 z m 49.1562,1.375 3.9375,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4375,-1.8125 z m -6.1875,1.46875 3.9063,2.71875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.125,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4063,-1.8125 z m -6.2187,1.5 3.9374,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.1562,-8.96875 -1.9376,-1.375 -0.4374,-1.8125 z m -6.1876,1.46875 3.9063,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m 55.7188,0.125 3.25,2.25 c 0.8707,3.2894 1.7722,6.52235 2.6562,9.71875 l -2.125,3.90625 -0.375,-1.65625 1.125,-2.0625 -2.1562,-8.9375 -1.9375,-1.375 -0.4375,-1.84375 z m -61.9375,1.34375 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4375,-1.8125 z m 55.75,0.15625 3.9063,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m -61.9375,1.3125 3.9062,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.0938,-8.9375 -1.9687,-1.40625 -0.4375,-1.8125 z m 55.7188,0.15625 3.9374,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m -61.9376,1.3125 3.9063,2.71875 2.1563,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.1563,-2.0625 -2.1563,-8.9375 -1.9375,-1.40625 -0.4688,-1.8125 z m 55.75,0.15625 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.0937,-8.96875 -2,-1.375 -0.4063,-1.8125 z m -61.9374,1.34375 3.9062,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.65625 1.1562,-2.03125 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m 55.7187,0.125 3.9063,2.71875 2.1562,8.9375 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.1562,-8.9375 -1.9376,-1.40625 -0.4687,-1.8125 z m -6.1875,1.46875 3.9062,2.71875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.65625 1.1562,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4375,-1.8125 z m -6.2188,1.5 3.9063,2.6875 2.1563,8.96875 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.1563,-8.96875 -1.9375,-1.375 -0.4688,-1.8125 z m -6.2187,1.46875 3.9375,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4687,-1.8125 z m -6.1875,1.46875 3.9062,2.71875 2.1563,8.9375 -2.2813,4.1875 -0.4062,-1.625 1.1875,-2.0625 -2.1563,-8.96875 -1.9687,-1.375 -0.4375,-1.8125 z m -6.2188,1.46875 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4688,-1.8125 z m 55.75,0.125 3.9063,2.6875 2.1563,8.96875 -2.2813,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.8125 z m -61.9062,1.34375 3.9062,2.71875 2.125,8.96875 -2.2812,4.15625 -0.4062,-1.625 1.1562,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4062,-1.8125 z m 55.6875,0.125 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4687,-1.8125 z m -61.9063,1.34375 3.9376,2.71875 2.0937,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.1563,-2.03125 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.84375 z m 55.7188,0.125 3.9062,2.71875 2.1563,8.9375 -2.3125,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4375,-1.8125 z m -61.9062,1.375 3.9062,2.6875 2.1562,8.96875 -2.2812,4.1875 -0.4375,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m 55.6874,0.0937 3.9376,2.71875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.1563,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4688,-1.8125 z m -6.1874,1.5 3.9062,2.6875 2.1562,8.96875 -2.3124,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m -54.8126,0.5 3.0313,2.09375 2.125,8.9375 -1.375,2.53125 c -0.1464,-0.5109 -0.2921,-1.01985 -0.4375,-1.53125 l 0.2812,-0.5 -2.125,-8.96875 -0.9687,-0.6875 c -0.1699,-0.6268 -0.3627,-1.2474 -0.5313,-1.875 z m 48.625,0.96875 3.9376,2.6875 2.0937,8.96875 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.1563,-8.96875 -1.9374,-1.375 -0.4376,-1.8125 z m -6.1874,1.46875 3.9062,2.71875 2.0938,8.9375 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m -6.2188,1.46875 3.9375,2.71875 2.125,8.9375 -2.2813,4.1875 -0.4062,-1.625 1.1562,-2.0625 -2.1562,-8.9375 -1.9375,-1.40625 -0.4375,-1.8125 z m -6.1875,1.46875 3.9063,2.71875 2.125,8.96875 -2.2813,4.15625 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.9375 -1.9687,-1.40625 -0.4063,-1.8125 z m 55.7187,0.15625 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.1563,-9 -1.9374,-1.34375 -0.4376,-1.8125 z m 3.75,0.28125 c 0.1463,0.4971 0.2912,1.0048 0.4376,1.5 l -0.3438,0.65625 -0.375,-1.625 0.2812,-0.53125 z m -65.6874,1.03125 3.9374,2.71875 2.125,8.96875 -2.2812,4.1875 -0.4062,-1.65625 1.1562,-2.0625 -2.1562,-8.9375 -1.9376,-1.375 -0.4374,-1.84375 z m 55.75,0.15625 3.9062,2.71875 2.125,8.9375 -2.2812,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m -61.9376,1.34375 3.9063,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m 55.7188,0.125 3.9375,2.71875 2.125,8.96875 -2.2813,4.1875 -0.4062,-1.65625 1.1562,-2.0625 -2.1562,-8.96875 -1.9375,-1.375 -0.4375,-1.8125 z m -61.9375,1.34375 3.9375,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.1563,-8.96875 -1.9375,-1.375 -0.4375,-1.8125 z m 55.75,0.15625 3.9063,2.6875 2.125,8.96875 -2.2813,4.1875 -0.375,-1.65625 1.125,-2.03125 -2.125,-9 -1.9687,-1.34375 -0.4063,-1.8125 z m -61.9375,1.3125 3.9062,2.71875 2.125,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4062,-1.8125 z m 55.7188,0.15625 3.9062,2.6875 2.1562,8.96875 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.1562,-9 -1.9376,-1.34375 -0.4374,-1.8125 z m -6.1876,1.46875 3.9063,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.125,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4063,-1.8125 z m -6.2187,1.46875 3.9063,2.71875 2.1562,8.9375 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.1563,-8.96875 -1.9375,-1.375 -0.4375,-1.8125 z m -6.2187,1.46875 3.9374,2.71875 2.125,8.96875 -2.2812,4.15625 -0.375,-1.625 1.125,-2.0625 -2.125,-8.9375 -1.9688,-1.40625 -0.4374,-1.8125 z m -6.1876,1.46875 3.9063,2.71875 2.1563,8.96875 -2.2813,4.1875 -0.4063,-1.65625 1.1563,-2.0625 -2.125,-8.96875 -1.9687,-1.34375 -0.4376,-1.84375 z m -6.2187,1.5 3.9375,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.125,-2.0625 -2.0938,-9 -1.9688,-1.34375 -0.4687,-1.8125 z m 55.75,0.125 3.9063,2.6875 2.1562,9 -2.2812,4.15625 -0.4063,-1.625 1.1563,-2.0625 -2.125,-8.96875 -2,-1.375 -0.4063,-1.8125 z m -61.9375,1.34375 3.9062,2.71875 2.1563,8.9375 -2.2813,4.1875 -0.4062,-1.625 1.1875,-2.0625 -2.1563,-9 -1.9687,-1.34375 -0.4375,-1.8125 z m 55.7188,0.125 3.9374,2.6875 2.125,9 -2.2812,4.1875 -0.375,-1.65625 1.125,-2.0625 -2.0938,-8.96875 -1.9687,-1.34375 -0.4687,-1.84375 z m -61.9376,1.34375 3.9376,2.71875 2.125,8.9375 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4688,-1.8125 z m 55.75,0.15625 3.9063,2.65625 2.1563,9 -2.2813,4.1875 -0.4063,-1.625 1.1563,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4376,-1.8125 z m -61.9374,1.3125 3.9062,2.71875 2.1562,8.9375 -2.3124,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m 55.7187,0.15625 3.9375,2.6875 2.125,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4687,-1.8125 z m -6.1875,1.46875 3.9062,2.6875 2.1563,8.96875 -2.3125,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4375,-1.8125 z m -6.2188,1.46875 3.9376,2.6875 2.125,9 -2.2813,4.15625 -0.375,-1.625 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4688,-1.8125 z m -47.0312,0.125 1.4375,0.96875 2.125,8.96875 -0.4063,0.75 c -0.5096,-1.6068 -1.0489,-3.44925 -1.5937,-5.65625 -0.5283,-1.6743 -1.0467,-3.34945 -1.5625,-5.03125 z m 40.8438,1.34375 3.9062,2.6875 2.1562,9 -2.3124,4.1875 -0.375,-1.65625 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.34375 -0.4374,-1.84375 z m -6.1876,1.5 3.9063,2.65625 2.125,9 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.1563,-9 -1.9374,-1.34375 -0.4376,-1.8125 z m 54.125,0.34375 0.7813,0.875 -1.5313,2.8125 -0.375,-1.625 1.125,-2.0625 z m -60.3124,1.125 3.9062,2.65625 2.0938,9 -2.2813,4.1875 -0.375,-1.625 1.1563,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4062,-1.8125 z m 55.7187,0.125 3.9063,2.6875 2.125,9 -2.2813,4.15625 -0.375,-1.625 1.1563,-2.0625 -2.1563,-8.96875 -1.9375,-1.34375 -0.4375,-1.84375 z m -61.9375,1.34375 3.9375,2.6875 2.0937,8.96875 -2.2812,4.1875 -0.375,-1.625 1.1562,-2.0625 -2.1562,-9 -1.9375,-1.34375 -0.4375,-1.8125 z m 55.75,0.15625 3.9062,2.65625 2.0938,9 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4062,-1.8125 z m -61.9375,1.3125 3.9063,2.6875 2.125,8.96875 -2.2813,4.15625 -0.4063,-1.59375 1.1563,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m 55.7187,0.15625 3.9376,2.6875 2.0937,8.96875 -2.2813,4.15625 -0.375,-1.59375 1.1563,-2.0625 -2.1563,-9 -1.9374,-1.34375 -0.4376,-1.8125 z m -61.9374,1.3125 3.9374,2.6875 2.125,9 -2.2812,4.15625 -0.4062,-1.625 1.1562,-2.0625 -2.1562,-8.96875 -1.9376,-1.375 -0.4374,-1.8125 z m 55.75,0.15625 3.9062,2.6875 2.125,8.96875 -2.2812,4.15625 -0.4063,-1.59375 1.1563,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4062,-1.8125 z m -61.9376,1.34375 3.9063,2.65625 2.0937,8.84375 c -0.7897,-0.7283 -1.5151,-1.4475 -2.1874,-2.25 l -1.4376,-6.09375 -1.9687,-1.34375 -0.4063,-1.8125 z m 55.7188,0.125 3.9375,2.6875 2.125,8.96875 -2.2813,4.15625 -0.4062,-1.59375 1.1562,-2.0625 -2.1562,-8.96875 -1.9375,-1.375 -0.4375,-1.8125 z m -6.1875,1.46875 3.9063,2.6875 2.125,9 -2.2813,4.15625 -0.375,-1.625 1.125,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m -6.2187,1.5 3.9062,2.65625 2.1562,9 -2.2812,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.1562,-9 -1.9376,-1.34375 -0.4374,-1.8125 z m -6.1876,1.46875 3.9063,2.65625 2.125,9 -2.2813,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4063,-1.8125 z m -6.2187,1.46875 3.9063,2.6875 2.1562,8.96875 -2.2812,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.1563,-9 -1.9375,-1.34375 -0.4375,-1.8125 z m 55.75,0.15625 3.9063,2.65625 2.125,9 -2.2813,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4063,-1.8125 z m 3.5625,0.5625 c 0.1596,0.4657 0.3088,0.94155 0.4688,1.40625 l -0.2188,0.40625 -0.375,-1.59375 0.125,-0.21875 z m -65.5312,0.75 3.9374,2.6875 2.125,8.96875 -2.2812,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m 55.75,0.15625 3.9062,2.65625 2.1562,9 -2.2812,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.1562,-9 -1.9376,-1.34375 -0.4374,-1.8125 z m -61.9376,1.3125 3.9063,2.6875 2.1563,9 -2.2813,4.125 -0.4063,-1.59375 1.1563,-2.0625 -2.1563,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m 55.7188,0.15625 3.9375,2.6875 2.125,8.96875 -2.2813,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4375,-1.8125 z m -61.9375,1.3125 3.9375,2.6875 2.125,9 -0.375,0.65625 c -0.4763,-0.4332 -0.9599,-0.8701 -1.4375,-1.3125 l -1.8125,-7.84375 -2,-1.34375 -0.4375,-1.84375 z m 55.75,0.15625 3.9063,2.6875 2.1562,8.96875 -2.2812,4.15625 -0.4063,-1.59375 1.1563,-2.0625 -2.1563,-8.96875 -1.9687,-1.375 -0.4063,-1.8125 z m -6.2187,1.46875 3.9374,2.6875 2.125,9 -2.2812,4.15625 -0.375,-1.625 1.125,-2.0625 -2.0938,-8.96875 -2,-1.375 -0.4374,-1.8125 z m -54.1563,0.9375 2.3437,1.59375 0.1876,0.75 c -0.9229,-0.9067 -1.7566,-1.64915 -2.5313,-2.34375 z m 47.9687,0.5625 3.9063,2.65625 2.1563,9 -2.2813,4.15625 -0.4063,-1.59375 1.1563,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4376,-1.8125 z m -6.2187,1.46875 3.9375,2.65625 2.125,9 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4687,-1.8125 z m -6.1875,1.46875 3.9062,2.6875 2.1563,8.96875 -2.3125,4.15625 -0.375,-1.59375 1.1562,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4375,-1.8125 z m -6.2188,1.46875 3.9376,2.6875 2.125,8.96875 -2.2813,4.15625 -0.375,-1.59375 1.1563,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4688,-1.8125 z m 55.75,0.125 1.9063,1.28125 c 0.8319,2.3241 1.656,4.6296 2.5,6.9375 0.1989,1.628 0.6054,3.34845 0.7813,4.96875 l -1.4376,2.625 -0.375,-1.59375 1.125,-2.0625 -2.0937,-9 -2,-1.34375 -0.4063,-1.8125 z m -61.9374,1.34375 3.9062,2.6875 2.1562,9 -2.3124,4.125 -0.375,-1.59375 1.1562,-2.0625 -2.125,-8.96875 -1.9688,-1.375 -0.4374,-1.8125 z m 55.7187,0.125 3.9375,2.6875 2.125,8.96875 -2.2812,4.15625 -0.375,-1.59375 1.125,-2.0625 -2.125,-9 -1.9376,-1.34375 -0.4687,-1.8125 z m -61.9375,1.34375 3.9375,2.6875 2.125,9 -0.2813,0.5 c -0.49,-0.3696 -0.9792,-0.7463 -1.4687,-1.125 l -1.875,-7.875 -1.9687,-1.34375 -0.4688,-1.84375 z m 55.75,0.125 3.9062,2.6875 2.125,8.96875 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.0625 -2.125,-8.96875 -1.9687,-1.375 -0.4375,-1.8125 z m -61.9062,1.375 3.875,2.65625 0.4374,1.90625 c -1.3626,-1.1602 -2.7241,-2.35915 -4.0937,-3.59375 l -0.2187,-0.96875 z m 55.6874,0.0937 3.9376,2.6875 2.125,9 -2.2813,4.15625 -0.375,-1.625 1.1563,-2.0625 -2.1563,-8.96875 -1.9375,-1.375 -0.4688,-1.8125 z m -6.1874,1.5 3.9062,2.65625 2.125,9 -2.2812,4.15625 -0.375,-1.625 1.1562,-2.03125 -2.125,-9 -1.9688,-1.34375 -0.4374,-1.8125 z m -6.2188,1.46875 3.9062,2.65625 2.1563,9 -2.2813,4.15625 -0.375,-1.59375 1.1563,-2.0625 -2.1563,-9 -1.9374,-1.34375 -0.4688,-1.8125 z m -6.1875,1.46875 3.9063,2.6875 2.125,8.96875 -2.2813,4.15625 -0.375,-1.59375 1.1563,-2.0625 -2.125,-9 -1.9688,-1.34375 -0.4375,-1.8125 z m -6.1875,1.46875 3.875,2.6875 2.1562,8.96875 -2.2812,4.15625 -0.375,-1.59375 1.1562,-2.0625 -2.1562,-8.96875 -1.9375,-1.375 -0.4375,-1.8125 z m -6.2188,1.46875 3.9376,2.6875 2.0937,9 -1.4687,2.6875 c -0.3242,-0.1739 -0.6459,-0.35425 -0.9688,-0.53125 l 0.9375,-1.6875 -2.125,-8.96875 -1.9687,-1.375 -0.4376,-1.8125 z m -6.1874,1.46875 3.9062,2.6875 1.7188,7.34375 c -0.6386,-0.3822 -1.2714,-0.7923 -1.9063,-1.1875 l -1.3437,-5.65625 -1.9376,-1.34375 -0.4374,-1.84375 z m 55.7187,0.15625 3.9375,2.6875 0.4375,1.90625 c -0.3355,0.4582 -0.7835,0.8667 -1.3437,1.25 l -0.625,-2.65625 -1.9688,-1.375 -0.4375,-1.8125 z m -61.9375,1.34375 3.9375,2.65625 0.2187,0.875 c -1.3392,-0.9325 -2.6676,-1.90955 -4,-2.90625 l -0.1562,-0.625 z m 55.75,0.125 3.9062,2.6875 1,4.28125 -1.4062,0.84375 -1.125,-4.625 -1.9688,-1.375 -0.4062,-1.8125 z m -6.2188,1.46875 3.9376,2.6875 1.4687,6.25 -1.4375,0.875 -1.5625,-6.625 -1.9687,-1.34375 -0.4376,-1.84375 z m -6.1874,1.5 3.9062,2.65625 1.9688,8.21875 -1.4376,0.875 -2.0624,-8.59375 -1.9688,-1.34375 -0.4062,-1.8125 z m -6.2188,1.46875 3.9375,2.6875 2.125,8.96875 -1.125,2.0625 -1.4375,0.875 -0.0938,-0.375 1.125,-2.0625 -2.125,-9 -1.9687,-1.34375 -0.4375,-1.8125 z m -6.1875,1.46875 3.9063,2.6875 2.1562,8.96875 -1.0625,1.9375 c -0.3644,-0.1245 -0.7317,-0.2478 -1.0937,-0.375 l 0.5937,-1.0625 -2.125,-9 -1.9687,-1.34375 -0.4063,-1.8125 z m -6.2187,1.46875 3.9374,2.6875 1.75,7.4375 c -0.6127,-0.2402 -1.2058,-0.5012 -1.8124,-0.75 l -1.4688,-6.1875 -1.9688,-1.375 -0.4374,-1.8125 z m -6.1876,1.46875 3.9063,2.6875 0.6875,2.84375 c -0.6278,-0.293 -1.2527,-0.60285 -1.875,-0.90625 l -0.3438,-1.4375 -1.9687,-1.34375 -0.4063,-1.84375 z m 24.7188,7.53125 0.8438,0.5625 -0.625,0.375 -0.2188,-0.9375 z m -6.2188,1.46875 2.5938,1.78125 -1.1562,0.71875 -0.0313,0 -0.9375,-0.6875 -0.4688,-1.8125 z"
         style="fill:url(#linearGradient33482);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path46091"
         d="m -212.3511,490.19116 0.1563,0.0625 36,18.78125 0.2187,0.0937 0.0313,0.25 c 13.0609,71.11757 27.4268,119.73913 44.2187,165.65625 l 0.0313,0.0625 0,0.0625 c 0.2531,2.07237 0.902,4.32591 0.875,6.46875 -0.0272,2.13105 -0.8594,4.1868 -3.375,5.5 l -0.0313,0.0312 -25.7187,15.46875 -0.1876,0.125 -0.2187,-0.0625 c -22.0354,-7.06756 -39.6106,-18.65466 -58.9375,-37.875 -6.2238,-6.18945 -8.9254,-5.99902 -12.625,-20.96875 l 0,-0.0312 c -13.329,-42.24754 -22.5666,-86.91328 -32.75,-131 l -0.0938,-0.3125 0.25,-0.1875 c 23.654,-17.88935 27.1871,-19.66412 52.0313,-22.09375 l 0.125,-0.0312 z m -0.2187,1.03125 c -24.4901,2.40308 -27.7726,4.07973 -51.0626,21.6875 10.1611,44.01081 19.3748,88.56579 32.6563,130.65625 l 0.0313,0 0,0.0312 c 3.6775,14.89931 6.0028,14.19404 12.3437,20.5 19.1985,19.09257 36.5841,30.53923 58.375,37.5625 l 25.5313,-15.375 0,-0.0312 0.0312,0 c 2.2655,-1.16645 2.8194,-2.70167 2.8438,-4.625 0.0238,-1.88504 -0.5685,-4.10705 -0.8438,-6.25 -0.008,-0.0213 -0.0236,-0.0412 -0.0312,-0.0625 -0.003,-0.021 0.003,-0.0415 0,-0.0625 -16.7683,-45.86822 -31.1415,-94.47223 -44.1876,-165.4375 l -35.6874,-18.59375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path46027"
         d="m -233.9761,491.44116 c -8.2242,6.21588 -21.0286,12.85519 -27.9375,20.90625 9.2812,48.7812 23.4127,103.97403 36.5,144.40625 l 28.7188,27.53125 -5.4376,0.0625 -26.4687,-25.15625 c -16.5901,-49.65861 -28.6011,-102.47157 -37.5313,-146.09375 l -0.0312,-0.125 0,-0.0937 c 1.4402,-5.48667 9.2058,-11.56747 16.5938,-16.4375 4.9534,-1.67913 9.9673,-3.32271 14.2187,-4.59375 l 1.375,-0.40625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3860"
         d="m -240.7261,493.19116 c -6.844,5.0463 -15.156,7.28042 -24.9375,19.375 5.1208,25.33964 13.1487,60.04814 20.7188,89.25 3.8043,14.67628 7.5073,27.95309 10.625,37.9375 1.5586,4.99221 2.9686,9.15062 4.1874,12.25 1.2192,3.09938 2.3181,5.17646 2.9376,5.78125 2.5567,3.41341 26.3437,26.09375 26.3437,26.09375 0,0 -18.2066,-16.72507 -27.0625,-25.375 -0.9471,-0.92503 -1.9224,-2.98739 -3.1562,-6.125 -1.2342,-3.13761 -2.6558,-7.30676 -4.2188,-12.3125 -3.1259,-10.01148 -6.818,-23.31394 -10.625,-38 -7.5542,-29.14155 -15.5906,-63.7464 -20.7188,-89.09375 l -13.7187,-2.3125 c 4.6719,-2.32227 10.8977,-5.84161 15.5937,-8 8.6098,-3.95703 15.6741,-6.32581 24.0313,-9.46875 z"
         style="fill:#999999;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4397"
         d="m -279.6948,510.22241 c 23.3611,103.80129 30.7952,119.19006 41.4062,152.1875 -26.6076,-72.9658 -30.229,-93.84966 -43.3438,-151.75 l 1.9376,-0.4375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:0.54741378;color:#000000;fill:url(#linearGradient33488);fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path45958"
         d="m -151.6636,515.90991 c 7.6549,48.1356 12.8752,93.56887 14.4688,109.03125 -3.687,-14.1352 -9.956,-63.16178 -14.4688,-109.03125 z"
         style="opacity:0.82325583;fill:url(#radialGradient33491);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3862"
         d="m -280.8198,510.59741 14.5624,2.46875 c 10.2593,51.327 22.0636,100.72259 37.6876,145.34375 l 26.4062,25.96875 c -11.8784,-3.30994 -12.8517,-3.2344 -35.7812,-20.625 -0.625,-0.80399 -1.8539,-3.18742 -3.25,-6.59375 -1.3963,-3.40633 -3.061,-7.88034 -4.875,-13.1875 -3.6281,-10.61431 -7.9013,-24.54319 -12.2813,-39.875 -8.7039,-30.46635 -17.7372,-66.54451 -22.4687,-93.5 z"
         style="fill:#1a1a1a;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path17467"
         d="m -242.2886,493.78491 -37.2812,17.03125 -2.0626,-0.15625 c 0,0 17.1494,-9.2913 39.3438,-16.875 z"
         style="fill:#333333;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4329"
         d="m 253.0552,764.12866 c 0.9742,0.0205 1.4996,0.66958 1.9374,2.0625 3.7718,6.57428 5.7272,16.20884 8.1876,24.96875 l -4.0626,14.15625 c -1.8886,-13.49395 -3.7385,-26.9748 -8.8437,-40.46875 l 1.625,-0.53125 c 0.4307,-0.13555 0.8315,-0.19432 1.1563,-0.1875 z"
         style="fill:#0b0b0b;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4036"
         d="m -89.663596,446.53491 c 80.3848999,32.83977 138.6423,49.09461 200.906196,68.34375 l -272.5,-51.4375 c 23.0393,-9.56778 48.4929,-14.11162 71.593804,-16.90625 z"
         style="fill:url(#linearGradient33497);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4098"
         d="m -89.757396,446.56616 c 0.3178,0.12977 0.6206,0.24575 0.9376,0.375 -23.015104,2.80365 -48.282904,7.3546 -71.250004,16.78125 -0.3822,-0.10477 -0.7443,-0.20855 -1.125,-0.3125 22.998,-9.52379 48.3885,-14.0554 71.437404,-16.84375 z"
         style="fill:url(#radialGradient33500);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4365"
         d="m -142.1948,509.81616 34.125,9.03125 -0.0938,0.875 -33.5625,-8.90625 c -0.2075,-0.34782 -0.3709,-0.6741 -0.4687,-1 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33503);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path46104"
         d="m -142.8511,501.03491 0.2813,1.1875 c 0.3502,1.47935 1.5555,2.93797 2.6874,3.28125 l 25.3438,6.8125 c 0.8239,0.24989 1.3615,-0.18416 1.4688,-1 l 3.9687,1.03125 -0.2187,2.375 -30.0938,-8 c -3.1366,-0.97829 -4.5569,-2.61738 -3.4375,-5.6875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient4315);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="rect4285"
         d="m -144.3198,494.56616 22.4687,6.8125 c 7.3742,2.40143 12.2962,7.94145 2.0313,8.5625 l -22.4688,-6.8125 c -2.7467,-0.93266 -4.0314,-9.00492 -2.0312,-8.5625 z"
         style="fill:#300f00;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4223"
         d="m -153.7886,489.47241 c 0.6218,0.007 1.2473,0.12158 1.6875,0.15625 l 37.6875,11.90625 c -0.4429,1.28645 -4.3173,-0.53125 -5.5312,-0.53125 l -33.5626,-10.59375 c -1.1248,-0.47377 -2.2567,0.21706 -2.4062,0.71875 0.0956,-1.39045 1.0887,-1.66856 2.125,-1.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33507);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4181"
         d="m -74.507396,363.40991 c 7.9173,0.27158 13.444,0.97228 20.0313,2.90625 -14.9173,22.79266 -38.5631,44.07248 -58.718704,65.65625 l -17.5313,-2.28125 c -1.8949,-7.71506 -2.5233,-15.28494 -3.0937,-23 18.5441,-15.16335 35.391504,-30.96439 59.312404,-43.28125 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4259"
         d="m -68.694796,363.78491 c 0.3887,0.0372 0.771,0.0832 1.1562,0.125 l -0.25,0.375 -1.2812,-0.0312 0.3437,-0.46875 c 0.01,9.7e-4 0.0211,-9.8e-4 0.0313,0 z m -6.75,0.125 6.2187,0.3125 2.3125,3.625 -1.125,-0.0312 -1.1562,-1.84375 -6.2188,-0.25 -1.2188,1.6875 -1.25,-0.0625 2.4376,-3.4375 z m 17.0937,1.5 c 1.8219,0.3989 3.6094,0.83982 5.3437,1.34375 l -4.8437,-0.21875 -1.2187,1.6875 -1.25,-0.0625 1.9687,-2.75 z m -23.0937,1.78125 3.375,0.15625 2.3124,3.65625 -1.125,-0.0625 -1.125,-1.8125 -6.1874,-0.3125 c 0.9115,-0.54366 1.8165,-1.08916 2.75,-1.625 z m -2.75,1.625 -1.2813,1.71875 -1.25,-0.0625 0.1875,-0.25 c 0.7694,-0.47592 1.5611,-0.93949 2.3438,-1.40625 z m 17.4374,-0.9375 6.25,0.28125 2.3126,3.65625 -1.125,-0.0312 -1.125,-1.84375 -6.25,-0.3125 -1.2188,1.71875 -1.25,-0.0312 2.4062,-3.4375 z m -20.125,2.59375 2.3126,3.65625 -1.125,-0.0625 -1.1563,-1.8125 -2.6875,-0.125 c 0.8571,-0.55268 1.7192,-1.11222 2.5938,-1.65625 l 0.0624,0 z m 11.3126,0.53125 6.2187,0.28125 2.3125,3.65625 -1.125,-0.0937 -1.125,-1.78125 -6.2188,-0.3125 -1.2187,1.75 -1.25,-0.0937 2.4063,-3.40625 z m 17.5624,0.8125 0.375,0.0312 -1.4687,1.5 1.0937,-1.53125 z m -26.375,2.3125 6.1876,0.28125 2.3437,3.65625 -1.1563,-0.0625 -1.125,-1.84375 -6.1874,-0.28125 -1.2813,1.71875 -1.25,-0.0312 2.4687,-3.4375 z m 17.5313,0.8125 5.9063,0.3125 -1.5938,1.65625 -4.2812,-0.21875 -1.2188,1.71875 -1.25,-0.0312 2.4375,-3.4375 z m -27.6875,0.5 1.1562,1.78125 -1.1562,-0.0312 -0.75,-1.21875 c 0.2505,-0.17378 0.4982,-0.35814 0.75,-0.53125 z m 1.3438,1.84375 6.1874,0.25 2.3126,3.625 -1.125,-0.0625 -1.125,-1.8125 -6.1876,-0.25 -1.2812,1.65625 -1.25,-0.0312 2.4688,-3.375 z m 17.5,0.78125 6.2187,0.28125 2.1875,3.4375 -0.1562,0.1875 -0.8126,-0.0625 -1.1562,-1.78125 -6.25,-0.28125 -1.1875,1.6875 -1.2813,-0.0625 2.4376,-3.40625 z m -25.750004,2.34375 5.593704,0.21875 2.3125,3.6875 -1.125,-0.0625 -1.125,-1.8125 -6.218804,-0.28125 -1.2187,1.6875 -1.25,-0.0625 1.75,-2.4375 c 0.4204,-0.31637 0.8577,-0.62275 1.2813,-0.9375 z m 16.906204,0.8125 6.2188,0.25 2.3437,3.6875 -1.125,-0.0625 -1.1563,-1.84375 -6.1874,-0.28125 -1.25,1.6875 -1.25,-0.0312 2.4062,-3.40625 z m -21.312504,2.5 1.1563,0.0625 2.3437,3.65625 -1.125,-0.0625 -1.1563,-1.84375 -3.3124,-0.15625 c 0.6994,-0.5508 1.387,-1.10922 2.0937,-1.65625 z m 12.531304,0.59375 6.1874,0.3125 2.3438,3.625 -1.1562,-0.0625 -1.125,-1.84375 -6.1876,-0.28125 -1.2812,1.71875 -1.25,-0.0625 2.4688,-3.40625 z m 17.5312,0.8125 5.0625,0.21875 -1.6563,1.71875 -3.4062,-0.15625 -1.1875,1.71875 -1.25,-0.0937 2.4375,-3.40625 z m -26.375004,2.28125 6.187504,0.3125 2.3125,3.625 -1.0938,-0.0625 -1.1562,-1.78125 -6.187504,-0.3125 -1.25,1.71875 -1.2813,-0.0625 2.4688,-3.4375 z m 17.531204,0.8125 6.1876,0.34375 1.8437,2.875 -0.6563,0.65625 -1.125,-1.78125 -6.2187,-0.28125 -1.2187,1.6875 -1.25,-0.0625 2.4374,-3.4375 z m -27.656204,0.625 1.0938,1.6875 -1.125,-0.0625 -0.6876,-1.0625 c 0.2352,-0.19123 0.4832,-0.37158 0.7188,-0.5625 z m 1.2812,1.75 6.1876,0.25 2.3437,3.65625 -1.125,-0.0312 -1.1563,-1.875 -6.1874,-0.28125 -1.25,1.71875 -1.25,-0.0312 2.4374,-3.40625 z m 17.531304,0.8125 6.2187,0.25 2.3438,3.65625 -1.125,-0.0625 -1.1562,-1.84375 -6.1876,-0.25 -1.25,1.6875 -1.25,-0.0312 2.4063,-3.40625 z m -24.781304,2.34375 4.625,0.21875 2.3126,3.65625 -1.125,-0.0625 -1.1563,-1.8125 -6.1875,-0.28125 -1.25,1.71875 -1.25,-0.0937 c 1.3365,-1.11908 2.6899,-2.22876 4.0312,-3.34375 z m 15.9688,0.75 6.218804,0.3125 2.3124,3.625 -1.1562,-0.0625 -1.125,-1.8125 -6.187504,-0.28125 -1.25,1.71875 -1.25,-0.0937 2.4375,-3.40625 z m 17.531204,0.8125 4.1876,0.21875 -1.625,1.6875 -2.5313,-0.125 -1.2187,1.71875 -1.25,-0.0937 2.4374,-3.40625 z m -37.625004,1.875 2.2188,3.53125 -1.0938,-0.0312 -1.1562,-1.84375 -1.8438,-0.0937 c 0.6232,-0.52199 1.2521,-1.04087 1.875,-1.5625 z m 11.25,0.4375 6.2188,0.3125 2.3125,3.625 -1.125,-0.0625 -1.1563,-1.8125 -6.1874,-0.3125 -1.25,1.71875 -1.25,-0.0625 2.4374,-3.40625 z m 17.562604,0.8125 6.1874,0.3125 1.4688,2.28125 -0.625,0.6875 -0.7812,-1.21875 -6.1876,-0.3125 -1.25,1.71875 -1.25,0 2.4376,-3.46875 z m -26.375004,2.3125 6.1874,0.28125 2.3126,3.625 -1.125,-0.0625 -1.1563,-1.78125 -6.1563,-0.28125 -1.2812,1.6875 -1.25,-0.0312 2.4688,-3.4375 z m 17.5312,0.8125 6.218804,0.28125 2.3124,3.65625 -1.125,-0.0625 -1.1562,-1.8125 -6.187504,-0.25 -1.25,1.65625 -1.25,-0.0312 2.4375,-3.4375 z m -27.0625,1.53125 0.5,0.78125 -1.0937,-0.0625 -0.0938,-0.15625 c 0.2284,-0.18951 0.4594,-0.37288 0.6875,-0.5625 z m 0.6875,0.78125 6.1875,0.25 2.3125,3.6875 -1.0938,-0.0312 -1.1562,-1.84375 -6.2188,-0.28125 -1.2187,1.71875 -1.25,-0.0937 2.4375,-3.40625 z m 17.5312,0.8125 6.2188,0.28125 2.3125,3.65625 -1.125,-0.0312 -1.1563,-1.84375 -6.1874,-0.28125 -1.2188,1.71875 -1.2812,-0.0937 2.4374,-3.40625 z m 17.562604,0.84375 3.3124,0.125 -1.625,1.6875 -1.6562,-0.0625 -1.2188,1.71875 -1.25,-0.0625 2.4376,-3.40625 z m -40.062604,1.65625 2.3438,0.125 2.3125,3.625 -1.0937,-0.0312 -1.1563,-1.84375 -2.25,-0.125 c -0.045,-0.58276 -0.1128,-1.16598 -0.1563,-1.75 z m 13.6876,0.625 6.1874,0.3125 2.3126,3.625 -1.125,-0.0625 -1.1563,-1.8125 -6.1563,-0.3125 -1.2812,1.71875 -1.25,-0.0625 2.4688,-3.40625 z m 17.5312,0.8125 6.187504,0.3125 1.125,1.75 -0.6563,0.65625 -0.4062,-0.625 -6.187504,-0.3125 -1.25,1.71875 -1.25,-0.0937 2.4375,-3.40625 z m -26.375,2.28125 6.1875,0.3125 2.3125,3.625 -1.0938,-0.0625 -1.1562,-1.78125 -6.1875,-0.3125 -1.25,1.71875 -1.2813,-0.0625 2.4688,-3.4375 z m 17.5312,0.8125 6.2188,0.34375 2.3125,3.625 -1.125,-0.0312 -1.125,-1.84375 -6.2187,-0.3125 -1.2188,1.71875 -1.2812,-0.0312 2.4374,-3.46875 z m -21.7812,2.53125 1.625,0.0937 2.3125,3.65625 -1.0937,-0.0625 -1.1563,-1.84375 -1.5,-0.0625 c -0.063,-0.59306 -0.1301,-1.18779 -0.1875,-1.78125 z m 12.9375,0.65625 6.2187,0.25 2.3438,3.65625 -1.1562,-0.0625 -1.125,-1.84375 -6.2188,-0.25 -1.2188,1.6875 -1.2812,-0.0312 2.4375,-3.40625 z m 17.5937,0.78125 2.4688,0.125 -1.6562,1.6875 -0.7813,-0.0312 -1.25,1.71875 -1.25,-0.0625 2.4687,-3.4375 z m -26.4062,2.3125 6.2188,0.25 2.2812,3.6875 -1.0938,-0.0625 -1.1562,-1.8125 -6.1875,-0.28125 -1.25,1.71875 -1.2813,-0.0937 2.4688,-3.40625 z m 17.5625,0.8125 6.1875,0.28125 0.75,1.1875 -0.6562,0.6875 -0.0313,-0.0625 -6.2187,-0.3125 -1.25,1.71875 -1.25,-0.0937 2.4687,-3.40625 z m -20.8125,2.59375 0.625,0.0312 2.3125,3.625 -1.0937,-0.0312 -1.1563,-1.84375 -0.4375,-0.0312 c -0.097,-0.58234 -0.1633,-1.16817 -0.25,-1.75 z m 11.9375,0.53125 6.2187,0.3125 2.3438,3.65625 -1.125,-0.0937 -1.1562,-1.8125 -6.1876,-0.3125 -1.25,1.71875 -1.25,-0.0312 2.4063,-3.4375 z m -8.8125,3.125 6.2188,0.28125 2.3124,3.65625 -1.125,-0.0625 -1.1562,-1.8125 -6.1875,-0.28125 -1.2187,1.71875 -0.625,-0.0312 c -0.058,-0.25237 -0.1321,-0.49786 -0.1876,-0.75 l 1.9688,-2.71875 z m 17.5625,0.8125 1.5937,0.0625 -3.2812,3.40625 -0.7812,-0.0312 2.4687,-3.4375 z m -8.8437,3.15625 6.1874,0.25 0.4063,0.65625 -1.0313,1.0625 -1.375,-0.0625 -5.2187,-0.4375 1.0313,-1.46875 z"
         style="fill:url(#linearGradient33511);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4188"
         d="m -74.507396,363.40991 -59.312404,43.28125 c -13.0442,0.64818 -25.683,2.48335 -39.125,1.9375 32.0248,-16.63832 65.0019,-31.40176 98.437404,-45.21875 z"
         style="fill:#666666;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4384"
         d="m -116.6011,429.34741 8.75,7 c -11.777,0.10452 -18.713,11.37996 -21.3437,4.4375 0.1001,-3.36542 -0.0626,-10.78125 -0.0626,-10.78125 0,0 9.9472,-0.66293 12.6563,-0.65625 z"
         style="fill:url(#radialGradient33515);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4298"
         d="m -172.9136,408.62866 c 17.4923,7.89426 32.881,16.97194 43.6562,21.375 0,0 0.1316,7.44708 0.0313,10.8125 -0.9008,4.83842 -6.5916,3.59812 -7.3125,-6.03125 -0.4709,-6.29055 -28.6911,-22.39021 -36.375,-26.15625 z"
         style="fill:url(#radialGradient33518);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4205"
         d="m -73.351096,363.44116 c 5.2107,0.24051 13.1805,1.33108 18.875,2.875 l -0.8125,1.09375 c -5.5144,-1.48235 -11.7241,-2.3667 -18.125,-2.6875 -11.7341,4.00243 -46.176104,32.22054 -57.156204,39.8125 -1.9701,1.35159 -1.2188,7.46875 -1.2188,7.46875 l 2.0625,15.71875 c 5.2595,2.20251 8.2941,1.13667 13.125,1.625 l -1.2187,1.40625 c 0.108,0.0216 -12.6629,0.85059 -15.1563,-2.375 -0.648,-7.23543 -3.3119,-22.36688 -0.7187,-24.34375 11.0721,-8.44087 53.656504,-41.53191 60.343704,-40.59375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#999999;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.00696909;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4186"
         d="m -133.7886,406.65991 2.5312,18.96875 c 0.4166,3.63824 1.4133,4.51514 -2.1874,2.71875 l -39.4688,-19.71875 39.125,-1.96875 z"
         style="fill:#4d4d4d;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4310"
         d="m -73.351096,363.44116 c 5.2107,0.24051 13.1805,1.33108 18.875,2.875 l -0.8125,1.09375 c -5.5144,-1.48235 -11.7241,-2.3667 -18.125,-2.6875 -11.7341,4.00243 -57.156204,39.8125 -57.156204,39.8125 -2.1326,2.66171 -1.2878,5.02718 -1.2188,7.46875 l 2.0625,15.71875 c 5.2595,2.20251 14.2248,1.24035 17.0937,0.9375 l -2.0937,2.1875 c 0.1082,0.0216 -16.9498,0.0939 -18.25,-2.46875 0.19,-7.95202 -3.4998,-21.55713 -1.0937,-23.96875 0,0 54.031504,-41.90691 60.718704,-40.96875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#808080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.00696909;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4209"
         d="m -72.101096,363.97241 c 5.2107,0.24051 13.1805,1.33108 18.875,2.875 l -0.2187,0.3125 c -5.6098,-1.42031 -12.9921,-2.42798 -17.9376,-2.65625 -6.687,-0.93816 -60.749904,40.96875 -60.750004,40.96875 l -0.9687,3.03125 c 0.6056,6.32773 2.1736,17.71212 2.4687,20.0625 8.4178,2.10071 15.3423,1.31928 15.2813,1.3125 l -0.4063,0.4375 c -5.7185,0.1875 -14.9999,-1.03125 -15,-1.03125 l -0.875,-0.375 c 0,0 -2.1875,-20.9375 -2.1874,-20.9375 l 1,-3.03125 c 0,0 54.031504,-41.90691 60.718704,-40.96875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient33524);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.00696909;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4238"
         d="m 59.211404,343.94116 c 69.495296,0.84592 121.299396,38.31588 163.999996,139.4375 -42.3591,6.54597 -88.7511,35.4936 -111.9688,31.46875 C 48.978804,495.59827 -9.2786961,479.37468 -89.663596,446.53491 l -28.187504,-15.78125 51.656304,-59.0625 10.25,-3.34375 2.5312,-3.5 c 40.8029,-12.92047 76.9618,-20.76332 109.3125,-20.90625 1.1121,-0.005 2.2094,-0.0134 3.3125,0 z"
         style="fill:#1a1a1a;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3649"
         d="m 57.680204,348.56616 c 37.4716,0.31717 74.861996,11.68395 102.062396,39.46875 26.2354,26.07055 44.1929,59.80715 59,94.375 l -6.5,1.75 C 192.5071,438.5624 165.6519,392.75099 122.4302,369.53491 79.642904,346.52775 29.111504,350.7227 -16.226096,362.06616 c -11.7757,3.12867 -23.7392,6.08512 -35,10.5625 -4.0702,4.39536 -10.0681,5.81445 -14.9063,8.3125 -14.7201,18.10747 -44.312404,53.96875 -44.312404,53.96875 l -3.8126,-2.125 c 0,0 33.628504,-42.51816 48.718804,-59.65625 6.4086,-0.78062 11.1563,-5.84587 16.5938,-8.59375 33.3632,-10.8712 67.9461,-16.17794 103,-15.96875 1.2084,-0.0126 2.4162,-0.0102 3.625,0 z"
         style="fill:#808080;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7017"
         d="m 171.8364,415.03491 c 16.3627,21.86967 31.197,44.2355 39.1562,68.90625 l -39.875,13.03125 c 11.5125,-4.55652 23.4964,-10.52669 28.75,-13.09375 1.4769,-7.47686 -19.4137,-43.47931 -23.1562,-44.28125 -9.2951,3.11906 -28.6554,50.93313 -31.2188,62.25 1.8067,1.36241 5.4366,1.21899 10.0626,0.1875 l -31.1876,10.1875 c 11.2514,-32.40069 24.988,-64.78681 47.4688,-97.1875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4326"
         d="M 49.336404,353.81616 C 133.3132,354.9156 184.4257,413.9282 210.6489,484.40991 c -17.7601,4.57165 -35.5748,11.56934 -51.8125,17.78125 -20.8459,7.97508 -30.4235,17.11118 -80.343796,4.4375 -29.901,-3.6017 -215.034004,-71.84451 -176.375,-67.5625 42.5628,-45.4375 47.6758,-68.82818 98.81259995,-80 15.64830005,-3.40381 30.44730005,-5.12706 44.37500005,-5.25 1.3493,-0.0119 2.6982,-0.0174 4.0312,0 z"
         style="fill:url(#radialGradient33530);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3830"
         d="m 36.898904,359.40991 c 47.9562,-0.32173 96.520296,17.43062 119.437496,41.71875 -65.656296,23.41364 -146.6703961,-5.82875 -202.499996,17.875 l 4.7188,-8.28125 -29.1563,-0.40625 c 23.3311,-36.28611 65.1856999,-50.62237 107.5,-50.90625 z"
         style="fill:url(#linearGradient33533);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5014"
         d="m 44.992604,353.65991 c 89.923396,0.9031 120.624996,53.9375 120.624996,53.9375 0,0 -27.4681,-34.55609 -75.999996,-46.53125 -49.0079,-12.09268 -119.634,0.54978 -146,13.96875 -22.6603,17.66613 -51.375004,57.15625 -51.375004,57.15625 l -1.3437,-1.09375 c 0,0 22.303904,-34.75541 51.406304,-57.0625 17.2142,-7.29114 46.4687,-14.84375 46.4687,-14.84375 20.8964999,-4.07626 39.5664,-5.69849 56.2187,-5.53125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4197"
         d="m 172.6489,416.09741 c 6.0614,0.76354 44.3251,69.43702 38.6875,68.5625 -11.4896,-22.86013 -20.5891,-40.92227 -39.4375,-67.75 0.0952,-0.59344 0.3459,-0.8634 0.75,-0.8125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4235"
         d="m -49.476096,371.47241 c 0.9055,3.37946 0.8263,7.65731 -0.6875,9.5 -15.9167,19.37498 -47.75,58.125 -47.75,58.125 l -1.1562,-0.96875 47.6562,-57.96875 c 3.1796,-3.86764 0.9292,-6.07884 0.4688,-8.375 l 1.4687,-0.3125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:0.25;color:#000000;fill:url(#radialGradient33538);fill-opacity:1;stroke:none;stroke-width:1.5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4266"
         d="m -54.538596,375.34741 c 0.1217,-3.2e-4 0.2419,0.0142 0.3438,0.0312 1.7928,0.2992 0.6132,3.21658 -0.9688,6.4375 -16.0144,19.46276 -30.5456,38.01225 -44.5,56.1875 l -6.781204,-3.75 c 13.497804,-18.21868 24.808004,-34.53145 47.718704,-57.4375 1.9952,-1.02324 3.3355,-1.46653 4.1875,-1.46875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:8;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3983"
         d="m 165.0552,406.97241 c 2.7453,3.10507 5.4492,6.36479 8.125,9.78125 -19.7259,32.47391 -36.2447,57.59246 -48.4376,97.59375 -4.7255,0.85325 -9.0091,1.11269 -12.7187,0.59375 13.2108,-45.43666 31.827,-72.87558 53.0313,-107.96875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:12;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4053"
         d="m 166.5864,408.72241 c 1.5411,1.78351 3.0438,3.61753 4.5625,5.5 -15.6639,20.74598 -30.3388,47.5501 -39.7187,66.5625 7.7772,-21.76242 12.6822,-33.82868 13.8124,-36.5625 6.6938,-11.60624 13.8607,-23.17954 21.3438,-35.5 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient33543);fill-opacity:1;stroke:none;stroke-width:12;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3977"
         d="m 171.8364,415.03491 c 0.44,0.55084 0.8743,1.12822 1.3125,1.6875 -19.3636,32.08167 -35.7391,55.9669 -47.1875,97.40625 -0.7481,0.14813 -1.4925,0.2862 -2.2188,0.40625 11.6154,-42.59699 28.4363,-66.88605 48.0938,-99.5 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient33546);fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path3979"
         d="m 164.5552,406.40991 c 0.3514,0.39456 0.7123,0.78792 1.0624,1.1875 -21.3469,35.32269 -39.4316,61.81659 -52.125,107.53125 -0.5137,-0.0421 -1.0057,-0.11774 -1.5,-0.1875 12.803,-46.2149 31.0979,-72.9852 52.5626,-108.53125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient33549);fill-opacity:1;stroke:none;stroke-width:1.5;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4096"
         d="m 145.9614,442.47241 c 0,0 -11.0574,26.30772 -26.2812,72.5625 -2.5738,0.23242 -4.9775,0.23542 -7.1876,-0.0312 12.0202,-32.44762 33.4688,-72.53125 33.4688,-72.53125 z"
         style="fill:url(#linearGradient33552);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5137"
         d="m 46.430204,350.97241 c 46.5771,0.43225 92.036496,15.53409 119.187396,56.625 -59.4007,-74.69216 -158.8872961,-57.66696 -227.499996,-33.875 30.3471,-13.39404 69.7197999,-23.10815 108.3126,-22.75 z"
         style="fill:#666666;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5065"
         d="m -8.8197961,360.59741 -5.5937999,8.34375 c -12.998,6.32274 -24.2411,7.36209 -40.9062,24.6875 l -37.5,48.15625 -5,-2.8125 47.6562,-58 c 0.026,-0.0322 0.0675,-0.0601 0.0938,-0.0937 l 0,-0.0312 c 0.9418,-1.25841 1.288,-3.50612 1.1562,-5.84375 -0.01,-0.31221 -0.0315,-0.59414 -0.0625,-0.875 -0.041,-0.36074 -0.0929,-0.70797 -0.1563,-1.03125 -0.0169,-0.0892 -0.0445,-0.16292 -0.0624,-0.25 -0.0328,-0.18067 -0.0914,-0.35124 -0.125,-0.53125 13.1954,-4.93391 26.6805,-8.92639 40.4999999,-11.71875 z"
         style="fill:url(#linearGradient33556);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5163"
         d="m -5.9135961,361.69116 c 1.4162,0.0812 2.8186,0.60154 4.0312,1.8125 -0.7281,0.8935 -1.4505,1.80724 -2.1562,2.6875 -15.0964999,18.82881 -25.1258999,34.65126 -33.3437999,49.5625 -2.982,0.95671 -5.894,2.03743 -8.75,3.25 l 4.6876,-8.28125 -5.8126,-0.0937 c 7.5041,-12.37322 17.4806,-26.34937 31.3126,-43.15625 1.2435,-2.17202 5.7827,-6.02496 10.0311999,-5.78125 z"
         style="fill:#333333;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5220"
         d="m -46.351096,410.62866 4.9063,0.0937 -4.6876,8.28125 c 2.8563,-1.21257 5.7682,-2.29329 8.75,-3.25 -1.1225,2.03751 -2.2167,4.05395 -3.2812,6.0625 -6.5252,12.31259 -13.687,25.62698 -16.6562,35 l -8.6876,-3.375 c 0,0 6.3725,-16.38308 11.1876,-25.5 2.4192,-5.22238 5.2631,-11.08174 8.4687,-17.3125 z"
         style="fill:url(#linearGradient33560);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4299"
         d="m -17.882396,369.87866 c -0.2732,0.33574 -0.5423,0.66652 -0.8124,1 -11.2836,4.81145 -21.8146,7.35265 -36.625,22.75 l -37.5,48.15625 -0.5313,-0.28125 37.4375,-48.0625 c 15.3908,-16.00046 26.2855,-18.50327 38.0312,-23.5625 z"
         style="opacity:0.5;fill:url(#radialGradient33563);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3966"
         d="m 298.1489,476.94116 c 46.7972,0.2947 92.79311,1.90036 144.59375,7.21875 l -1.21875,5.09375 c -37.28449,-6.02104 -81.5839,-6.96452 -117.5937,-7.8125 l -25.7813,-4.5 z"
         style="fill:#222222;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4757"
         d="m 298.1489,476.94116 c 0.7091,0.004 1.4163,0.0262 2.125,0.0312 l 23.6563,4.09375 c 36.0098,0.84798 80.30921,1.79146 117.5937,7.8125 l 1.15625,-4.75 c 0.0311,0.003 0.0626,-0.003 0.0937,0 l -1.25,5.09375 c -37.28449,-6.02104 -81.5839,-6.96452 -117.5937,-7.8125 l -25.7813,-4.46875 z"
         style="fill:url(#radialGradient4484);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4766"
         d="m 423.5864,474.90991 25.1875,0.0937 -0.0937,6 -33.59375,-3 8.5,-3.09375 z"
         style="fill:#333333;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4762"
         d="m 445.80515,475.22241 1.71875,0.0625 -0.15625,5.5625 -1.71875,-0.0625 0.15625,-5.5625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.70388997;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4776"
         d="m 643.0864,475.75366 c 35.6444,0 106.78125,2.1875 106.78125,2.1875 l -0.0937,3 c 0,0 -71.16474,-2.1875 -106.6875,-2.1875 -35.52276,0 -106.71875,2.1875 -106.71875,2.1875 l -0.0937,-3 c 0,0 71.1681,-2.1875 106.8125,-2.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#333333;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4779"
         d="m 644.7114,477.75366 c 35.6444,0 106.8125,2.1875 106.8125,2.1875 l -0.0937,3 c 0,0 -71.19599,-2.1875 -106.71875,-2.1875 -35.52276,0 -106.6875,2.1875 -106.6875,2.1875 l -0.0937,-3 c 0,0 71.13685,-2.1875 106.78125,-2.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4781"
         d="m 644.7114,480.87866 c 35.6444,0 106.8125,2.1875 106.8125,2.1875 l -0.0937,3 c 0,0 -71.19599,-2.1875 -106.71875,-2.1875 -35.52276,0 -106.6875,2.1875 -106.6875,2.1875 l -0.0937,-3 c 0,0 71.13685,-2.1875 106.78125,-2.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4783"
         d="m 645.4614,483.00366 c 35.60385,0 106.78125,2.1875 106.78125,2.1875 l -0.0312,1 c 0,0 -71.18669,-2.1875 -106.75,-2.1875 -35.56331,0 -106.71875,2.1875 -106.71875,2.1875 l -0.0312,-1 c 0,0 71.14615,-2.1875 106.75,-2.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4789"
         d="m 643.0864,475.40991 c 35.6444,0 106.78125,2.15625 106.78125,2.15625 l -0.0312,0.625 c -0.0952,-0.003 -71.12947,-2.1875 -106.75,-2.1875 -35.62059,0 -106.6863,2.18458 -106.78125,2.1875 l -0.0312,-0.625 c 0,0 71.1681,-2.15625 106.8125,-2.15625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4774"
         d="m 614.3364,476.40991 0.125,5.875 -25.625,0 0,-5.875 25.5,0 z"
         style="fill:#0d0d0d;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4770"
         d="m 610.3364,469.90991 4,3.875 0,2.625 -48.5,0 -41.4375,13.8125 -75.875,-9.21875 0.25,-6 66.40625,7.5 45.65625,-12.59375 49.5,0 z"
         style="fill:#232323;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4875"
         d="m 610.8364,470.12866 3.96875,3.8125 0,2.5625 -48.125,0 -41.125,13.5 -75.25,-9.03125 0.25,-5.84375 65.875,7.3125 45.28125,-12.3125 49.125,0 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4791"
         d="m 602.3989,474.09741 c 6.52219,0.0437 11.59375,0.30238 11.59375,1.09375 0,0 -46.04651,-0.36095 -48.4375,0 -2.66867,0.40287 -45.3125,14 -45.3125,14 0,0 37.19821,-13.01897 45.3125,-14.75 0.59775,-0.0902 3.90941,-0.13933 8.5625,-0.15625 2.4741,0.27334 17.41094,-0.26027 28.28125,-0.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient4421);fill-opacity:1;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4837"
         d="m 641.5864,489.53491 44.625,0.0625 5.875,3.96875 0.0937,4.65625 -58.46875,-0.0312 c 0,-3.00103 0.89407,-6.72542 7.875,-8.65625 z"
         style="fill:#1a1a1a;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4839"
         d="m 856.8364,470.90991 5.8125,6.25 c -35.12291,5.05319 -65.3511,13.06241 -93.84375,22.09375 l -76.96875,-0.90625 0.25,-4.8125 -6.03125,-4.03125 77.75,0.90625 c 28.88634,-8.97876 57.62903,-16.38553 93.03125,-19.5 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4841"
         d="m 686.05515,489.50366 1.4375,0.0312 5.59375,3.78125 0.0312,5.09375 -0.9375,-0.0625 -0.0937,-4.8125 -6.03125,-4.03125 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#666666;fill-opacity:1;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4847"
         d="m 642.24265,489.94116 44.0625,0.0937 5.8125,3.625 0.125,4.3125 -57.78125,-0.0312 c 0,-2.76701 0.88646,-6.21974 7.78125,-8 z"
         style="fill:url(#linearGradient4865);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4423"
         d="m 644.7114,484.28491 c 35.6444,0 106.8125,2.1875 106.8125,2.1875 1.65203,0.44266 4.62829,0.0934 -0.0937,3 0,0 -71.19599,-2.1875 -106.71875,-2.1875 -35.52276,0 -106.6875,2.1875 -106.6875,2.1875 -7.61182,-1.20066 -3.74552,-2.81019 -0.0937,-3 0,0 71.13685,-2.1875 106.78125,-2.1875 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient4429);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path5248"
         d="m 294.5552,646.62866 c 20.9153,6.7284 22.8201,13.67133 3.375,14.15625 0.429,-6.49528 -1.0652,-9.59739 -3.375,-14.15625 z"
         style="fill:url(#radialGradient6749);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4988"
         d="m 668.30515,371.37866 c 119.67258,37.39963 170.97201,65.14539 266.59375,109.75 l -5.5625,-0.0625 C 840.32314,438.78856 774.50295,407.4781 668.30515,371.37866 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient33847);fill-opacity:1;stroke:none;stroke-width:4;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path5493"
         d="m 220.2426,697.78491 c 0.1881,0.0331 0.4458,0.21366 0.8126,0.5 l 2.9687,2.75 c 2.4672,1.21813 -1.9235,4.49034 -2.6875,2.09375 -0.775,-2.36819 -2.1111,-5.52269 -1.0938,-5.34375 z"
         style="fill:#1a1a1a;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4401"
         d="m 232.3052,710.72241 c 0.4845,0.10254 1.1891,0.79903 1.5937,1.40625 6.9759,7.08717 13.3116,12.207 21.6875,17.28125 -0.1048,0.84256 -0.6,1.30768 -1.25,1.53125 1.6505,1.89264 2.9625,4.19873 3.9375,7.40625 l -0.3125,0.25 c -0.021,-9e-4 -0.0405,0.002 -0.0625,0 -20.0747,-14.81077 -26.9159,-15.50566 -25.5937,-27.875 z"
         style="fill:#808080;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4285"
         d="m 229.8052,702.09741 c -0.013,1.91457 0.9054,5.6181 4.0937,10.03125 4.9119,6.79896 14.5804,15.05165 22.5313,16.90625 -5.0535,4.59589 -28.6252,-14.72206 -26.625,-26.9375 z"
         style="fill:#ffffff;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5040"
         d="m 89.617604,351.69116 c 56.797396,5.4675 96.457096,51.20286 133.593796,131.6875 -37.0261,-76.919 -77.9,-123.41474 -133.593796,-131.6875 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7095"
         d="m 60.617604,342.09741 c 25.5896,0.43224 53.240096,6.02242 67.718796,19.3125 -30.299596,-14.72494 -82.345096,-19.51576 -112.468796,-13.78125 10.6956,-3.69123 27.2414,-5.82699 44.75,-5.53125 z"
         style="opacity:0.8;fill:url(#linearGradient7108);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7005"
         d="m 51.305204,344.03491 c -28.4705,1.44262 -82.8235,15.05734 -104.3126,22.71875 -0.009,0.0329 -0.0221,0.0614 -0.0312,0.0937 l 0,-1.40625 c 38.711,-12.15411 73.2513,-20.41812 104.3438,-21.40625 z"
         style="fill:#808080;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5034"
         d="m -63.976096,371.62866 -50.593704,61.25 -3.25,-1.78125 51.843704,-58.8125 2,-0.65625 z"
         style="fill:#808080;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7007"
         d="M 59.992604,343.90991 C 129.6856,344.81851 178.799,384.24054 223.2426,483.37866 180.7082,489.89761 135.4939,518.85565 112.1802,514.84741 49.657804,495.67772 -8.8203961,479.48914 -89.538596,446.78491 l -24.875004,-13.8125 50.625004,-61.28125 0,4.21875 -48.406204,55.15625 27.437404,15.3125 c 78.3966999,31.89428 135.2137,47.64882 195.937596,66.34375 22.6431,3.90897 67.9387,-24.205 109.25,-30.5625 -39.3464,-104.20783 -106.5351,-137.6495 -163.781296,-138.25 1.1167,-0.005 2.2375,-0.0144 3.3437,0 z"
         style="fill:#808080;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4085"
         d="m 92.555204,571.59741 c 6.9863,0.0822 26.353696,1.60987 34.187396,15.75 -10.9317,6.52714 -29.156196,7.75 -29.156196,7.75 l -7.5938,-23.46875 c 0,0 0.9503,-0.0502 2.5626,-0.0312 z"
         style="fill:url(#linearGradient4093);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4180"
         d="m 32.555204,414.53491 c 19.8873,-0.0366 39.0515,0.5677 45.0624,2.15625 11.5223,3.04509 30.857796,20.79388 31.906296,35.15625 0.163,2.23256 -2.2305,3.94795 -2.75,6.125 -1.1687,14.85583 -10.437496,56.59375 -10.437496,56.59375 0,0 3.2133,2.98422 4.031196,4.15625 -3.473696,12.36104 -31.601396,17.74242 -35.562396,12.3125 l 15.6874,-54.53125 c 0,0 -8.9443,3.67419 -13.5937,4.96875 -7.1026,1.9776 -78.2579,-11.15625 -88.375,-16.25 -2.3675,-1.19196 -13.0303,-17.81336 -13.3437,-23.59375 -0.3211,-5.9216 4.9429,-15.32285 13.5937,-24.40625 1.4474,-1.51982 28.2117999,-2.6404 53.7813,-2.6875 z"
         style="fill:url(#radialGradient4182);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4012"
         d="m 95.586404,515.28491 c 16.770496,0.62963 29.749996,4.81803 29.749996,9.90625 0,5.52285 -15.2882,10 -34.124996,10 -7.9891,0 -15.3119,-0.80736 -21.125,-2.15625 9.8269,0.0551 25.9788,-5.30613 28.5625,-14.5 -0.5873,-0.84149 -2.077,-2.30574 -3.0625,-3.25 z"
         style="opacity:0.8;fill:url(#radialGradient4022);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3976"
         d="m -18.944796,419.22241 c 10.6286999,0.94426 21.5102999,9.12656 28.0936999,15.375 l 73.2187001,16.75 -71.125,-5.625 c -4.5304001,-12.67026 -16.1558001,-23.71126 -30.1874,-26.5 z"
         style="fill:url(#radialGradient4956);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4090"
         d="m -32.538596,442.09741 c 0.1711,-0.003 0.3727,0.005 0.5938,0.0312 41.1043999,4.94186 81.7981,9.26747 122.7812,10.25 5.1496,0.50147 17.156196,-0.375 17.156196,-0.375 0,0 1.2564,3.60597 -2.625,4 -39.256796,31.33241 -31.912096,31.80202 -124.437396,10.1875 -2.2144,-1.35273 -14.2484,-17.81534 -14.2813,-23.46875 0,-0.46425 0.2993,-0.61688 0.8125,-0.625 z"
         style="fill:url(#radialGradient4168);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3984"
         d="m -32.351096,442.25366 43.5313,4.40625 c -3.4150001,11.34342 -14.6833001,18.75 -28.0938,18.75 -1.0931,0 -2.1568,-0.0797 -3.2188,-0.1875 -3.1257,-2.97156 -11.9699,-17.06813 -12.25,-22.21875 -0.0129,-0.23755 0.0257,-0.50114 0.0313,-0.75 z"
         style="fill:url(#radialGradient4176);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4122"
         d="m -2.1947961,470.69116 c 39.6112001,7.12472 95.7172001,-0.73577 66.9374001,10.21875 -39.3686,-3.46347 -66.9374001,-10.21875 -66.9374001,-10.21875 z"
         style="fill:url(#linearGradient4011);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4614"
         d="m 30.430204,414.50366 c 3.557,-0.0154 7.0928,0.003 10.5624,0.0312 16.6546,0.13388 31.5041,0.79464 36.6563,2.15625 11.5223,3.04509 30.826496,20.76263 31.874996,35.125 0,0.0537 -10e-4,0.10317 0,0.15625 -0.8413,-0.75932 -1.688,-1.51544 -2.5625,-2.25 -3.0019,-13.35978 -20.075996,-28.58063 -30.531196,-31.34375 -13.33,-3.52278 -93.3786,-2.09015 -95.875,0.53125 -7.2382,7.59993 -12.0175,15.40276 -13,21.09375 -0.7855,0.46459 -1.5752,0.9561 -2.3438,1.4375 -0.225,-5.92908 5.016,-15.21207 13.5938,-24.21875 1.407,-1.4776 26.7252999,-2.61126 51.625,-2.71875 z"
         style="fill:url(#radialGradient4628);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3978"
         d="m -18.382396,419.37866 c 0.1808,0.009 0.3795,0.0248 0.5938,0.0625 10.7347999,2.24853 18.51639995,7.40679 23.2811999,15.3125 -3.6574,-3.38777 -8.7312,-4.84504 -14.9062,-4.0625 -9.9882999,1.26579 -15.9887999,5.94372 -22.0311999,10.625 -1.2201,0.81049 -1.1195,0.32127 -0.9376,-0.9375 0.98,-5.33451 5.1813,-12.43837 11.5313,-19.53125 0.7107,-0.89897 1.2035,-1.52954 2.4687,-1.46875 z"
         style="fill:url(#linearGradient4005);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5017"
         d="m -0.56979605,368.94116 c 0,0 46.20920005,24.64888 -22.03129995,38.46875 -1.8279,0.19602 -3.6379,0.3101 -5.375,0.3125 10.9637,-10.96268 27.40619995,-38.78125 27.40629995,-38.78125 z"
         style="opacity:0.7;fill:url(#linearGradient5032);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7025"
         d="m 151.3364,449.06616 c -9.2079,17.20086 -21.344,44.83874 -25.9062,62.96875 l -3.4688,0.59375 c 12.6776,-40.73529 23.4016,-53.18307 29.375,-63.5625 z"
         style="fill:url(#linearGradient7033);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7041"
         d="m 460.24265,656.06616 c 83.40296,17.20379 143.83826,25.89168 255.53125,41.21875 -76.37943,-2.47027 -142.94432,-23.345 -156.4375,-6 -0.0181,0.0232 -0.0443,0.0398 -0.0625,0.0625 l -6.59375,-1.1875 c -4.06805,-15.91893 -55.07925,-13.57806 -92.4375,-34.09375 z"
         style="fill:url(#linearGradient7049);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4505"
         d="m 587.6489,684.44116 c 1.46947,0.0584 3.21435,0.21947 5.25,0.53125 l 169.90625,19.375 -11.71875,2.875 -46.9375,-4 -124.9375,-14.25 c -0.15349,-0.0235 -0.25625,-0.0406 -0.40625,-0.0625 0.77046,-2.47154 1.93897,-4.74296 8.84375,-4.46875 z"
         style="fill:url(#linearGradient4513);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path7054"
         d="m 294.1802,436.34741 c 68.9353,0.0813 102.94186,14.10645 134.0312,35.15625 -7.9882,2.6652 -18.93633,4.20839 -31.71875,4.4375 -0.0416,-0.003 -0.0834,0.003 -0.125,0 -34.33195,-1.90243 -82.41505,-9.38815 -109.53125,-25.09375 31.5347,26.76627 -5.8163,20.02278 -22.2812,14.625 -5.4702,-9.27297 -11.299,-18.40804 -17.5,-27.375 17.3501,-1.21191 32.9867,-1.76667 47.125,-1.75 z"
         style="opacity:0.8;fill:url(#radialGradient7069);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5139"
         d="m 50.086404,347.31616 c 44.2613,0.20877 85.969696,14.65416 121.624996,53.59375 1.2792,1.72138 2.6134,2.96078 3.8438,4.78125 -70.8368,-72.75712 -132.493396,-60.78875 -212.843796,-43.90625 29.5557999,-8.88288 59.0024,-14.60258 87.375,-14.46875 z"
         style="fill:#b3b3b3;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4429"
         d="m 152.5239,840.53491 c 19.7266,26.66415 42.9524,50.02468 72.6875,40.6875 -4.8563,2.7736 -11.2303,3.66011 -16.2812,3.6875 -21.7785,0 -41.6015,-16.83392 -56.4063,-44.375 z"
         style="fill:url(#radialGradient4443);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4503"
         d="m 566.93015,697.37866 149,22.125 22.90625,7.40625 -23.25,-4.71875 -148.21875,-22.15625 -0.4375,-2.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#radialGradient4567-7);fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4690"
         d="m 567.8989,701.81616 c 2.12304,0 3.84375,1.72068 3.84375,3.84375 0,2.12304 -1.72071,3.875 -3.84375,3.875 -2.12307,0 -3.84375,-1.75196 -3.84375,-3.875 0,-2.12307 1.72068,-3.84375 3.84375,-3.84375 z"
         style="opacity:0.49137932;fill:url(#radialGradient4698);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4446"
         d="m 494.2114,792.25366 25.53125,2.75 0,19.125 c -7.82378,-5.61753 -33.88515,-16.08725 -25.53125,-21.875 z"
         style="opacity:0.5;fill:url(#radialGradient4482);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4430"
         d="m 1111.1177,543.00366 0.9687,0.6875 -21.9687,41.75 21,-42.4375 z"
         style="fill:#333333;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4433"
         d="m 1089.3364,582.97241 12.4063,17 c 23.3541,8.34494 44.2169,19.13776 64.7187,33.1875 7.8328,-0.60803 15.1053,-2.29674 21.3125,-6.0625 0.31,0.4725 0.6297,0.93215 0.9375,1.40625 -6.4048,4.17809 -14.023,6.01762 -22.25,6.65625 -20.5018,-14.04974 -41.3646,-24.84256 -64.7187,-33.1875 l -13,-17.8125 0.5937,-1.1875 z"
         style="fill:url(#radialGradient4446);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4486"
         d="m 139.2426,768.84741 c 16.2267,58.80273 46.8693,105.80399 91.5938,84.3125 -69.1177,34.99326 -92.9871,-66.74194 -91.5938,-84.3125 z"
         style="fill:url(#radialGradient4488);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4516"
         d="m 130.4614,666.75366 c 0.7205,15.53597 0.6562,35.57345 0.6562,55.625 0,16.08475 -1.0876,28.66466 -2.8437,38.09375 -1.5198,-12.60968 -2.3437,-25.76562 -2.3437,-39.3125 0,-19.05288 1.598,-37.35608 4.5312,-54.40625 z"
         style="opacity:0.8;fill:#4d4d4d;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4524"
         d="m 186.3989,529.40991 c -41.8446,21.59633 -63.8375,67.43013 -59,160.28125 l -5.0625,68 C 106.377,594.85698 138.3228,546.66373 186.3989,529.40991 z"
         style="fill:url(#linearGradient4532);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3917"
         d="m 294.2426,646.56616 c 0.0941,-0.008 0.1939,0.0232 0.3126,0.0625 l 58.375,13.59375 1.6874,3.625 -5.3437,6 -4.3437,0.90625 -47.5313,-10 c -3.2648,-8.63332 -4.5668,-14.06134 -3.1563,-14.1875 z"
         style="fill:url(#linearGradient3949);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path45939"
         d="m -89.663596,446.50366 c 0.091,0.0362 0.1902,0.0575 0.2812,0.0937 -34.453704,2.99138 -63.986704,12.75841 -91.031204,25.9375 l 27.7188,36.96875 33.75,174.3125 c 0.9484,2.91027 -10.4063,9.25 -10.4063,9.25 l -21.8125,15.3125 -0.8125,-0.21875 27.0313,-19.15625 c 0,0 0.1096,-0.0549 0.125,-0.0625 1.6968,-1.88067 3.6545,-5.12072 3.8124,-7.375 l -33.0937,-172.0625 -27.7187,-36.96875 c 27.3411,-13.32373 57.2151,-23.15731 92.156204,-26.03125 z"
         style="fill:url(#radialGradient45956);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4542"
         d="m -161.1948,463.40991 0.9374,0.1875 c -6.8893,2.74782 -13.5945,5.73992 -20.1562,8.9375 l 0.4375,0.59375 c -0.6139,-0.19818 -1.2303,-0.39547 -1.8437,-0.59375 6.7071,-3.26848 13.5755,-6.3278 20.625,-9.125 z"
         style="opacity:0.8;fill:url(#radialGradient4549);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4609"
         d="m 111.2426,514.84741 c -2.121,22.27098 -1.5338,39.98941 0.375,54.09375 -9.2989,60.70947 -13.933796,121.77652 -5.8124,183.84375 l -255.4376,-45.5 0.9063,-0.625 253.375,45 c -8.121296,-62.06723 -3.4866,-123.13428 5.8125,-183.84375 -1.8864,-13.93755 -2.6896,-30.65067 -0.6562,-52.53125 0.39,0.12116 1.0481,-0.55836 1.4374,-0.4375 z"
         style="fill:url(#radialGradient4622);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3855"
         d="m 157.4926,516.28491 c -5.71,4.44687 -19.3989,7.33218 -35.3124,6.875 -5.7821,-0.16612 -11.2408,-0.77899 -16.125,-1.6875 19.7855,0.56325 37.8726,-1.44958 51.4374,-5.1875 z"
         style="fill:url(#radialGradient4192);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4563"
         d="m 111.1176,514.84741 c -2.105,0.65782 -3.914,26.18587 -1.7812,42.71875 -3.5852,-13.3497 -3.7033,-26.83156 -2.6875,-41.28125 l 4.4687,-1.4375 z"
         style="fill:url(#radialGradient4565);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4594"
         d="m 40.992604,414.53491 c 16.6546,0.13388 31.5041,0.79464 36.6563,2.15625 0.8061,0.21304 1.6264,0.49308 2.5,0.84375 -28.2693,-3.74656 -82.5586001,-1.0339 -99.7813,1.28125 -3.3838,3.58483 -6.9626,7.58903 -9.6562,12 -1.5202,1.35595 -2.9287,2.80099 -4.25,4.34375 2.0323,-5.30659 6.3963,-11.69266 12.3438,-17.9375 1.6082,-1.68869 34.4302,-2.91064 62.1874,-2.6875 z"
         style="fill:url(#radialGradient4608);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4567"
         d="m 98.367604,505.31616 c -1.1481,5.42774 -2,9.21875 -2,9.21875 0,0 3.1821,2.98422 3.999996,4.15625 -2.696196,9.59447 -20.216796,15.00513 -29.781196,14.40625 l 2.125,-2.125 c 8.6637,0.0893 17.5552,-3.23778 23.75,-9.21875 3.2484,-2.48329 -0.2,-4.63845 -2.2812,-6.53125 0.499,-2.41523 1.0218,-4.83266 1.5312,-7.25 l 2.6562,-2.65625 z"
         style="fill:url(#radialGradient4587);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4100"
         d="m 105.3676,441.59741 c 0.379,-0.29532 2.3539,3.03536 2.9063,4.84375 1.9671,6.43936 0.5606,6.05762 -2.5937,14.03125 1.0286,-6.53294 2.3539,-10.89336 1.375,-13.3125 -1.5812,-3.90705 -1.9149,-5.38531 -1.6876,-5.5625 z"
         style="fill:url(#radialGradient4964);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3993"
         d="m 38.336404,337.12866 c 36.1453,0.22442 69.038896,6.8707 93.093796,22.90625 -105.904196,-57.17662 -273.7285,11.24257 -382.7813,67.21875 -13.2247,-2.78908 -24.8226,-6.10707 -40.1875,-8.03125 15.958,-3.50573 34.7473,-9.56738 55.75,-16.4375 18.9108,-6.18587 62.7073,-13.64148 70.375,-17.3125 53.8616,-25.78702 134.745404,-48.77219 203.750004,-48.34375 z"
         style="opacity:0.8;fill:url(#radialGradient4906);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4247"
         d="m -16.819796,344.53491 c -24.0559,5.19903 -78.0414,19.49675 -16.0313,14.65625 l -21.625,7.125 c 0,0 -8.6204,-2.74803 -20.3125,-2.71875 l -71.312504,43.6875 0,14.71875 -104.6875,6 c 56.2308,-25.07112 132.1363,-69.18212 233.968804,-83.46875 z"
         style="fill:url(#radialGradient4257);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path5110"
         d="m 186.5239,421.00366 c 13.6413,19.42316 24.421,40.74367 35.3125,62 l -4.75,0.34375 c -7.5024,-18.58966 -17.8759,-39.51244 -30.5625,-62.34375 z"
         style="fill:#b3b3b3;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3803"
         d="m -181.8824,478.75366 -0.2187,1.625 c -87.7088,12.273 -135.3379,48.69238 -171.0313,71.4375 l -0.7812,-0.21875 c 35.8078,-22.72758 83.5531,-60.51359 172.0312,-72.84375 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient4355);fill-opacity:1;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4364"
         d="m 276.1489,321.65991 c 99.55,0.1001 190.38848,3.70205 207.46875,5.09375 17.69864,1.4421 40.72022,1.76807 116.15625,22.40625 -103.97767,-8.33352 -202.53453,-9.73813 -303.8125,-8.75 -19.7086,-4.94873 -35.9013,-12.48488 -39.8125,-18.71875 6.6949,-0.0262 13.3633,-0.0379 20,-0.0312 z"
         style="opacity:0.82325583;fill:url(#linearGradient4412);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4385"
         d="m 209.7739,824.22241 c 2.6931,0.24903 3.6274,2.91052 2.0625,4.3125 -3.7981,3.05663 -6.7474,5.9562 -14.5938,5.84375 l 9.2813,-9.46875 c 1.262,-0.5909 2.3523,-0.77051 3.25,-0.6875 z"
         style="fill:url(#linearGradient4393);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4541"
         d="m 231.7426,744.06616 c 0.9669,-0.0165 1.8218,0.0344 2.2188,0.0312 8.7512,0.22834 1.948,0.81352 1.8438,2.53125 0,1.27156 5.4189,3.4375 8.875,3.4375 2.9523,0 2.779,-1.8942 3.4374,-2.90625 4.9828,2.37846 8.8569,6.15737 9.4376,11.46875 -1.8976,2.24091 -3.835,4.08326 -6.2813,4.9375 -1.3271,0.54025 -2.1294,0.0912 -2.7813,-0.59375 l -18.7187,-15.34375 c -4.803,-3.03072 -0.9316,-3.51304 1.9687,-3.5625 z"
         style="fill:url(#linearGradient4354);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4367"
         d="m 182.6176,628.84741 13.3126,0.375 c 2.0769,10.96593 4.1091,23.85311 2.2187,31.46875 l -15.5313,-31.84375 z"
         style="fill:url(#linearGradient4331);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4370"
         d="m 221.5239,484.22241 c 90.45,2.87677 195.40963,71.54314 274.1875,128.90625 -102.89961,-63.72552 -188.5935,-122.6171 -282.75,-106.9375 -58.1262,19.04831 -101.781,14.47755 -101.7188,8.65625 30.9942,2.18858 66.0136,-24.37496 110.1876,-30.625 l 0.0937,0 z"
         style="fill:url(#linearGradient4375);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3944"
         d="m 836.5239,735.59741 c 9.3958,-0.0325 18.97399,0.0777 28.40625,0.96875 66.67573,6.29854 183.86715,19.20737 198.53125,30.875 l -6.3437,6.15625 c -86.92284,22.41044 -189.26923,13.98687 -283.9063,20.96875 l 3.625,-25.9375 0,-1.40625 0,-0.0312 0.625,-3.46875 0.125,-26.40625 c 18.15818,-0.23752 38.26675,-1.64723 58.9375,-1.71875 z"
         style="fill:url(#linearGradient4384);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4300"
         d="m -152.8511,487.87866 c 0.1467,-8e-5 0.2907,0.0197 0.4375,0.0312 l 38.125,12.625 -0.2188,0.625 -40.0624,-12.625 c 0.407,-0.56198 1.0869,-0.65589 1.7187,-0.65625 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient4383);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4931"
         d="m 1057.1177,773.59741 -24.625,12.09375 c -91.76505,10.4029 -174.00418,10.39715 -259.2813,8.875 l 0.8125,-11.125 c 94.09068,-1.76599 187.2681,1.46457 283.0938,-9.84375 z"
         style="fill:url(#radialGradient4941);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4412"
         d="m -27.101096,387.90991 c -14.5009,23.52504 -26.5141,40.75681 -37.75,66 l -2.3125,-0.90625 c 26.5354,-50.56721 39.0448,-64.21087 40.0625,-65.09375 z"
         style="fill:#cccccc;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4324"
         d="m -28.257396,387.44116 c -14.5009,23.52504 -26.5141,40.75681 -37.75,66 l -2.3124,-0.90625 c 26.5354,-50.5672 39.0447,-64.21087 40.0624,-65.09375 z"
         style="fill:#333333;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3631"
         d="m -400.8198,557.28491 c 3.5883,1.28084 7.1893,2.57753 8.5,7.4375 0.9519,-1.41819 3.9972,-2.04231 7.5937,-2.46875 0.325,20.06911 -1.3277,42.84036 -4.75,64 -0.5486,2.15718 -2.4246,1.24892 -4.9687,-1.25 -6.4745,-14.53541 -12.9908,-29.0542 -17.8438,-44.5625 1.4465,-6.61032 3.0969,-13.10982 6.1875,-19.0625 1.5195,-2.59662 3.4532,-3.04005 5.2813,-4.09375 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3633"
         d="m -426.4448,594.40991 c 11.9314,14.34929 21.0433,31.55084 29.7187,49.15625 -3.2354,-1.31276 -7.3647,-2.79302 -11.5,-1.40625 -2.8206,2.26131 -1.0696,3.2884 -2.3125,11.125 -9.3876,3.5615 -18.8414,6.73082 -29.1562,5.65625 -1.5169,-5.03112 -3.5046,-9.68012 -2.3126,-16.96875 4.4194,-1.28965 8.8619,1.59528 13.2813,2.84375 2.1512,-12.47124 2.9343,-24.75079 8.125,-37.65625 l -5.8437,-12.75 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3635"
         d="m -398.7574,646.03491 c 2.0991,0.0673 4.4701,0.66846 6.6876,1.84375 5.0683,2.68633 7.5473,7.28672 5.5624,10.28125 -1.9848,2.9945 -7.6817,3.24885 -12.75,0.5625 -5.0683,-2.68635 -7.5785,-7.2867 -5.5937,-10.28125 1.1165,-1.6844 3.3949,-2.49279 6.0937,-2.40625 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4457"
         d="m -388.1636,674.56616 c 6.0123,0.23098 8.8486,4.74406 6.5938,8.1875 -6.555,4.95314 -18.995,13.85455 -23.375,10.40625 -1.8122,-1.42673 -1.7791,-3.94685 -2.3126,-7.75 l -17.125,0.78125 c 3.6107,-5.04055 12.7188,-3.508 19.4688,-4.78125 3.3111,-3.22143 6.7504,-5.49853 13.9688,-6.65625 0.9827,-0.15762 1.9223,-0.2205 2.7812,-0.1875 z"
         style="fill:#e6e6e6;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3638"
         d="m -390.1636,676.65991 c 1.9304,0.0819 3.5067,0.75241 4.375,2.0625 1.9849,2.99453 -1.0254,5.84492 -6.0938,8.53125 -5.0684,2.68637 -10.2651,4.18199 -12.25,1.1875 -1.9847,-2.99455 0.4941,-6.8449 5.5626,-9.53125 2.8509,-1.51107 5.9242,-2.35526 8.4062,-2.25 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3640"
         d="m -407.4136,687.65991 c 0,13.09243 7.4359,6.56648 19.375,0.71875 -4.057,15.58311 -10.7349,30.82999 -15.375,43.53125 l -11.5,16 -6,1.875 c 3.9585,-9.27246 9.3939,-22.96403 10.25,-33.875 -2.4683,-0.55354 -4.8361,-1.14481 -12.5,0.25 l -2.5,-2.25 -5.25,0.75 0,3.5 -8.75,2.75 c -2.0278,-5.89279 -2.6227,-13.62797 0,-25.5 9.42,-6.77983 21.3946,-6.86902 32.25,-7.75 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3643"
         d="m -375.8511,681.19116 1.2187,3.1875 18.4376,5.90625 c 0.1122,4.25232 -3.5004,31.99655 -9.5,45.59375 -3.0398,-12.51285 -15.8501,-18.64128 -15.1876,-15.5625 -8.0479,1.29167 9.748,26.67708 5.4688,34.84375 -4.6505,7.64921 -10.186,13.84598 -17.5,17.5 -5.1192,-5.35101 -9.2928,-13.82148 -11.75,-22.5 4.3911,-17.945 8.8903,-35.88036 15.0312,-47.125 6.1414,-11.24463 5.2679,-19.1271 13.7813,-21.84375 z m -5.7187,14.59375 c -0.0841,0.01 -0.1123,0.0394 -0.125,0.0937 -1.9518,-1.13856 -0.6362,16.6532 3.5312,19.78125 l 9.5312,-4.40625 c -2.8236,-10.71607 -11.6761,-15.61397 -12.9374,-15.46875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3645"
         d="m -373.6636,614.15991 15.5,5.25 c 2.9833,15.61001 3.2413,33.27393 2.9062,50.875 -4.223,8.02563 -9.1083,12.91147 -14.6562,17.625 -3.5329,-10.2776 -8.6233,-18.27882 -9,-35.5 0.8312,-12.93376 1.2148,-25.95703 5.25,-38.25 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3647"
         d="m -449.2261,619.50366 c 0.287,20.08333 0.0169,40.64871 9.9063,52.5 -15.4817,22.62252 -10.7092,24.85787 -9.0313,51.09375 -3.355,-5.65536 -10.038,-66.9136 -0.875,-103.59375 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3650"
         d="m -406.2886,752.28491 11.75,22.875 8.25,-3.5 -9.125,7.5 -12.25,-25 1.375,-1.875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3652"
         d="m -408.9448,555.72241 c -2.5838,8.13472 -5.4786,16.13616 -6.7188,24.71875 l -14.125,0.71875 c 6.036,-8.66872 12.4738,-17.23555 20.8438,-25.4375 z"
         style="fill:url(#linearGradient4654);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3654"
         d="m -382.9448,555.72241 c 9.885,9.97325 17.6809,22.55774 22.7812,50.8125 -8.1826,-4.84761 -7.5932,0.55632 -12.375,1.25 l 0.375,-12 4.5,-0.25 c -4.4499,-3.62431 -4.4305,-17.1013 -6.625,-25.6875 -4.4287,-5.38339 -9.2632,-7.14408 -8.6562,-14.125 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4428"
         d="m -402.0386,660.40991 c 1.9612,3.11188 12.6224,1.6916 21.125,2 0.378,2.79829 0.2772,7.10141 1.875,8.375 l -5.625,2.375 c -17.3445,1.62639 -16.1952,4.76392 -21.1562,7.625 -9.1206,0.0349 -19.7366,2.54748 -29.4688,3.5 0.2222,-9.58286 -1.1444,-14.53704 -5.9062,-9.5 l 0.125,-5.09375 c 8.2382,1.47357 23.2405,-3.53076 39.0312,-9.28125 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4455"
         d="m -379.1636,655.90991 c 1.2237,15.55524 5.1122,22.71668 8.25,29.375 1.2207,1.92553 0.3224,2.33741 -0.75,2.625 l -7.625,-18.5 c -0.5006,-5.08372 -1.2794,-9.68625 0.125,-13.5 z"
         style="fill:#e6e6e6;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4468"
         d="m -405.0386,751.15991 11.875,20.875 c 0.1762,2.59433 -1.3001,1.47051 -2.375,1.25 l -10.375,-19.5 0.875,-2.625 z"
         style="fill:#ffffff;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4470"
         d="m 296.2739,647.25366 c 0.9293,0.13524 2.2032,2.31075 3.0625,5.3125 0.9821,3.43057 1.0191,6.64941 0.0938,7.1875 -0.9254,0.53809 -2.4555,-1.78818 -3.4376,-5.21875 -0.982,-3.43057 -1.019,-6.64941 -0.0937,-7.1875 0.1157,-0.0673 0.2422,-0.11307 0.375,-0.0937 z"
         style="fill:#4d4d4d;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4473"
         d="m -369.9136,609.06616 c 0.6966,0.0116 1.4056,0.0598 2.0312,0.15625 2.2942,0.35362 5.1551,0.74592 6.0626,0.875 0.4401,1.33782 0.8901,2.68848 1.3124,4.0625 l -12.9374,-3.5625 c -0.3861,-0.75358 0.3871,-1.20509 1.5624,-1.40625 0.5877,-0.10058 1.2722,-0.13655 1.9688,-0.125 z"
         style="fill:#cccccc;stroke:none;display:inline;enable-background:new" />
      <path
         inkscape:connector-curvature="0"
         id="path4517"
         d="m -403.1011,519.50366 c -35.8791,4.96568 -59.9355,70.84629 -63.4375,142 -0.5662,-41.71601 14.5826,-143.42632 63.4375,-142 z"
         style="fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4520"
         d="m -411.2574,753.37866 c 0.8304,0.002 1.4503,0.38121 1.625,1.1875 3.8342,8.09245 7.1594,13.65594 11.8438,26 -14.8492,3.06409 -26.4067,-1.63274 -34.6562,-14.125 l 4.0624,-1.78125 21.375,0.53125 -2.0937,-2.125 -15.4063,-0.1875 10.2813,-8.3125 c 1.1,-0.81264 2.1384,-1.18909 2.9687,-1.1875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4529"
         d="m -381.6948,695.87866 c 7.0968,3.15855 9.5409,9.98188 13.0624,15.375 l 5.0938,-0.125 -1.3125,15.875 c -2.0774,13.75167 -3.3721,-6.53125 -5.0313,-11.1875 l -8.625,-0.3125 c -2.8443,-7.43056 -4.1143,-13.60863 -3.1874,-19.625 z"
         style="fill:url(#radialGradient4540);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4580"
         d="m -403.1011,543.62866 c 16.5959,-0.17953 26.4355,13.8133 29.2187,19.53125 -7.5902,-10.01243 -16.2364,-15.6875 -25.4374,-15.6875 -32.1661,4.31254 -41.829,43.58961 -47.1876,68.0625 -2.1257,9.27166 -3.8086,19.2391 -5,29.71875 0.5157,-38.65643 19.7072,-95.2618 40.875,-100.625 2.646,-0.6704 5.1605,-0.97435 7.5313,-1 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4598"
         d="m -428.9761,717.15991 c 0.2557,-0.002 0.5642,0.12545 0.9375,0.4375 1.8506,7.35986 4.4649,17.76364 9.625,26.96875 0.016,0.64552 0.5054,1.29197 -1.0312,1.9375 -5.7763,-10.39302 -8.7919,-22.75686 -10.4063,-28.3125 0.1811,-0.65601 0.4489,-1.02851 0.875,-1.03125 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4509"
         d="m -451.3824,655.12866 c -6.982,5.89434 7.4025,123.496 37.8438,126.3125 -36.767,-0.41253 -46.1666,-121.11294 -37.8438,-126.3125 z m 37.8438,126.3125 c 0.1855,0.002 0.3756,0.004 0.5625,0 0.4065,0.0163 0.8404,0.0383 1.25,0.0312 -0.6019,0.0333 -1.2226,0.0233 -1.8125,-0.0312 z"
         style="fill:url(#radialGradient4509);fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4600"
         d="m -431.2261,722.78491 c 0.2557,-0.002 0.5642,0.1567 0.9375,0.46875 1.8506,7.35986 4.4649,17.76364 9.625,26.96875 0.016,0.64552 0.5054,1.29197 -1.0312,1.9375 -5.7763,-10.39302 -8.8231,-22.75686 -10.4376,-28.3125 0.1812,-0.65601 0.4802,-1.05976 0.9063,-1.0625 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4602"
         d="m -423.6948,713.47241 c 1.2674,0.008 2.6272,0.2402 3.125,0.65625 1.8505,7.35986 2.4961,15.82614 7.6562,25.03125 1.9606,-0.7687 -1.432,2.69822 -2.9688,3.34375 -5.7762,-10.39302 -8.7918,-22.75686 -10.4062,-28.3125 0.1449,-0.52481 1.3263,-0.72716 2.5938,-0.71875 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4616"
         d="m -424.3198,605.56616 c -3.1619,11.77735 -5.548,24.50568 -6.375,36.75 l -2.2813,-1.75 c 1.2327,-11.37263 4.2172,-23.62737 8.6563,-35 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4638"
         d="m -410.5698,685.56616 c 3.0013,-0.0153 3.0752,1.03316 3.1562,2.09375 -10.2274,0.87963 -20.3319,2.07666 -29.0312,6.09375 -6.3301,2.84205 -5.1469,23.0571 -3.2188,27.15625 -3.5197,4.784 -8.0711,3.32357 -8.6875,2.1875 1.325,-10.33971 3.423,-20.31064 6.7187,-31 0.8745,-3.28821 17.3288,-5.89832 29.5938,-6.46875 0.5576,-0.0496 1.04,-0.0603 1.4688,-0.0625 z"
         style="fill:#4d4d4d;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4645"
         d="m -415.0698,577.09741 c 6.8055,23.66796 16.3607,45.10391 33.5,63.59375 l -0.1563,10.625 c -10.832,-12.57413 -18.8065,-23.04132 -30.4687,-56.25 -3.9752,-11.31925 -17.7372,-3.51301 -27.4688,-5.3125 -0.1385,-5.15338 -0.072,-4.81843 1.2812,-8.40625 1.1705,0.71236 1.3649,7.80861 2.3438,6.84375 7.1425,-7.03974 22.0587,3.39629 20.9688,-11.09375 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4443"
         d="m -416.5386,587.19116 c 2.944,0.11268 2.9665,1.89209 4.5,7.71875 2.8619,10.87414 13.5541,32.74288 23.875,51 l -8.5625,-2.34375 c 0.1352,0.40574 -22.7906,-46.91496 -27.5937,-48.71875 -2.6892,-1.00986 -9.125,-5.75 -9.125,-5.75 8.7326,3.14701 12.6035,-2.07094 16.9062,-1.90625 z"
         style="fill:#e6e6e6;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4671"
         d="m -355.2261,670.25366 c 0.3953,6.95839 0.2965,13.70582 -0.9687,20 -2.4777,2.70566 -5.1307,4.1684 -7.8438,5.03125 -5.6826,1.29628 -7.0481,-0.5788 -7.5,-3.125 -0.5668,-1.41667 -1.3632,-2.83333 1.625,-4.25 6.5062,-4.27134 10.4176,-11.14864 14.6875,-17.65625 z"
         style="fill:#666666;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3673"
         d="m 212.5864,821.44116 c 0.2287,0.068 0.55,0.25656 0.9688,0.625 l 18.5937,19.9375 c 4.0897,-0.77318 6.3996,-4.38772 9.4375,-6.84375 0.2441,1.42315 -8.284,10.5948 -9.8438,9.59375 l -19.375,-20.90625 c -0.3799,-1.58098 -0.4672,-2.61013 0.2188,-2.40625 z"
         style="fill:#a9a9a9;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4399"
         d="m 213.0239,817.37866 c 0.2724,-0.005 0.6396,0.23936 0.9375,0.53125 l 19.9688,21.375 6,-4.28125 c -2.1236,2.49564 -4.4981,5.02617 -7.0313,6.375 l -19.375,-20.90625 c -1.1137,-2.37994 -0.954,-3.08486 -0.5,-3.09375 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4454"
         d="m 270.8052,779.59741 c -12.8083,53.41426 -49.6426,106.83162 -91.9063,66.0625 18.0124,15.08911 57.4554,33.85643 91.9063,-66.0625 z"
         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3675"
         d="m -362.9761,617.78491 5.1875,1.65625 c 2.6346,16.79152 4.0035,34.04234 2.5312,50.84375 l -3.0624,4.71875 c -7.0832,-12.67211 -8.2366,-32.21703 -4.6563,-57.21875 z"
         style="fill:url(#linearGradient4452);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4513"
         d="m -398.4136,543.53491 c 26.6518,1.07386 46.2142,51.90865 43.5312,119.15625 0.01,-0.61822 0.0313,-1.22272 0.0313,-1.84375 0,-65.17964 -20.2294,-114.1728 -45.7187,-117.28125 0.7162,-0.0526 1.4376,-0.0602 2.1562,-0.0312 z"
         style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4456"
         d="m -403.4136,731.90991 c -2.0722,7.55297 -2.6582,22.89398 -7.0938,21.78125 l -3.7187,0.875 c -4.7119,5.15956 -8.9939,7.84785 -16.75,11.21875 -3.6772,0.82296 -2.9301,-0.76191 -1.6875,-3.21875 10.7206,-11.20032 13.3989,-16.69783 18,-15 l 11.25,-15.65625 z"
         style="fill:#555555;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4476"
         d="m -375.3511,685.81616 4.5937,9.375 -3.3437,2.46875 -4.4375,-7.96875 3.1875,-3.875 z"
         style="fill:#999999;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         inkscape:connector-curvature="0"
         id="path4659"
         d="m -411.6011,581.87866 c 4.3245,17.55997 19.9207,46.95717 20.2187,46.71875 -1.1362,1.34295 -23.2251,-38.98499 -22.0937,-45.96875 l 1.875,-0.75 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4480"
         d="m -384.1011,557.72241 7.625,33.5 -8.9687,-0.6875 1.3437,-32.8125 z"
         style="fill:url(#linearGradient4490);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4452"
         d="m -384.1011,557.72241 c 2.6922,7.03383 6.1778,10.74623 9.8125,12.125 0.663,7.50405 2.4032,14.53054 3.4375,21.65625 -1.7395,0.24267 -3.4313,0.61157 -5.625,-0.28125 -2.8534,-10.29253 -6.5255,-20.17189 -7.625,-33.5 z"
         style="fill:url(#radialGradient4499);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4518"
         d="m -416.8198,716.25366 c 0.7136,3.93294 1.6466,8.24507 2.9687,12.59375 -0.3192,0.85876 -0.6555,1.73641 -1,2.59375 -1.7598,-5.46274 -2.9037,-10.82606 -3.75,-15.1875 0.6467,-0.0113 1.2387,-0.0177 1.7813,0 z"
         style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" />
      <g
         transform="matrix(-0.98374606,0.10844446,0.08813393,1.1283751,1009.6713,-202.6624)"
         id="g33078">
        <g
           transform="matrix(0.99980315,0.01984121,-0.01984121,0.99980315,83.935408,-54.641955)"
           id="g33086">
          <g
             transform="matrix(0.9855871,-0.00944516,-0.00944516,0.92636903,9.5602121,46.331611)"
             id="g33095">
            <g
               transform="matrix(1.0068783,-0.01429594,-0.01429593,0.91724747,8.6883711,53.506805)"
               id="g33103">
              <path
                 inkscape:connector-curvature="0"
                 id="path33120"
                 d="m 70.769506,634.54102 -7.26602,6.00236 -0.248038,0.61675 c 0.07331,-0.002 42.307812,-1.66216 78.026522,-2.43059 -3.54982,-0.20884 -7.13874,-0.42201 -10.78146,-0.55842 l 3.77347,-5.22773 c -31.72416,0.64166 -63.504474,1.59763 -63.504474,1.59763 z"
                 style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
              <path
                 inkscape:connector-curvature="0"
                 id="path33127"
                 d="m 63.503486,640.54338 -0.248038,0.61675 c 0,0 67.058332,-0.31226 103.478782,-0.32999 -10.28956,-1.12349 -20.94039,-1.95676 -32.02042,-2.46412 -34.07447,0.78354 -71.210324,2.17736 -71.210324,2.17736 z"
                 style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#333333;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
              <path
                 sodipodi:nodetypes="cccscccc"
                 inkscape:connector-curvature="0"
                 id="path33072"
                 d="m 170.07411,638.97172 c -35.6444,0 -106.812532,2.1875 -106.812532,2.1875 l 0.370498,2.90425 c 0,0 70.919274,-2.09175 106.442034,-2.09175 35.52276,0 106.6875,2.1875 106.6875,2.1875 l 0.0937,-3 c 0,0 -71.13685,-2.1875 -106.78125,-2.1875 z"
                 style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
              <path
                 sodipodi:nodetypes="cccscccc"
                 style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:url(#linearGradient33111);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans"
                 d="m 170.07411,642.37797 c -35.6444,0 -106.812532,2.1875 -106.812532,2.1875 -1.652029,0.44266 -4.628292,0.0934 0.09375,3 0,0 71.196022,-2.1875 106.718782,-2.1875 35.52276,0 106.6875,2.1875 106.6875,2.1875 7.61182,-1.20066 3.74547,-2.81019 0.0937,-3 0,0 -71.13685,-2.1875 -106.78125,-2.1875 z"
                 id="path33076"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </g>
      </g>
      <path
         inkscape:connector-curvature="0"
         id="path3871"
         d="m 706.61765,498.50366 c 34.43579,0.98491 67.83947,0.83591 103.59375,1.28125 79.93293,11.18589 219.7173,79.34608 294.5938,157.125 6.5044,8.1929 12.8601,16.46272 19.2187,24.71875 -47.0811,12.83495 -92.6428,19.59217 -137.03125,21.65625 -26.46315,-85.41549 -157.7419,-160.06979 -280.375,-204.78125 z"
         style="fill:url(#radialGradient3885);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4569"
         d="m 579.55515,498.28491 132.1875,2.09375 c 159.97309,59.09879 251.0407,126.80574 275.25,202.875 -73.46389,2.47818 -158.20312,-6.14906 -222.4375,-11.65625 -53.83529,-80.8434 -104.88684,-158.01741 -185,-193.3125 z"
         style="fill:url(#radialGradient4582);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4849"
         d="m 854.7739,471.28491 5.65625,6.09375 c -34.24641,4.92709 -63.68714,12.72529 -91.46875,21.53125 l -75.0625,-0.90625 0.21875,-4.65625 -5.84375,-3.9375 75.78125,0.875 c 28.16547,-8.75469 56.2,-15.96325 90.71875,-19 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4204"
         d="m 285.9614,477.09741 c 3.0676,0.009 6.4183,0.12691 11.2188,0.71875 101.91824,19.17762 199.4693,59.67495 278.4687,97.28125 l 42.9375,12.0625 25.03125,17.90625 11.5625,1.1875 0.0312,0 0.0312,0 66.96875,12.09375 164.375,4.65625 35.3125,-7.8125 37.21875,7.21875 101.93755,-8.0625 0.4062,0.25 38.9063,-13.0625 1.625,1.21875 -40.0625,13.5 -0.094,0.0312 -0.125,0 -102.28125,8.09375 -0.125,0 -0.0937,0 -35.71875,-7.84375 -36.34375,8.40625 -0.0937,0.0312 -0.125,0 -164.90625,-4.9375 -0.0625,0 -0.0625,0 -66.90625,-12.09375 -0.0625,0 -11.6875,-1.21875 -0.21875,-0.0312 -0.1875,-0.125 -25.03125,-17.90625 -42.75,-11.46875 C 492.73714,537.63934 365.7283,486.62988 276.4926,477.12866 c 3.6155,0.0714 6.4012,-0.0401 9.4688,-0.0312 z"
         style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:#008000;fill-opacity:1;stroke:none;stroke-width:1.70000005;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" />
      <path
         inkscape:connector-curvature="0"
         id="path4874"
         d="m 944.49265,637.65991 c 3.58613,0.15241 7.59866,1.06722 12.21875,3 13.59181,10.24353 9.98559,15.77602 8.9375,21.5625 -13.36782,-0.90862 -26.87015,-12.07986 -36.4375,-20.0625 4.50494,-2.88042 9.30437,-4.75402 15.28125,-4.5 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4876"
         d="m 945.61765,634.69116 c 5.23208,0.14386 10.35877,1.48262 14.71875,3.40625 9.99819,8.20913 10.39667,14.21116 9,18.875 -0.99938,3.33723 -2.6952,4.8789 -3.6875,5.25 0.23261,-1.16215 0.53444,-2.34388 0.78125,-3.5625 0.8557,-3.96839 1.056,-8.2604 -5.46875,-14.4375 -0.58022,-0.55551 -1.21481,-1.10384 -1.90625,-1.6875 -0.0105,-0.009 -0.0208,-0.0224 -0.0312,-0.0312 -0.70546,-0.59429 -1.4828,-1.21844 -2.3125,-1.84375 -0.67196,-0.28111 -1.32208,-0.51097 -1.96875,-0.75 -11.20991,-4.14351 -18.71647,-2.10731 -25.53125,2.25 0.0386,-3.42644 1.10801,-4.47827 4.28125,-5.34375 3.9307,-1.62709 8.0556,-2.23689 12.125,-2.125 z"
         style="fill:url(#radialGradient4901);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4881"
         d="m 960.9614,639.37866 c 1.20614,0.15842 2.58953,1.62678 3.34375,2.875 1.36471,2.25857 1.97158,7.9027 2.09375,9.15625 -0.90235,-2.68824 -3.06958,-5.74182 -7.53125,-9.4375 0.36239,-2.07185 1.17561,-2.71434 2.09375,-2.59375 z"
         style="fill:url(#radialGradient4929);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4907"
         d="m 929.2114,641.75366 c 0.0405,0.009 0.11493,0.0463 0.1875,0.125 2.77884,3.0526 19.72416,16.71407 31.375,19.65625 -11.73621,-2.80011 -24.20928,-11.07199 -31.625,-19.28125 -0.0474,-0.27163 -0.0591,-0.52807 0.0625,-0.5 z"
         style="fill:url(#radialGradient4919);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4932"
         d="m 947.24265,644.00366 c 6.33747,0.24632 11.43592,4.22415 9.875,12.28125 -6.88669,-0.46809 -13.85244,-6.23134 -18.78125,-10.34375 2.88702,-1.38925 6.02558,-2.04946 8.90625,-1.9375 z"
         style="fill:#554400;fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path3964"
         d="m 963.61765,480.15991 18.71875,3.9375 -32.28125,8.21875 -32.125,-5.9375 45.6875,-6.21875 z"
         style="fill:#000000;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4451"
         d="m 963.61765,480.15991 18.71875,3.9375 c -30.53454,4.48756 -27.74037,-2.33066 -64.40625,2.28125 l 45.6875,-6.21875 z"
         style="fill:url(#radialGradient4459);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path4461"
         d="m 980.6489,484.50366 2.03125,0.4375 -32.28125,8.21875 -32.09375,-5.90625 2.90625,-0.40625 29.1875,5.375 30.25,-7.71875 z"
         style="fill:url(#radialGradient4472);fill-opacity:1;stroke:none" />
      <path
         inkscape:connector-curvature="0"
         id="path33129"
         d="m 854.7739,471.28491 5.65625,6.09375 c -34.24641,4.92709 -63.68714,12.72529 -91.46875,21.53125 l -75.0625,-0.90625 0.21875,-4.65625 -5.84375,-3.9375 75.78125,0.875 c 28.16547,-8.75469 56.2,-15.96325 90.71875,-19 z"
         style="fill:#000000;fill-opacity:1;stroke:none" />
    </g>
  </g>
</svg>`;

    return svg;
  },
};
