module.exports = function(grunt){

  grunt.initConfig({

    // Vérifie que nos js sont corrects (on considere que les js des librairies le sont deja.)
    jshint: {
      /*all: ['../../scripts/js/*.js'],*/
      /*ASCII: ['../../scripts/js/ASCII*.js'],*/
      /*utils: ['../../scripts/js/utils.js'],*/
      wz: ['../../scripts/js/wz*.js'],
    },

    /* Concatene plusieurs fichiers en un seul
    concat: {
      options: {
        // ajoute automatiquement des ";" entre les javascripts, au cas ou il en manque.
        separator: ';',
      },
      dist: {
        src: ['bower_components/jquery/dist/jquery.min.js'],
        dest: 'grunt_tests/built.js',
      },
    },*/

    /* Concatene et minifie les fichiers JS.
    uglify: {
      options: {
        // mangle permet de renommer les variables JS.
        mangle: false
      },
      dist: {
        files: {
          'grunt_tests/built.min.js': ['grunt_tests/built.js', 'autre.js']
        }
      }
    },*/

    // Compile les fichiers LESS en fichiers CSS
    less: {
      mbExtruder: {
        files: [{
            expand: true,
            cwd: "bower_components/jquery.mb.extruder/css",
            src: ["*.less"],
            dest: "bower_components/jquery.mb.extruder/css",
            ext: ".grunt.css",
        }]
        /*files: {
          "bower_components/jquery.mb.extruder/css/mbExtruder.grunt.css": "bower_components/jquery.mb.extruder/css/mbExtruder.less"
        },*/
      },
    },

    // Concatene et minifie les fichiers CSS.
    cssmin: {
      options: {
        shorthandCompacting: true,
        roundingPrecision: -1,
        keepSpecialComments: "*",
        /*rebase: true /* change all paths inside css file */
      },
      mbExtruder: {
        files: {
          "../../scripts/js/bower_components/jquery.mb.extruder/css/mbExtruder.min.css": ["bower_components/jquery.mb.extruder/css/*.grunt.css"]
        }
      },
      normalize: {
        files: {
          "../../scripts/js/bower_components/normalize.css": ["bower_components/normalize.css/*.css"]
        }
      }
    },

    // Copie les fichiers vers leur répertoire définitif
    copy: {
      main: {
        files: [
          // includes all minified files within path "jquery/dist"
          {
           expand: true,
           flatten: true,
           filter: 'isFile',
           src: ['bower_components/jquery/dist/*.min.*'],
           dest: '../../scripts/js/bower_components/jquery/'
          },

          // includes all minified files within path "jquery-ui/"
          {
           expand: true,
           filter: 'isFile',
           src: ['bower_components/jquery-ui/*.min.*'],
           dest: '../../scripts/js/'
          },

          // includes all files & sub-directories within path "jquery-ui/themes/smoothness"
          {
           expand: true,
           src: ['bower_components/jquery-ui/themes/smoothness/**'],
           dest: '../../scripts/js/'
          },

          // safari_mobile_links
          {
            expand: true,
            filter: 'isFile',
            src: ['bower_components/safari_mobile_links/compressed.js'],
            dest: '../../scripts/js/',
          },

          // mbExtruder (including mb.flipText)
          {
            expand: true,
            src: ['bower_components/jquery.mb.extruder/inc/*.js', 'bower_components/jquery.mb.extruder/elements/*' ],
            dest: '../../scripts/js/',
          },
          // hoverIntent
          {
            expand: true,
            filter: 'isFile',
            src: ['bower_components/jquery-hoverIntent/*.js' ],
            dest: '../../scripts/js/',
          },

          // ASCIIMathML (+LaTeXMathML)
          {
            expand: true,
            flatten: true,
            filter: 'isFile',
            src: ['bower_components/asciimathml/*.js' ],
            dest: '../../scripts/js/',
          },

        ],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  /*grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');*/
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['less', 'cssmin', 'copy'])

}