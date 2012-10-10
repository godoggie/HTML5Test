/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['53px','36px','92px','142px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['187','144','auto','auto','auto','auto'],
            text:"Foobar!",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Ellipse}": [
            ["style", "top", '11px'],
            ["style", "height", '146px'],
            ["style", "left", '302px'],
            ["style", "width", '137px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "style", "${_Ellipse}", "top", '36px', { fromValue: '11px'}], position: 0, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_Ellipse}", "top", '239px', { fromValue: '36px'}], position: 1000, duration: 1000 },
            { id: "eid20", tween: [ "style", "${_Ellipse}", "top", '172px', { fromValue: '239px'}], position: 2000, duration: 1000 },
            { id: "eid12", tween: [ "style", "${_Ellipse}", "height", '142px', { fromValue: '146px'}], position: 0, duration: 1000 },
            { id: "eid19", tween: [ "style", "${_Ellipse}", "height", '209px', { fromValue: '142px'}], position: 1000, duration: 2000 },
            { id: "eid8", tween: [ "style", "${_Ellipse}", "left", '53px', { fromValue: '302px'}], position: 0, duration: 1000 },
            { id: "eid16", tween: [ "style", "${_Ellipse}", "left", '45px', { fromValue: '53px'}], position: 1000, duration: 1000 },
            { id: "eid14", tween: [ "style", "${_Ellipse}", "width", '92px', { fromValue: '137px'}], position: 0, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_Ellipse}", "width", '253px', { fromValue: '92px'}], position: 1000, duration: 1000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-94006968");
