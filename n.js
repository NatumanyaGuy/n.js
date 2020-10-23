var n = {
    /////BMI
    bmi : function(weight, height) {
        var hm = height/100;
        var one = (hm * hm)
        var two = (weight / one).toFixed(2)
        return two;  
    },
    /////BMI Comments
    bmiComment: function(weight, height){
        var hm = height/100;
        var three = (hm * hm)
        var BMI_value = (weight/three).toFixed(2)
        if(((BMI_value))< 18.5){
            return ("Underweight")
        }
        if(((BMI_value))== 18.5){
            return ("Normal")
        }
        if(((BMI_value))> 18.5 && ((BMI_value))< 24.9){
            return ("Normal")
        }
        if(((BMI_value))== 24.9){
            return ("Normal")
        }
        
        if(((BMI_value))== 25.0){
            return ("Pre-Obesity")
        }
        if(((BMI_value))> 24.9 && ((BMI_value))< 29.9){
            return ("Pre-Obesity")
        }
        if(((BMI_value))== 29.9){
            return ("Pre-Obesity")
        }
        
        if(((BMI_value))== 30.0){
            return ("Obesity Class I")
        }
        if(((BMI_value))> 30.0 && ((BMI_value))< 34.9){
            return ("Obesity Class I")
        }
        if(((BMI_value))== 34.9){
            return ("Obesity Class I")
        }
        if(((BMI_value))== 35.0){
            return ("Obesity Class II")
        }  
        if(((BMI_value))> 35.0 && ((BMI_value))< 39.9){
            return ("Obesity Class II")
        }
        if(((BMI_value))== 39.9){
            return ("Obesity Class II")
        }
        if(((BMI_value))== 40.0){
            return ("Obesity Class III")
        }
        if(((BMI_value))> 40.0){
            return ("Obesity Class III")
        }   
    },
    ///////Ideal Weight
    iwMiller : function(gender, height){
var hm = height/100;        
var height_inches = hm * 39.3701;
var remainder = height_inches - 60;
    if(gender == 'female'){
     return ((53.1 + (1.36 * remainder)).toFixed(1));
    }
    if(gender == 'male'){
        return ((56.2 + (1.41 * remainder)).toFixed(1))
       }
    },

    iwRobinson : function(gender, height){
var hm = height/100;        
var height_inches = hm * 39.3701;
var remainder = height_inches - 60;
            if(gender == 'female'){
             return ((49 + (1.7 * remainder)).toFixed(1))
            }
            if(gender == 'male'){
                return ((52 + (1.9 * remainder)).toFixed(1)) 
               }
            },

            iwHamwi : function(gender, height){
              var hm = height/100;        
var height_inches = hm * 39.3701;
var remainder = height_inches - 60;
                    if(gender == 'female'){
                     return ((45.5 + (2.2 * remainder)).toFixed(1))
                    }
                    if(gender == 'male'){
                        return ((48 + (2.7 * remainder)).toFixed(1)) 
                       }
                
                    },      
                    iwDevine : function(gender, height){
                        var hm = height/100;        
                        var height_inches = hm * 39.3701;
                        var remainder = height_inches - 60;
                            if(gender == 'female'){
                             return ((45.5 + (2.3 * remainder)).toFixed(1))
                            }
                            if(gender == 'male'){
                                return ((50 + (2.3 * remainder)).toFixed(1)) 
                               }
                            },
                            
        iwBMI : function(height){
            var hm = height/100;  
            /////for lower limit        
a = (2.2 * 18.5);
b =(3.5 * 18.5);
c = b * (hm -1.5);
var idealweight_BMI_lower = ( a + c).toFixed(1);
//for upperlimit
d = 2.2 * 24.9;
e =  3.5 * 24.9;
f = e * (hm -1.5);
var idealweight_BMI_upper = (d + f ).toFixed(1);
return (idealweight_BMI_lower+ ' ' + '-' + ' ' + idealweight_BMI_upper) 
        },
        iwLemmens : function(height){
            var hm = height/100;  
return (22 * Math.pow(hm, 2)).toFixed(1) 
        },

////Waist to Hip Ratio
whr: function(waist_circumference, hip_circumference){
  return  (waist_circumference /hip_circumference).toFixed(1)
},
whrComment: function(gender, waist_circumference, hip_circumference){
    var whr = (waist_circumference /hip_circumference).toFixed(1)
if(gender =='male'){
    if(whr < 0.9){
        return ('Very low risk of CVDs')
    }
    if(whr = 0.9 || whr > 0.9 && whr < 0.99 || whr == 0.99){
        return ('Moderate risk of CVDs')
    }
    if( whr < 1){
        return ('High risk of CVDs')
    }    
}
if(gender == 'female'){
    if(whr < 0.8){
        return ('Very low risk of CVDs')
    }
    if(whr = 0.8 || whr > 0.8 && whr < 0.89 || whr == 0.89){
        return ('Moderate risk of CVDs')
    }
    if( whr < 0.9){
        return ('High risk of CVDs')
    }
}
},        
////WHR END
/////Body Fat %
bfpUSNavy : function(gender, height, waist_circumference, hip_circumference, neck_circumference){
var log_height = Math.log10(height);

if(gender == 'female'){
var log_circumferences = Math.log10(waist_circumference + hip_circumference  - neck_circumference); 
var BFP_US_women_a = 1.29579 - 0.35004 * log_circumferences + 0.22100 * log_height;
var BFP_US_women_b = 495 / BFP_US_women_a;
return (BFP_US_women_b - 450).toFixed(1)
}
if(gender == 'male'){
    var log_circumferences = Math.log10(waist_circumference - neck_circumference); 
    var BFP_US_men_a = 1.0324 - 0.19077 * log_circumferences + 0.15456 * log_height;
    var BFP_US_men_b = 495 / BFP_US_men_a;
    return (BFP_US_men_b - 450).toFixed(1)   
}
},
bfpBMI: function(gender, height, weight, age){
    var hm = height/100;
    var one = (hm * hm)
    var BMI_value = (weight / one).toFixed(2)
    if(gender == 'male'){
   return ((1.20 * BMI_value + 0.23 * age - 16.2).toFixed(1));
    }
    if(gender == 'female'){
        return ((1.2 * BMI_value + 0.23 * age - 5.4)).toFixed(1);
         }
},
///////BMR
bmrHarris: function(gender, height, weight, age){
if(gender == 'male'){
var aharris = 13.397 * weight;
var bharris = 4.799 * height;
var charris = 5.677 *age;
       return ( 88.362 + aharris + bharris - charris).toFixed(1);
}
if(gender == 'female'){
var aharris = 9.247 * weight;
var bharris = 3.098 * height;
var charris = 4.330 *age;
        return ( 447.593 + aharris + bharris - charris).toFixed(1);
    }
},
bmrMifflin: function(gender, height, weight, age){
    if(gender == 'male'){
        var amifflin = 10 * weight;
        var bmifflin = 6.25 * height;
        var cmifflin = 5 * age;
        var dmifflin =  amifflin + bmifflin - cmifflin; 
                return  (dmifflin + 5).toFixed(1)
    }
    if(gender == 'female'){
        var amifflin = 10 * weight;
        var bmifflin = 6.25 * height;
        var cmifflin = 5 * age;
        var dmifflin =  amifflin + bmifflin - cmifflin; 
                return  (dmifflin - 161).toFixed(1)
        }
    },
bee: function(gender, height, weight, age){
  if(gender == 'male'){
    return  (66.67 + 13.75 * weight + 5.003 * height - 6.6775 * age).toFixed(1);
  }
  if(gender == 'female'){
    return  (655.1 + 9.563 * weight + 1.850 * height - 4.676 * age).toFixed(1)
  }
},
tdee : function(gender, height, weight, age, PAL){
    if(gender == 'male'){
        return  ((66.67 + 13.75 * weight + 5.003 * height - 6.6775 * age) * PAL).toFixed(1)
      }
      if(gender == 'female'){
        return  ((655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) * PAL).toFixed(1)
      }
},
eerMaintain : function(gender, height, weight, age, PAL){
    if(gender == 'male'){
        return  ((66.67 + 13.75 * weight + 5.003 * height - 6.6775 * age) * PAL).toFixed(1)
      }
      if(gender == 'female'){
        return  ((655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) * PAL).toFixed(1)
      }
},   
eerGain : function(gender, height, weight, age, PAL){
    if(gender == 'male'){
        return  (((66.67 + 13.75 * weight + 5.003 * height - 6.6775 * age) * PAL) + 500).toFixed(1)
      }
      if(gender == 'female'){
        return  (((655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) * PAL) + 500).toFixed(1)
      }
}, 
eerLose : function(gender, height, weight, age, PAL){
    if(gender == 'male'){
        return  (((66.67 + 13.75 * weight + 5.003 * height - 6.6775 * age) * PAL) - 500).toFixed(1)
      }
      if(gender == 'female'){
        return  (((655.1 + 9.563 * weight + 1.850 * height - 4.676 * age) * PAL) - 500).toFixed(1)
      }
},




  };