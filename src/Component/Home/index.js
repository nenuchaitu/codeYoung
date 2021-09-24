import { Component } from "react";
import Loader from "react-loader-spinner";
import CurrencyConverter from "../CurrencyConverter";
import FailureView from "../FailureView";
import OneToManyConversion from "../OneToManyConversion";
import { LoadingViewContainer, SuccessViewContainer } from "./StyledComponents";

/*const data = {
  base: "EUR",
  rates: {
    AED: 4.306031,
    AFN: 101.567697,
    ALL: 121.151349,
    AMD: 570.467133,
    ANG: 2.10731,
    AOA: 717.868685,
    ARS: 115.339772,
    AUD: 1.616444,
    AWG: 2.11023,
    AZN: 1.982948,
    BAM: 1.956489,
    BBD: 2.370409,
    BDT: 100.209674,
    BGN: 1.955775,
    BHD: 0.441883,
    BIF: 2332.265417,
    BMD: 1.17235,
    BND: 1.586202,
    BOB: 8.094597,
    BRL: 6.179106,
    BSD: 1.174001,
    BTC: 0.000027854747,
    BTN: 86.427366,
    BWP: 13.131626,
    BYN: 2.938415,
    BYR: 22978.062398,
    BZD: 2.366408,
    CAD: 1.498745,
    CDF: 2348.217491,
    CHF: 1.08348,
    CLF: 0.033397,
    CLP: 921.5259,
    CNY: 7.58135,
    COP: 4498.600507,
    CRC: 732.962042,
    CUC: 1.17235,
    CUP: 31.067278,
    CVE: 110.303117,
    CZK: 25.402014,
    DJF: 208.991329,
    DKK: 7.436381,
    DOP: 66.434958,
    DZD: 160.47202,
    EGP: 18.414709,
    ERN: 17.59106,
    ETB: 54.311805,
    EUR: 1,
    FJD: 2.460877,
    FKP: 0.847,
    GBP: 0.8586,
    GEL: 3.640112,
    GGP: 0.847,
    GHS: 7.083448,
    GIP: 0.847,
    GMD: 60.48745,
    GNF: 11473.558456,
    GTQ: 9.080738,
    GYD: 245.194731,
    HKD: 9.128299,
    HNL: 28.299538,
    HRK: 7.494604,
    HTG: 115.640907,
    HUF: 352.666119,
    IDR: 16693.679567,
    ILS: 3.759492,
    IMP: 0.847,
    INR: 86.53175,
    IQD: 1713.987673,
    IRR: 49461.451612,
    ISK: 152.241212,
    JEP: 0.846999,
    JMD: 173.963632,
    JOD: 0.83122,
    JPY: 128.432709,
    KES: 129.308272,
    KGS: 99.422826,
    KHR: 4788.818237,
    KMF: 492.211629,
    KPW: 1055.115127,
    KRW: 1387.470533,
    KWD: 0.352878,
    KYD: 0.97833,
    KZT: 500.518692,
    LAK: 11551.793352,
    LBP: 1775.013381,
    LKR: 234.793133,
    LRD: 200.882026,
    LSL: 17.386261,
    LTL: 3.461646,
    LVL: 0.709143,
    LYD: 5.320116,
    MAD: 10.549446,
    MDL: 20.755695,
    MGA: 4646.556049,
    MKD: 61.576279,
    MMK: 2146.020235,
    MNT: 3328.580766,
    MOP: 9.414173,
    MRO: 418.528792,
    MUR: 50.292443,
    MVR: 18.050543,
    MWK: 957.357663,
    MXN: 23.545058,
    MYR: 4.910387,
    MZN: 74.831205,
    NAD: 17.386139,
    NGN: 483.078403,
    NIO: 41.226004,
    NOK: 10.146651,
    NPR: 138.287326,
    NZD: 1.669585,
    OMR: 0.451366,
    PAB: 1.174006,
    PEN: 4.835571,
    PGK: 4.12213,
    PHP: 58.81739,
    PKR: 198.576327,
    PLN: 4.616234,
    PYG: 8065.152632,
    QAR: 4.268478,
    RON: 4.948537,
    RSD: 117.64465,
    RUB: 85.420361,
    RWF: 1192.181806,
    SAR: 4.396857,
    SBD: 9.446916,
    SCR: 16.938853,
    SDG: 517.589859,
    SEK: 10.171263,
    SGD: 1.584618,
    SHP: 1.614798,
    SLL: 12274.505532,
    SOS: 685.825402,
    SRD: 25.081269,
    STD: 24265.280567,
    SVC: 10.272462,
    SYP: 1474.15785,
    SZL: 17.391762,
    THB: 39.167732,
    TJS: 13.3123,
    TMT: 4.103225,
    TND: 3.284963,
    TOP: 2.651563,
    TRY: 10.110359,
    TTD: 7.974688,
    TWD: 32.559092,
    TZS: 2718.679967,
    UAH: 31.338762,
    UGX: 4152.334899,
    USD: 1.17235,
    UYU: 50.146329,
    UZS: 12545.818373,
    VEF: 250683887323.17044,
    VND: 26682.688785,
    VUV: 130.871475,
    WST: 3.00159,
    XAF: 656.178155,
    XAG: 0.051382,
    XAU: 0.000659,
    XCD: 3.168335,
    XDR: 0.827379,
    XOF: 656.180954,
    XPF: 119.817653,
    YER: 294.08434,
    ZAR: 17.315318,
    ZMK: 10552.560995,
    ZMW: 19.311791,
    ZWL: 377.496261,
  },
};*/

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    data: {},
  };

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    const BaseUrl =
      "http://api.exchangeratesapi.io/v1/latest?access_key=189dea7d777f131fa2535a3b53fa6815";
    const dataFetched = await fetch(BaseUrl);
    if (dataFetched.ok) {
      const dataResolved = await dataFetched.json();
      const dataObject = {
        base: dataResolved.base,
        rates: Object({ ...dataResolved.rates }),
      };
      console.log(dataObject);
      this.setState({
        data: dataObject,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  componentDidMount() {
    this.getData();
  }
  renderLoadingView = () => (
    <LoadingViewContainer>
      <Loader type="ThreeDots" color="#000" height="50" width="50" />
    </LoadingViewContainer>
  );

  renderHomeSuccessView = () => {
    const { data } = this.state;
    console.log(data);
    return (
      <SuccessViewContainer>
        <CurrencyConverter data={data} />
        <OneToManyConversion data={data} />
      </SuccessViewContainer>
    );
  };

  renderHomeFailureView = () => <FailureView />;
  renderHomeView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return <>{this.renderHomeView()}</>;
  }
}
export default Home;
