// iframes-data.js
// List of DX Mesh nodes
const dxMeshNodes = [
  { name: "WORCESTER: 7ACC", gateway: "3662969548" },
  { name: "KIDDERMINSTER: KD1", gateway: "2956716132" },
  { name: "BRIDGNORTH: WV16", gateway: "3952198667" },
  { name: "NEAR FRANKLEY: MHM BOT", gateway: "2224784856" },
  { name: "WORCESTER:Worcester South", gateway: "1128082424" },
  { name: "TELFORD: WOBBO", gateway: "3663131456" },
  { name: "NEAR STOURBRIDGE:AMBLECOTE 1", gateway: "1136043812" },
  { name: "WOLVERHAMPTON:CATISFACTION", gateway: "1660465688" },
  { name: "TELFORD AREA:Neil-SEEED-13", gateway: "647556371" },
  { name: "GLOUCESTER: KIRSTY.GLOS", gateway: "3121470552" },
  { name: "GLOUCESTER: 2E0THR_BASE", gateway: "1127935232" },
  { name: "SUTTON AREA OF LONDON:GARRETH MINI MOBILE (VIA MHM MQTT)", gateway: "2925612264" },
  { name: "BEDWORTH: B178", gateway: "1136111992" },
  { name: "WHITESTONE,NUNEATON: 📻🤖 CEZ", gateway: "3663860080" },
  { name: "LOWBANDS NEAR LEDBURY:ANOTHER SLICE OF CHEESE PLEASE", gateway: "2666309328" },
  { name: "HEREFORD:MESH SWD5", gateway: "3145934248" },
  { name: "WESTON COYNEY: WESTON COYNEY IV", gateway: "2086338380" },
  { name: "STAFFORD: CASTLEVIEW STAFFORD", gateway: "3663087084" },
  { name: "STAFFORD: G1LPW IVAN", gateway: "3663643848" },
  { name: "STAFFORD: M0VTS Base 1", gateway: "2086338512" },
  { name: "IBSTOCK: M7JLI", gateway: "3663386148" },
  { name: "BISHOPS CLEEVE: BILLBAG2 BISHOPS CLEEVE", gateway: "3662959380" },
  { name: "HEMPSTED CASTLE: HEMPSTED CASTLE", gateway: "3127545928" },
  { name: "BOLDMERE: ZFS NE B'HAM MQTT UPLINK (NM)", gateway: "1136042788" },
  { name: "TRAFFORD: QGazQ M16", gateway: "1129706364" },
  { name: "MACCLESFIELD: 🏳️‍⚧️ | Kennel", gateway: "3679581976" },
  { name: "NORTHWICH: Wolsey Base Heltec", gateway: "862345548" },
  { name: "MANCHESTER AREA: RFC 1149", gateway: "3663104704" },
  { name: "HAYDOCK ST HELENS: Meshtastic 8eac", gateway: "3806564012" },
  { name: "WALMER BRIDGE: COOL110 BASE", gateway: "1978524804" },
  { name: "TRAFFORD: PJC BASE TRAFFORD M33", gateway: "2697690056" },
  { name: "LEYLAND:THARSIS BASE", gateway: "3127313272" },
  { name: "COTTAM:COTTAM HELTEC A", gateway: "2224772384" },
  { name: "POULTON-LE-FYLDE:Hadgebury [Base 🗼]", gateway: "3176074008" },
  { name: "LANCASTER:DJ HELTEC V3 BASE", gateway: "3176074008" },
  { name: "LONGRIDGE:LONGRIDGE _G3NKL_2]", gateway: "2665946500" },
  { name: "LONGRIDGE:DANGERMOUSE", gateway: "2666335772" },
  { name: "NETHERTON: DY2-1 MAY COME BACK ONLINE", gateway: "1128148704" },
  { name: "TEWKESBURY: PORTEX MAY COME BACK ONLINE", gateway: "3663510072" },
  { name: "SPARE: SPARE", gateway: "" }
];

// Function to generate iframes dynamically
function loadDxMeshIframes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ''; // Clear existing content
  dxMeshNodes.forEach(node => {
    const wrapper = document.createElement('div');
    wrapper.className = 'iframe-wrapper';

    const title = document.createElement('p');
    title.textContent = node.name;
    wrapper.appendChild(title);

    const iframe = document.createElement('iframe');
    iframe.src = node.gateway ? `https://meshtastic.liamcottle.net/api/v1/text-messages/embed?gateway_id=${node.gateway}` : '';
    wrapper.appendChild(iframe);

    const button = document.createElement('button');
    button.className = 'hide-button';
    button.textContent = 'Hide';
    button.onclick = () => {
      const isHidden = iframe.style.display === 'none';
      iframe.style.display = isHidden ? 'block' : 'none';
      button.textContent = isHidden ? 'Hide' : 'Show';
    };
    wrapper.appendChild(button);

    container.appendChild(wrapper);
  });
}
