(function () {
  var particlesOptions = {
    'particles': {
      'number': {
        'value': 80,
        'density': {
          'enable': true,
          'value_area': 800
        }
      },
      'color': {
        'value': '#8C867B'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': 'img/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.5,
        'random': false,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 3,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 150,
        'color': '#8C867B',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'grab'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 140,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  }

  function async(u, c) {
    var d = document, t = 'script',
        o = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    o.src = '//' + u;
    if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
    s.parentNode.insertBefore(o, s);
  }

  function init () {
    var container = document.getElementById('search-container')
    var form = document.getElementById('search-form')
    var field = document.getElementById('search-field')

    container.style.display = 'block'

    form.addEventListener('submit', function search (event) {
      event.preventDefault()
      var route = window.router[field.value]
      if (route) window.location.href = route
    })

    async('cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', function () {
      window.particlesJS('particles-js', particlesOptions)
    })
  }

  init()
}())
