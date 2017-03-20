;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1064 1024">' +
    '' +
    '<path d="M-48.606208 883.816448"  ></path>' +
    '' +
    '<path d="M1041.337344 883.816448"  ></path>' +
    '' +
    '<path d="M64.3328 847.535104"  ></path>' +
    '' +
    '<path d="M531.136512 264.671232c49.911808-4.226048 86.362112-18.968576 111.896576-34.761728 13.959168-8.635392 28.529664-18.312192 40.04352-29.115392 10.964992-14.560256 18.822144-26.2144 26.884096-38.043648 7.302144-10.724352 12.719104-24.981504 18.102272-43.679744 3.9424-13.714432 7.124992-27.711488 7.124992-44.145664L735.187968 62.239744c-48.272384 3.757056-86.67648 19.247104-112.446464 34.760704-14.816256 8.90368-27.9808 18.312192-40.597504 29.115392-9.325568 11.271168-18.6624 23.478272-26.877952 38.043648-7.13728 12.676096-13.468672 25.87136-18.103296 44.619776-3.605504 14.599168-6.028288 27.706368-6.028288 42.27584L531.134464 264.671232z"  ></path>' +
    '' +
    '<path d="M120.833024 568.546304c-0.423936 11.743232 0.35328 25.33376 1.645568 38.513664 6.387712 65.256448 26.170368 134.386688 68.568064 200.552448 34.957312 54.541312 64.080896 93.55264 94.343168 115.540992 31.174656 22.633472 60.3392 33.815552 87.766016 33.815552 58.151936 0 124.514304-46.027776 178.82624-46.027776 51.555328 0 103.667712 46.027776 157.978624 46.027776 29.067264 0 56.14592-8.863744 82.276352-25.363456 28.18048-17.787904 50.100224-39.804928 71.86432-65.753088 8.953856-10.694656 16.605184-22.017024 25.782272-36.635648 14.964736-23.87456 31.803392-57.769984 53.745664-99.100672l0-6.106112c-80.075776-25.363456-137.678848-95.343616-137.678848-172.841984 0-36.164608 9.645056-68.22912 30.170112-96.75264 21.706752-30.181376 49.374208-51.190784 82.281472-66.694144-49.374208-57.300992-126.713856-89.704448-187.053056-89.704448-68.01408 0-163.465216 41.331712-191.983616 41.331712-29.06624 0-91.057152-38.048768-172.796928-38.048768-53.1968 0-124.804096 18.557952-178.818048 69.047296-35.941376 33.5872-52.534272 84.615168-62.528512 144.186368C122.049536 533.408768 121.506816 549.76 120.833024 568.546304z"  ></path>' +
    '' +
    '<path d="M1000.128512 847.535104"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhinengerji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M285.272185 828.660056c0 35.984562-29.17139 65.154929-65.154929 65.154929l0 0c-35.984562 0-65.154929-29.17139-65.154929-65.154929L154.962328 642.502239c0-35.984562 29.17139-65.154929 65.154929-65.154929l0 0c35.984562 0 65.154929 29.17139 65.154929 65.154929L285.272185 828.660056z"  ></path>' +
    '' +
    '<path d="M870.682126 828.660056c0 35.984562-29.17139 65.154929-65.154929 65.154929l0 0c-35.984562 0-65.154929-29.17139-65.154929-65.154929L740.372268 642.502239c0-35.984562 29.17139-65.154929 65.154929-65.154929l0 0c35.984562 0 65.154929 29.17139 65.154929 65.154929L870.682126 828.660056z"  ></path>' +
    '' +
    '<path d="M130.306788 807.478641c0 18.263969-14.806217 33.070186-33.070186 33.070186l0 0c-18.263969 0-33.070186-14.806217-33.070186-33.070186L64.166415 663.682631c0-18.263969 14.806217-33.070186 33.070186-33.070186l0 0c18.263969 0 33.070186 14.806217 33.070186 33.070186L130.306788 807.478641z"  ></path>' +
    '' +
    '<path d="M957.463608 807.478641c0 18.263969-14.806217 33.070186-33.070186 33.070186l0 0c-18.263969 0-33.070186-14.806217-33.070186-33.070186L891.323235 663.682631c0-18.263969 14.806217-33.070186 33.070186-33.070186l0 0c18.263969 0 33.070186 14.806217 33.070186 33.070186L957.463608 807.478641z"  ></path>' +
    '' +
    '<path d="M511.25094 150.668535c-227.067552 0-411.855162 183.986361-413.432077 410.691663-0.118704 0.991584-0.582261 1.863441-0.582261 2.885723 0 13.857613 11.232832 25.090445 25.089421 25.090445 13.857613 0 25.090445-11.232832 25.090445-25.090445 0-0.610914-0.303922-1.122567-0.347924-1.723248 0.942465-200.060455 163.90193-362.54613 364.181373-362.54613 199.695135 0 362.213555 161.557536 364.094392 360.817766-0.169869 1.176802-0.696872 2.226714-0.696872 3.450589 0 13.857613 11.232832 25.090445 25.089421 25.090445 13.857613 0 25.090445-11.232832 25.090445-25.090445C924.828326 336.203158 739.293703 150.668535 511.25094 150.668535z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chongzhiqiaquan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M671.981644 640.006396l191.996802 0c17.750269 0 31.999808-14.374382 31.999808-31.999808L895.978255 416.009785c0-17.749246-14.249539-31.999808-31.999808-31.999808l-191.996802 0c-17.624403 0-31.999808 14.250562-31.999808 31.999808l0 191.996802C639.98286 625.632013 654.358265 640.006396 671.981644 640.006396zM703.981453 448.009593l127.998209 0 0 127.998209-127.998209 0L703.981453 448.009593z"  ></path>' +
    '' +
    '<path d="M160.022577 768.004605l703.95587 0c17.750269 0 31.999808-14.375405 31.999808-31.999808 0-17.750269-14.249539-31.999808-31.999808-31.999808l-703.95587 0c-17.687848 0-31.999808 14.250562-31.999808 31.999808C128.022769 753.629199 142.334729 768.004605 160.022577 768.004605z"  ></path>' +
    '' +
    '<path d="M160.022577 640.006396l127.998209 0c17.686824 0 31.999808-14.374382 31.999808-31.999808 0-17.750269-14.31196-31.999808-31.999808-31.999808l-127.998209 0c-17.687848 0-31.999808 14.249539-31.999808 31.999808C128.022769 625.632013 142.334729 640.006396 160.022577 640.006396z"  ></path>' +
    '' +
    '<path d="M959.977871 192.014198l-895.953695 0c-35.374672 0-63.999616 28.624944-63.999616 63.999616l0 639.987976c0 35.374672 28.624944 63.999616 63.999616 63.999616l895.953695 0c35.373649 0 63.998593-28.624944 63.998593-63.999616L1023.976464 256.013815C1023.976464 220.639143 995.35152 192.014198 959.977871 192.014198zM959.977871 896.001791l-895.953695 0L64.024176 256.013815l895.953695 0L959.977871 896.001791z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ipod" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M768 0 256 0C220.672 0 192 28.672 192 64l0 896c0 35.328 28.672 64 64 64l512 0c35.328 0 64-28.672 64-64L832 64C832 28.672 803.328 0 768 0zM512 960c-106.016 0-192-85.984-192-192s85.984-192 192-192 192 85.984 192 192S618.016 960 512 960zM768 480c0 17.696-14.304 32-32 32L288 512c-17.664 0-32-14.304-32-32L256 96c0-17.696 14.336-32 32-32l448 0c17.696 0 32 14.304 32 32L768 480zM512 704c-35.328 0-64 28.672-64 64s28.672 64 64 64 64-28.672 64-64S547.328 704 512 704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1024.306985 962.909963 754.67173 729.601279c71.220546-77.360248 114.812431-180.507245 114.812431-293.682422 0-239.243729-194.62856-433.872289-433.872289-433.872289C196.368142 2.046567 1.637254 196.675127 1.637254 435.918857c0 239.243729 194.62856 433.872289 433.872289 433.872289 104.067952 0 199.744979-36.838213 274.649345-98.235235l274.34236 237.29949L1024.306985 962.909963zM435.611872 809.008094C229.829519 809.008094 62.420306 641.598881 62.420306 435.918857c0-205.680024 167.409214-373.089238 373.089238-373.089238 205.680024 0 373.089238 167.409214 373.089238 373.089238C808.701109 641.598881 641.291896 809.008094 435.611872 809.008094z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M154.106004 64.562113h715.899595c49.421921 0 89.487577 40.063609 89.487578 89.487577v715.901643c0 49.421921-40.065657 89.487577-89.487578 89.487578H154.106004c-49.423969 0-89.487577-40.065657-89.487577-89.487578V154.04969c0-49.423969 40.063609-89.487577 89.487577-89.487577z m533.275313 209.733694l-300.395667 69.211576s-22.528549 5.246388-22.528549 23.072232v312.682292c-11.263762-3.217048-24.016254-5.080519-37.548947-5.080519-45.631497 0-82.608092 20.653815-82.608092 46.139344 0 25.488601 36.976595 46.146512 82.608092 46.146512 45.62945 0 82.61014-20.65791 82.61014-46.146512v-245.128386l255.334474-57.017102v191.887373c-11.263762-3.20988-24.016254-5.078471-37.548946-5.078471-45.62945 0-82.61014 20.65791-82.61014 46.135249 0 25.490649 36.98069 46.148559 82.61014 46.148559 45.631497 0 82.608092-20.65791 82.608092-46.148559V297.383397c0-12.756587-10.092438-23.078375-22.530597-23.078375v-0.009215m0 0" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinle1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.417687 63.009056c-247.165286 0-447.541943 200.376657-447.541943 447.540919 0 247.166309 200.376657 447.541943 447.541943 447.541943 247.164263 0 447.540919-200.376657 447.540919-447.541943 0-247.164263-200.375633-447.540919-447.540919-447.540919z m198.154035 602.436732c0 27.564799-16.538675 50.718125-39.692 60.641125-22.051225 8.820899-43.00035 5.513574-81.589227 5.513574-62.84635 0-92.615351-114.667599-7.717775-138.92405 16.537651-4.41045 46.306652-4.41045 66.152652-3.307325 6.615675 0 18.7439-3.307326 18.7439-33.076327V399.728984c0-6.615675 4.41045-31.975249-23.15435-25.359574-34.17945 7.717775-167.587879 35.282574-177.511902 37.487799-14.334473 3.307326-30.872125 4.41045-29.770024 40.795125 1.103124 37.486776 0 240.359276 0 273.435602 0 38.5899-29.769001 50.718125-45.205575 55.127552-15.435551 4.411473-59.538001 4.411473-70.564126 4.411473-94.820576 0-82.693374-136.717801-15.43555-136.717801 13.230326 0 39.692001-1.102101 57.332776-1.102101 22.051225 0 29.770024-16.537651 29.770024-49.615001 0-18.742876-1.103124-164.2826-1.103124-231.538377 0-67.257823 0-77.1798 38.5899-86.0007 33.07735-7.717775 180.820252-34.17945 201.768353-38.5899 19.848047-3.307326 80.488149-23.152303 80.488149 27.564799 0.001023 50.716078-1.102101 367.152031-1.102101 395.817908z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)