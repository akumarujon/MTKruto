import { DC } from "./transport/2_transport_provider.ts";

export const ACK_THRESHOLD = 10;

export type PublicKeys = readonly [bigint, [bigint, bigint]][];

export const PUBLIC_KEYS: PublicKeys = Object.freeze([
  [
    1562291298945373506n,
    [
      23978758553106631992002580305620005835060400692492410830911253690968985161770919571023213268734637655796435779238577529598157303153929847488434262037216243092374262144086701552588446162198373312512977891135864544907383666560742498178155572733831904785232310227644261688873841336264291123806158164086416723396618993440700301670694812377102225720438542027067699276781356881649272759102712053106917756470596037969358935162126553921536961079884698448464480018715128825516337818216719699963463996161433765618041475321701550049005950467552064133935768219696743607832667385715968297285043180567281391541729832333512747963903n,
      0x010001n,
    ],
  ],
  [
    -5859577972006586033n,
    [
      22718646979021445086805300267873836551952264292680929983215333222894263271262525404635917732844879510479026727119219632282263022986926715926905675829369119276087034208478103497496557160062032769614235480480336458978483235018994623019124956728706285653879392359295937777480998285327855536342942377483433941973435757959758939732133845114873967169906896837881767555178893700532356888631557478214225236142802178882405660867509208028117895779092487773043163348085906022471454630364430126878252139917614178636934412103623869072904053827933244809215364242885476208852061471203189128281292392955960922615335169478055469443233n,
      0x010001n,
    ],
  ],
  [
    6491968696586960280n,
    [
      24037766801008650742980770419085067708599000106468359115503808361335510549334399420739246345211161442047800836519033544747025851693968269285475039555231773313724462564908666239840898204833183290939296455776367417572678362602041185421910456164281750840651140599266716366431221860463163678044675384797103831824697137394559208723253047225996994374103488753637228569081911062604259973219466527532055001206549020539767836549715548081391829906556645384762696840019083743214331245456023666332360278739093925808884746079174665122518196162846505196334513910135812480878181576802670132412681595747104670774040613733524133809153n,
      0x010001n,
    ],
  ],
  [
    6427105915145367799n,
    [
      31397816550885835230852157218780061958032265523683168121843010509948800713659136033293079736773570890108359386900507157088426116094690624871733896824903852456886718992868563715191423124852392192384776940880374150924862556483265420429274105533416857995735561007585523057519126772910116492334365011698443015363661211091297809380358424492944309160255944656822953372259436558863685653753335752581293598201573897522965811840624726977678182734005734657974801081161883696567467154361452234673787603576616026939590191461977891577841590473181783600507799709098085844100324450292291634823637124474260102961720620172155279101593n,
      0x010001n,
    ],
  ],
  [
    2685959930972952888n,
    [
      26116452836398416979797305072689667731920792444719420894507233217583880016919839198933132831614577761055257601279314443643343829322673079507289288794037776440997114291901674159336092732642632335510805799979810490880123733875085953240308174829572850043815591814961322487356309436839345409265418743385218003844674882350344739294993993718594352763930783186948532591492541249018768829381368348025815240824308999288789287057821939532386904237315176663437974522079590346893012292633393394277518254001578790831900469743479052551168559741017618280316677467349819664126886746238706747395316681794438145749441351286324575707503n,
      0x010001n,
    ],
  ],
  [
    -3414540481677951611n,
    [
      29379598170669337022986177149456128565388431120058863768162556424047512191330847455146576344487764408661701890505066208632169112269581063774293102577308490531282748465986139880977280302242772832972539403531316010870401287642763009136156734339538042419388722777357134487746169093539093850251243897188928735903389451772730245253062963384108812842079887538976360465290946139638691491496062099570836476454855996319192747663615955633778034897140982517446405334423701359108810182097749467210509584293428076654573384828809574217079944388301239431309115013843331317877374435868468779972014486325557807783825502498215169806323n,
      0x010001n,
    ],
  ],
  [
    -5595554452916591101n,
    [
      25342889448840415564971689590713473206898847759084779052582026594546022463853940585885215951168491965708222649399180603818074200620463776135424884632162512403163793083921641631564740959529419359595852941166848940585952337613333022396096584117954892216031229237302943701877588456738335398602461675225081791820393153757504952636234951323237820036543581047826906120927972487366805292115792231423684261262330394324750785450942589751755390156647751460719351439969059949569615302809050721500330239005077889855323917509948255722081644689442127297605422579707142646660768825302832201908302295573257427896031830742328565032949n,
      0x010001n,
    ],
  ],
]);

export const VECTOR_CONSTRUCTOR = 0x1CB5C415;

export const INITIAL_DC: DC = "2-test";

export const LAYER = 160;

export const APP_VERSION = "MTKruto 0.0.969";

// @ts-ignore: lib
export const DEVICE_MODEL = typeof Deno === "undefined" ? typeof navigator === "undefined" ? typeof process === "undefined" ? "Unknown" : process.platform + "-" + process.arch : navigator.userAgent.split(" ")[0] : Deno.build.os + "-" + Deno.build.arch;

export const LANG_CODE = typeof navigator === "undefined" ? "en" : navigator.language.split("-")[0];

export const LANG_PACK = "";

export const SYSTEM_LANG_CODE = typeof navigator === "undefined" ? "en" : navigator.language.split("-")[0];

// @ts-ignore: lib
export const SYSTEM_VERSION = typeof navigator === "undefined" ? typeof process === "undefined" ? "Unknown" : "Node.js/" + process.versions.node : navigator.userAgent;

export const USERNAME_TTL = 86_400;

export const STICKER_SET_NAME_TTL = 172_800;

export const MAX_CHAT_ID = 999999999999;

export const MAX_CHANNEL_ID = 997852516352;

export const ZERO_CHANNEL_ID = -1000000000000;

export const CHANNEL_DIFFERENCE_LIMIT_USER = 100;

export const CHANNEL_DIFFERENCE_LIMIT_BOT = 100_000;
