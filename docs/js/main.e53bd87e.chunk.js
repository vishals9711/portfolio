(this['webpackJsonpmy-app'] = this['webpackJsonpmy-app'] || []).push([
  [0],
  {
    89: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(113),
        c = a(0),
        r = a(67),
        i = a.n(r),
        o = a(117),
        s = a(70),
        l = a(99),
        j = a(118),
        h = a(92),
        b = a(100),
        d = a(3),
        x = function () {
          var e = Object(h.c)('gray.600', 'gray.200'),
            t = Object(h.c)('#1a202c', '#ffffff'),
            a = Object(h.c)('#ffffff', '#1a202c');
          return Object(d.jsx)(l.a, {
            w: '100%',
            h: '800px',
            display: 'flex',
            backgroundColor: t,
            children: Object(d.jsx)(l.a, {
              w: '200px',
              h: '200px',
              p: 4,
              color: e,
              backgroundColor: a,
              margin: 'auto',
              display: 'flex',
              children: Object(d.jsx)(b.a, {
                display: 'flex',
                alignItems: 'center',
                margin: 'auto',
                children: 'Here is a centered div.',
              }),
            }),
          });
        },
        f = a(101),
        g = a(102),
        p = a(103),
        u = a(74),
        O = a(31),
        m = function () {
          var e = Object(h.c)('#ffffff', '#1a202c'),
            t = Object(h.c)('#1a202c', '#ffffff');
          return Object(d.jsxs)(l.a, {
            w: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: e,
            py: '4',
            mt: '0',
            children: [
              Object(d.jsx)(l.a, {
                children: Object(d.jsx)(f.a, {
                  as: 'h3',
                  size: 'xl',
                  marginBottom: '16px',
                  m: 'auto',
                  color: t,
                  children: 'Contact',
                }),
              }),
              Object(d.jsxs)(g.a, {
                flexWrap: 'wrap',
                maxW: '600px',
                my: '8',
                mx: 'auto',
                justifyContent: 'space-around',
                children: [
                  Object(d.jsx)(p.a, {
                    href: 'mailto:vishalsharma1907@gmail.com',
                    mx: '4',
                    children: Object(d.jsx)(O.c, { w: 16, h: 16 }),
                  }),
                  Object(d.jsx)(p.a, {
                    href: 'https://github.com/vishals9711',
                    mx: '4',
                    children: Object(d.jsx)(O.a, { w: 16, h: 16 }),
                  }),
                  Object(d.jsx)(p.a, {
                    href: 'https://www.linkedin.com/in/vishals9711/',
                    mx: '4',
                    children: Object(d.jsx)(O.b, { w: 16, h: 16 }),
                  }),
                ],
              }),
              Object(d.jsx)(g.a, {
                justifyContent: 'center',
                children: Object(d.jsx)(p.a, {
                  href: './Vishal_Ramanand_Sharma_Resume.pdf',
                  children: Object(d.jsx)(u.a, {
                    size: 'lg',
                    children: 'Resume',
                  }),
                }),
              }),
            ],
          });
        },
        y = a(104),
        w = function () {
          return Object(d.jsxs)(l.a, {
            children: [
              Object(d.jsx)(f.a, {
                marginY: '16px',
                as: 'h1',
                size: '3xl',
                children: 'Hi, I am Vishal Sharma.',
              }),
              Object(d.jsx)(f.a, {
                as: 'h3',
                size: 'xl',
                marginBottom: '16px',
                children: 'A Full Stack Engineer.',
              }),
              Object(d.jsx)(y.a, {
                maxW: 'container.sm',
                children: Object(d.jsx)(b.a, {
                  children:
                    "Experienced Senior Software Engineer with a demonstrated history of\n          working in the information technology and services industry. Currently\n          enrolled for the Master's program in Computer Science at San Francisco\n          State University.",
                }),
              }),
            ],
          });
        },
        v = a(30),
        S = a(106),
        k = a(107),
        C = a(109),
        A = a(115),
        B = a(105),
        W = a(116),
        D = a(114),
        L = a(1),
        z = a(60),
        F = function (e) {
          var t = Object(h.b)().toggleColorMode,
            a = Object(h.c)('dark', 'light'),
            n = Object(h.c)(z.a, z.b);
          return Object(d.jsx)(
            B.a,
            Object(v.a)(
              {
                size: 'md',
                fontSize: 'lg',
                variant: 'ghost',
                color: 'current',
                marginLeft: '2',
                onClick: t,
                icon: Object(d.jsx)(n, {}),
                'aria-label': 'Switch to '.concat(a, ' mode'),
              },
              e
            )
          );
        },
        T = function () {
          var e = Object(A.a)(),
            t = e.isOpen,
            a = e.onToggle;
          return Object(d.jsxs)(l.a, {
            children: [
              Object(d.jsxs)(g.a, {
                bg: Object(h.c)('white', 'gray.800'),
                color: Object(h.c)('gray.600', 'white'),
                minH: '60px',
                py: { base: 2 },
                px: { base: 4 },
                borderBottom: 1,
                borderStyle: 'solid',
                borderColor: Object(h.c)('gray.200', 'gray.900'),
                align: 'center',
                children: [
                  Object(d.jsx)(g.a, {
                    flex: { base: 1, md: 'auto' },
                    ml: { base: -2 },
                    display: { base: 'flex', md: 'none' },
                    children: Object(d.jsx)(B.a, {
                      onClick: a,
                      icon: t
                        ? Object(d.jsx)(S.a, { w: 3, h: 3 })
                        : Object(d.jsx)(k.a, { w: 5, h: 5 }),
                      variant: 'ghost',
                      'aria-label': 'Toggle Navigation',
                    }),
                  }),
                  Object(d.jsxs)(g.a, {
                    flex: { base: 1 },
                    justify: { base: 'center', md: 'start' },
                    children: [
                      Object(d.jsx)(b.a, {
                        textAlign: Object(W.a)({ base: 'center', md: 'left' }),
                        fontFamily: 'heading',
                        color: Object(h.c)('gray.800', 'white'),
                        children: 'VS.',
                      }),
                      Object(d.jsx)(g.a, {
                        display: { base: 'none', md: 'flex' },
                        ml: 10,
                        children: Object(d.jsx)(M, {}),
                      }),
                    ],
                  }),
                  Object(d.jsx)(j.a, {
                    flex: { base: 1, md: 0 },
                    justify: 'flex-end',
                    direction: 'row',
                    spacing: 6,
                    children: Object(d.jsx)(F, { justifySelf: 'flex-end' }),
                  }),
                ],
              }),
              Object(d.jsx)(D.a, {
                in: t,
                animateOpacity: !0,
                children: Object(d.jsx)(E, {}),
              }),
            ],
          });
        },
        M = function () {
          var e = Object(h.c)('gray.600', 'gray.200'),
            t = Object(h.c)('gray.800', 'white');
          return Object(d.jsx)(j.a, {
            direction: 'row',
            spacing: 4,
            children: R.map(function (a) {
              var n;
              return Object(d.jsx)(
                l.a,
                {
                  children: Object(d.jsx)(p.a, {
                    p: 2,
                    href: null !== (n = a.href) && void 0 !== n ? n : '#',
                    fontSize: 'md',
                    fontWeight: 500,
                    color: e,
                    _hover: { textDecoration: 'none', color: t },
                    children: a.label,
                  }),
                },
                a.label
              );
            }),
          });
        },
        E = function () {
          return Object(d.jsx)(j.a, {
            bg: Object(h.c)('white', 'gray.800'),
            p: 4,
            display: { md: 'none' },
            children: R.map(function (e) {
              return Object(d.jsx)(I, Object(v.a)({}, e), e.label);
            }),
          });
        },
        I = function (e) {
          var t = e.label,
            a = e.children,
            n = e.href,
            c = Object(A.a)(),
            r = c.isOpen,
            i = c.onToggle;
          return Object(d.jsxs)(j.a, {
            spacing: 4,
            onClick: a && i,
            children: [
              Object(d.jsxs)(g.a, {
                py: 2,
                as: p.a,
                href: null !== n && void 0 !== n ? n : '#',
                justify: 'space-between',
                align: 'center',
                _hover: { textDecoration: 'none' },
                children: [
                  Object(d.jsx)(b.a, {
                    fontWeight: 600,
                    color: Object(h.c)('gray.600', 'gray.200'),
                    children: t,
                  }),
                  a &&
                    Object(d.jsx)(L.a, {
                      as: C.a,
                      transition: 'all .25s ease-in-out',
                      transform: r ? 'rotate(180deg)' : '',
                      w: 6,
                      h: 6,
                    }),
                ],
              }),
              Object(d.jsx)(D.a, {
                in: r,
                animateOpacity: !0,
                style: { marginTop: '0!important' },
                children: Object(d.jsx)(j.a, {
                  mt: 2,
                  pl: 4,
                  borderLeft: 1,
                  borderStyle: 'solid',
                  borderColor: Object(h.c)('gray.200', 'gray.700'),
                  align: 'start',
                  children:
                    a &&
                    a.map(function (e) {
                      return Object(d.jsx)(
                        p.a,
                        { py: 2, href: e.href, children: e.label },
                        e.label
                      );
                    }),
                }),
              }),
            ],
          });
        },
        R = [
          { label: 'Projects', href: '#' },
          { label: 'Skills', href: '#' },
          { label: 'Contact', href: '#' },
        ],
        N = a(112),
        P = a(110),
        _ = a(111),
        J = function (e) {
          var t = e.githubLink,
            a = e.hostedLink,
            n = e.languages,
            c = e.projectDesc,
            r = e.projectName,
            i = Object(h.c)('gray.50', 'gray.800');
          return Object(d.jsx)(_.a, {
            py: 6,
            children: Object(d.jsxs)(l.a, {
              maxW: '320px',
              w: 'full',
              bg: Object(h.c)('white', 'gray.900'),
              boxShadow: '2xl',
              rounded: 'lg',
              p: 6,
              textAlign: 'center',
              children: [
                Object(d.jsx)(f.a, {
                  fontSize: '2xl',
                  fontFamily: 'body',
                  height: '56px',
                  children: r,
                }),
                Object(d.jsx)(b.a, {
                  textAlign: 'center',
                  color: Object(h.c)('gray.700', 'gray.400'),
                  px: 3,
                  marginTop: '1',
                  fontSize: 'medium',
                  height: '144px',
                  children: c,
                }),
                Object(d.jsx)(j.a, {
                  align: 'center',
                  justify: 'center',
                  direction: 'row',
                  mt: 1,
                  flexWrap: 'wrap',
                  height: '92px',
                  children: n.map(function (e) {
                    return (
                      (t = e),
                      Object(d.jsx)(d.Fragment, {
                        children: Object(d.jsx)(P.a, {
                          px: 2,
                          py: 1,
                          m: '5',
                          bg: i,
                          fontWeight: '400',
                          children: t,
                        }),
                      })
                    );
                    var t;
                  }),
                }),
                Object(d.jsxs)(j.a, {
                  mt: 8,
                  direction: 'row',
                  spacing: 4,
                  justifyContent: 'center',
                  children: [
                    Object(d.jsxs)(p.a, {
                      href: t,
                      isExternal: !0,
                      children: [' ', Object(d.jsx)(O.a, { w: 7, h: 7 })],
                    }),
                    a &&
                      Object(d.jsx)(p.a, {
                        href: a,
                        isExternal: !0,
                        children: Object(d.jsx)(N.a, { w: 7, h: 7 }),
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        V = [
          {
            projectName: 'Vaccination Slot Alert',
            projectDesc:
              'A web portal that can create Vaccination slot Alerts in India and notify via email or Text SMS when slots open up.',
            githubLink: 'https://github.com/vishals9711/cowin_notifier',
            languages: [
              'ReactJS',
              'Typescript',
              'Firebase SDK',
              'Twilio',
              'AWS',
            ],
            hostedLink: 'https://vaccineslotalert.in/',
          },
          {
            projectName: 'Food Reservation',
            projectDesc:
              'A PWA wherein people can reserve table at a restaurant, order food, pay bills thereby reducing contact and saving time for the restaurant and the customer.',
            githubLink: 'https://github.com/vishals9711/FoodReservation',
            languages: ['Ionic', 'ExpressJS', 'Typescript', 'MYSQL'],
          },
          {
            projectName: 'Car Black Box',
            projectDesc:
              'A program that tracks the vitals of a vehicle which can be used for investagation incase of an accident, additionally can also be used as a speed enforcer.',
            githubLink: 'https://github.com/vishals9711/black_box',
            languages: ['Angular', 'Google Maps SDK', 'IBM Bluemix'],
          },
          {
            projectName: 'Power, Energy and Machine Analyzer',
            projectDesc:
              'An all-in-one solution to monitor the electric grid & industrial machinery. This project done as part of Fellowship for Analog Devices (Anveshan)',
            githubLink: 'https://github.com/vishals9711/Anveshan',
            languages: ['Angular', 'Embedded C', 'IBM Bluemix'],
          },
        ],
        H = function () {
          return Object(d.jsxs)(l.a, {
            w: '100%',
            display: 'flex',
            flexDirection: 'column',
            children: [
              Object(d.jsx)(l.a, {
                children: Object(d.jsx)(f.a, {
                  as: 'h3',
                  size: 'xl',
                  marginBottom: '16px',
                  m: 'auto',
                  children: 'Projects',
                }),
              }),
              Object(d.jsx)(g.a, {
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                children: V.map(function (e, t) {
                  return Object(c.createElement)(
                    J,
                    Object(v.a)(Object(v.a)({}, e), {}, { key: t })
                  );
                }),
              }),
            ],
          });
        },
        Q = [
          'ReactJS',
          'Angular',
          'HTML/CSS',
          'Python',
          'TypeScript',
          'JavaScript',
          'SQL',
          'React Native',
          'Git',
          'FireBase',
          'IBM Bluemix',
          'Docker',
          'MySQL',
          'Agile Workflows',
        ],
        G = function () {
          var e = Object(h.c)('#1a202c', '#ffffff'),
            t = Object(h.c)('#ffffff', '#1a202c');
          return Object(d.jsxs)(l.a, {
            w: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: e,
            py: '4',
            children: [
              Object(d.jsx)(l.a, {
                children: Object(d.jsx)(f.a, {
                  as: 'h3',
                  size: 'xl',
                  marginBottom: '16px',
                  m: 'auto',
                  color: t,
                  children: 'Skills',
                }),
              }),
              Object(d.jsx)(g.a, {
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                maxW: '800px',
                m: 'auto',
                children: Q.map(function (e, t) {
                  return Object(d.jsxs)(
                    P.a,
                    { fontSize: '0.8em', m: '4', children: [' ', e] },
                    t
                  );
                }),
              }),
            ],
          });
        },
        K = function () {
          return Object(d.jsx)(o.a, {
            theme: s.theme,
            children: Object(d.jsxs)(l.a, {
              textAlign: 'center',
              fontSize: 'xl',
              children: [
                Object(d.jsx)(T, {}),
                Object(d.jsxs)(j.b, {
                  spacing: 8,
                  children: [
                    Object(d.jsx)(w, {}),
                    Object(d.jsx)(x, {}),
                    Object(d.jsx)(H, {}),
                    Object(d.jsx)(G, {}),
                    Object(d.jsx)(m, {}),
                  ],
                }),
              ],
            }),
          });
        },
        Y = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 120))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  c = t.getFCP,
                  r = t.getLCP,
                  i = t.getTTFB;
                a(e), n(e), c(e), r(e), i(e);
              });
        };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(
        Object(d.jsxs)(c.StrictMode, {
          children: [Object(d.jsx)(n.a, {}), Object(d.jsx)(K, {})],
        }),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            }),
        Y();
    },
  },
  [[89, 1, 2]],
]);
//# sourceMappingURL=main.e53bd87e.chunk.js.map
