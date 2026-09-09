export type Guide = { slug:string; title:string; description:string; readTime:string; category:string };
export const guides: Guide[] = [
  {slug:'how-to-choose-coffee',title:'How to choose coffee beans without overthinking it',description:'Match roast, flavor and brew method to the cup you actually enjoy.',readTime:'6 min',category:'Start here'},
  {slug:'light-vs-medium-vs-dark-roast',title:'Light vs medium vs dark roast',description:'What roast level changes—and what it does not tell you.',readTime:'7 min',category:'Coffee basics'},
  {slug:'coffee-for-espresso-and-milk',title:'Choosing coffee for espresso and milk drinks',description:'Find enough body and intensity for balanced lattes and iced coffee.',readTime:'5 min',category:'Espresso'},
  {slug:'pour-over-ratio-guide',title:'A practical pour-over ratio guide',description:'A repeatable starting recipe with simple adjustments for taste.',readTime:'6 min',category:'Brewing'}
];
