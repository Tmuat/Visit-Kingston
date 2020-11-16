// Slider Code taken from https://www.codeseek.co/suez/cities-slider-react-OjGQza

let _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      let descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    let arr2 = Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

let HeroSlider = (function (_React$Component) {
  _inherits(HeroSlider, _React$Component);

  function HeroSlider(props) {
    _classCallCheck(this, HeroSlider);

    let _this = _possibleConstructorReturn(
      this,
      (HeroSlider.__proto__ || Object.getPrototypeOf(HeroSlider)).call(
        this,
        props
      )
    );

    _this.IMAGE_PARTS = 4;

    _this.changeTO = null;
    _this.AUTOCHANGE_TIME = 4000;

    _this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    return _this;
  }

  _createClass(HeroSlider, [
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.clearTimeout(this.changeTO);
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        let _this2 = this;

        this.runAutochangeTO();
        setTimeout(function () {
          _this2.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
      },
    },
    {
      key: "runAutochangeTO",
      value: function runAutochangeTO() {
        let _this3 = this;

        this.changeTO = setTimeout(function () {
          _this3.changeSlides(1);
          _this3.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
      },
    },
    {
      key: "changeSlides",
      value: function changeSlides(change) {
        window.clearTimeout(this.changeTO);
        let length = this.props.slides.length;

        let prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide: activeSlide, prevSlide: prevSlide });
      },
    },
    {
      key: "render",
      value: function render() {
        let _this4 = this;

        let _state = this.state,
          activeSlide = _state.activeSlide,
          prevSlide = _state.prevSlide,
          sliderReady = _state.sliderReady;

        return React.createElement(
          "div",
          { className: classNames("slider", { "s--ready": sliderReady }) },
          React.createElement(
            "div",
            { className: "slider__slides" },
            this.props.slides.map(function (slide, index) {
              return React.createElement(
                "div",
                {
                  className: classNames("slider__slide", {
                    "s--active": activeSlide === index,
                    "s--prev": prevSlide === index,
                  }),
                  key: slide.image,
                },
                // React.createElement(
                //   "div",
                //   { className: "slider__slide-content" },
                //   React.createElement(
                //     "h2",
                //     { className: "section-heading slider__slide-heading" },
                //     slide.image.split("").map(function (l, i) {
                //       return React.createElement(
                //         "span",
                //         { className: null, key: i },
                //         l
                //       );
                //     })
                //   ),
                //   React.createElement(
                //     "div",
                //     {
                //       className: "slider__slide-readmore",
                //     },
                //     React.createElement(
                //       "a",
                //       {
                //         className: "btn",
                //         href: slide.link,
                //       },
                //       "Find out more "
                //     )
                //   )
                // ),
                React.createElement(
                  "div",
                  { className: "slider__slide-parts" },
                  []
                    .concat(
                      _toConsumableArray(Array(_this4.IMAGE_PARTS).fill())
                    )
                    .map(function (x, i) {
                      return React.createElement(
                        "div",
                        { className: "slider__slide-part", key: i },
                        React.createElement("div", {
                          className: "slider__slide-part-inner",
                          style: { backgroundImage: "url(" + slide.img + ")" },
                        })
                      );
                    })
                )
              );
            })
          )
        );
      },
    },
  ]);

  return HeroSlider;
})(React.Component);

let slides = [
  {
    image: "Riverside",
    img: "/assets/media/images/landing_image_1.jpg",
  },
  {
    image: "Christmas Market",
    img: "/assets/media/images/landing_image_2.jpg",
  },
];

ReactDOM.render(
  React.createElement(HeroSlider, { slides: slides }),
  document.querySelector("#hero")
);
