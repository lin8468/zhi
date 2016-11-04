// Ionic Starter App


angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',"$ionicConfigProvider",function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

  //Modify the tabs of android display position! start
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  //Modify the tabs of android display position! end




  $stateProvider
    .state('tabs',{
      url:'/tab',
      templateUrl:'templates/tabs.html'
    })
    .state('tabs.home',{
      url:'/home',
      views:{
        'home-tab':{
          templateUrl:'templates/home.html'
        }
      }
    })
    .state('tabs.fact',{
      url:'/fact',
      views:{
        'home-tab':{
          templateUrl:'templates/fact.html'
        }
      }
    })
    .state('tabs.break',{
      url:'/break',
      views:{
        'home-tab':{
          templateUrl:'templates/break.html'
        }
      }
    })
    .state('tabs.break2',{
      url:'/break2',
      views:{
        'home-tab':{
          templateUrl:'templates/break2.html'
        }
      }
    })
    .state('tabs.fact2',{
      url:'/fact2',
      views:{
        'home-tab':{
          templateUrl:'templates/fact2.html'
        }
      }
    })
    .state('tabs.lunch',{
      url:'/lunch',
      views:{
        'home-tab':{
          templateUrl:'templates/lunch.html'
        }
      }
    })
    .state('tabs.lunch2',{
      url:'/lunch2',
      views:{
        'home-tab':{
          templateUrl:'templates/lunch2.html'
        }
      }
    })
    .state('tabs.fact3',{
      url:'/fact3',
      views:{
        'home-tab':{
          templateUrl:'templates/fact3.html'
        }
      }
    })
    .state('tabs.dinner',{
      url:'/dinner',
      views:{
        'home-tab':{
          templateUrl:'templates/dinner.html'
        }
      }
    })
    .state('tabs.dinner2',{
      url:'/dinner2',
      views:{
        'home-tab':{
          templateUrl:'templates/dinner2.html'
        }
      }
    })
    .state('tabs.sui',{
      url:'/sui',
      views:{
        'home-tab':{
          templateUrl:'templates/sui.html'
        }
      }
    })
    .state('tabs.about',{
      url:'/about',
      views:{
        'about-tab':{
          templateUrl:'templates/about.html'
        }
      }
    })
    .state('tabs.xue1',{
      url:'/xue1',
      views:{
        'about-tab':{
          templateUrl:'templates/xue1.html'
        }
      }
    })
    .state('tabs.xue2',{
      url:'/xue2',
      views:{
        'about-tab':{
          templateUrl:'templates/xue2.html'
        }
      }
    })
    .state('tabs.find',{
      url:'/find',
      views:{
        'find-tab':{
          templateUrl:'templates/find.html'
        }
      }
    })
    .state('tabs.contact',{
      url:'/contact',
      views:{
        'contact-tab':{
          templateUrl:'templates/contact.html'
        }
      }
    })
    .state('tabs.test1',{
      url:'/test1',
      views:{
        'home-tab':{
          templateUrl:'templates/about.html'
        }
      }
    })
    .state('tabs.test2',{
      url:'/test2',
      views:{
        'home-tab':{
          templateUrl:'templates/find.html'
        }
      }
    })
    .state('tabs.test3',{
      url:'/test3',
      views:{
        'home-tab':{
          templateUrl:'templates/contact.html'
        }
      }
    })
    $urlRouterProvider.otherwise('/tab/home')
}])
