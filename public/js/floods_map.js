if(typeof google !== "undefined"){
  var locationJSON = '[{"District":"Shwebo","Township":"Kanbalu","longitude":95.51886,"latitude":23.203053,"Type ":"Township"},{"District":"Katha","Township":"Kawlin","longitude":95.683388,"latitude":23.790258,"Type ":"Township"},{"District":"Shwebo","Township":"Wetlet","longitude":95.788116,"latitude":22.367149,"Type ":"Township"},{"District":"Taunggyi","Township":"Kalaw","longitude":96.55864,"latitude":20.624178,"Type ":"Township"},{"District":"Mohnyin","Township":"Mogaung","longitude":96.940384,"latitude":25.302744,"Type ":"Township"},{"District":"Shwebo","Township":"Ye-U","longitude":95.430489,"latitude":22.76914,"Type ":"Township"},{"District":"Katha","Township":"Indaw","longitude":96.14167,"latitude":24.222515,"Type ":"Township"},{"District":"Shwebo","Township":"Kyunhla","longitude":95.532097,"latitude":23.319637,"Type ":"Township"},{"District":"Kyaukme","Township":"Mongmit","longitude":96.669991,"latitude":23.11422,"Type ":"Township"},{"District":"Monywa","Township":"Monywa","longitude":95.139633,"latitude":22.121679,"Type ":"Township"},{"District":"Monywa","Township":"Ayadaw","longitude":95.447159,"latitude":22.28525,"Type ":"Township"},{"District":"Kyaukme","Township":"Hsipaw","longitude":97.298103,"latitude":22.618938,"Type ":"Township"},{"District":"Shwebo","Township":"Khin-U","longitude":95.62149,"latitude":22.770161,"Type ":"Township"},{"District":"Mohnyin","Township":"Mohnyin","longitude":96.373198,"latitude":24.779057,"Type ":"Township"},{"District":"Monywa","Township":"Budalin","longitude":95.144699,"latitude":22.387771,"Type ":"Township"},{"District":"Maungdaw","Township":"Buthidaung","longitude":92.525,"latitude":20.874975,"Type ":"Township"},{"District":"Hpa-An","Township":"Hlaingbwe","longitude":97.81871,"latitude":17.12574,"Type ":"Township"},{"District":"Sittwe","Township":"Kyauktaw","longitude":92.97282,"latitude":20.843957,"Type ":"Township"},{"District":"Sittwe","Township":"Minbya","longitude":93.27269,"latitude":20.364523,"Type ":"Township"},{"District":"Kale","Township":"Mingin","longitude":94.490858,"latitude":22.879561,"Type ":"Township"},{"District":"Pyinoolwin","Township":"Mogoke","longitude":96.505402,"latitude":22.921391,"Type ":"Township"},{"District":"Pyinoolwin","Township":"Thabeikkyin","longitude":95.97525,"latitude":22.885933,"Type ":"Township"},{"District":"Hpa-An","Township":"Hpapun","longitude":97.444878,"latitude":18.06496,"Type ":"Township"},{"District":"Monywa","Township":"Kani","longitude":94.848469,"latitude":22.43291,"Type ":"Township"},{"District":"Mindat","Township":"Paletwa","longitude":92.854607,"latitude":21.304407,"Type ":"Township"},{"District":"Pyinoolwin","Township":"Singu","longitude":95.998993,"latitude":22.549781,"Type ":"Township"},{"District":"Thayet","Township":"Aunglan","longitude":95.216843,"latitude":19.358553,"Type ":"Township"},{"District":"Thayet","Township":"Aunglan","longitude":93.6028719,"latitude":22.6450258,"Type ":"Township"},{"District":"Kale","Township":"Kale","longitude":94.064594,"latitude":23.186442,"Type ":"Township"},{"District":"Kyaukme","Township":"Mabein","longitude":96.629204,"latitude":23.472921,"Type ":"Township"},{"District":"Minbu","Township":"Minbu","longitude":94.875183,"latitude":20.171606,"Type ":"Township"},{"District":"Sittwe","Township":"Mrauk-U","longitude":93.18844,"latitude":20.591845,"Type ":"Township"},{"District":"Sittwe","Township":"Myebon","longitude":93.373764,"latitude":20.046762,"Type ":"Township"}]'
  var locations = JSON.parse(locationJSON);

  var map = new google.maps.Map(document.getElementById('kunyi-map'), {
    zoom: 6,
    center: new google.maps.LatLng(21.9403599, 96.0758242),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  var markers = [];
  for (i = 0; i < locations.length; i++) { 
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
      map: map,
      icon: window.location.origin + "/img/home_flood_icon.svg"
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].Township);
        infowindow.open(map, marker);
      }
    })(marker, i));
    markers.push(marker);

  }

  var markerCluster = new MarkerClusterer(map, markers, {gridSize: 50, maxZoom: 15});

  // Google Map Setup for Ko Ko Ye's village data
  var locationJSON2 = '[{"mm_name":["ဇီးခ်ိဳကုန္း"],"en_name":"Zee Cho Kone","coordinates":[22.01545,96.16261]},{"mm_name":["မေနာမယ"],"en_name":"Ma Naw Ma Ya","coordinates":[22.05887,96.1442]},{"mm_name":["နႏၵာ (ေတာင္)"],"en_name":"Nan Dar (South)","coordinates":[22.05087,96.09663]},{"mm_name":["ဒုန္းကုန္း"],"en_name":"Done Kone","coordinates":[22.02775,96.07172]},{"mm_name":["ဝင္းၿခံ"],"en_name":"Win Chan","coordinates":[22.03899,96.07392]},{"mm_name":["ေ႐ႊေလွ"],"en_name":"Shwe Hlay","coordinates":[22.52299,96.00494000000002]},{"mm_name":["ဆည္သည္ (ေျမာက္)"],"en_name":"Se Thei (West)","coordinates":[22.483220000000003,96.0118]},{"mm_name":["ဆည္သည္ (ေတာင္)"],"en_name":"Se Thei (South)","coordinates":[22.47693,96.0053]},{"mm_name":["ခက္သင္"],"en_name":"Khet Thin","coordinates":[22.4858,95.98473]},{"mm_name":["ဆည္ႀကီး"],"en_name":"Se Gyi","coordinates":[22.47892,96.04071]},{"mm_name":["ေက်ာင္းဆိပ္"],"en_name":"Kyaung Seik","coordinates":[22.49721,96.01581]},{"mm_name":["ေရေတာ္"],"en_name":"Yae Taw","coordinates":[22.45746,96.01128]},{"mm_name":["ဟသၤာမ"],"en_name":"Hin Thar Ma","coordinates":[22.35689,95.99861]},{"mm_name":["ဇီးကုန္း"],"en_name":"Zee Kone","coordinates":[22.30428,96.01563]},{"mm_name":["ကၽြွန္းႀကီး"],"en_name":"Kyun Gyi","coordinates":[22.32451,96.03885]},{"mm_name":["ကၽြွန္းေတာ္"],"en_name":"Kyun Taw","coordinates":[22.33541,96.00256]},{"mm_name":["ဆင္ေသ"],"en_name":"Sin Thay","coordinates":[22.39621,96.01216]},{"mm_name":["ေ႐ႊဒုံး"],"en_name":"Shwe Done","coordinates":[22.40574,96.04794]},{"mm_name":["ေညာင္ပင္"],"en_name":"Nyaung Pin","coordinates":[22.39342,96.05412]},{"mm_name":["ေတာင္အင္း"],"en_name":"Taung Inn","coordinates":[22.44122,96.05008]},{"mm_name":["ၾကာဥယ်ာဥ္ကၽြွန္း"],"en_name":"Kyar U Yin Kyun","coordinates":[22.4484,95.9906]},{"mm_name":["ေညာင္ဝန္း"],"en_name":"Nyaung Wun","coordinates":[22.47328,96.07732]},{"mm_name":["တြင္းငယ္"],"en_name":"Twin Nge","coordinates":[23.10876,96.01663]},{"mm_name":["ရွားေတာ"],"en_name":"Shar Taw","coordinates":[23.14291,96.02715]},{"mm_name":["ေညာင္ရင္း"],"en_name":"Nyaung Yin","coordinates":[23.02936,96.01563]},{"mm_name":["ေ႐ြစကာ"],"en_name":"Shwe Sa Kar","coordinates":[23.242540000000005,96.01443]},{"mm_name":["ကိုးပင္"],"en_name":"Koe Pin","coordinates":[23.267150000000004,96.01152]},{"mm_name":["ေပါက္တပင္"],"en_name":"Pauk Ta Pin","coordinates":[23.18245,96.02484]},{"mm_name":["ဝါး႐ုံကုန္း"],"en_name":"War Yon Kone","coordinates":[23.21762,96.02715]},{"mm_name":["ေရလည္ကၽြွန္း"],"en_name":"Yae Lal Kyun","coordinates":[23.6022,96.04325]},{"mm_name":["လက္ပန္ဇင္ (႐ြာမ)"],"en_name":"Let Pan Zin (Ywar Ma)","coordinates":[21.89653,95.82682]},{"mm_name":["ေပါက္ၿမိဳင္"],"en_name":"Pauk Myaing","coordinates":[21.88685,95.88264]},{"mm_name":["ဆီမီးခုံ"],"en_name":"Si Mee Khon","coordinates":[21.73442,95.42251]},{"mm_name":["ရန├àပို"],"en_name":"Yan Ta Po","coordinates":[21.6376,95.36475]},{"mm_name":["နယ္ျခား"],"en_name":"Nei Char","coordinates":[21.55662,95.36102]},{"mm_name":["သေဘၤာတင္"],"en_name":"Thin Baw Tin","coordinates":[21.49487,95.35799]},{"mm_name":["လင့္ႀကီး (ေျမာက္)"],"en_name":"Lint Gyi (North)","coordinates":[21.43396,95.29405]},{"mm_name":["ေဒါင္းသစ္"],"en_name":"Daung Thit","coordinates":[21.41485,95.31549]},{"mm_name":["ေခ်ာင္းေပါက္"],"en_name":"Chaung Pauk","coordinates":[21.37967,95.28102]},{"mm_name":["ငါးပင္စင္"],"en_name":"Ngar Pin Sin","coordinates":[21.35675,95.2337]},{"mm_name":["ကၽြွဲဇင္း"],"en_name":"Kywe Zin","coordinates":[21.36507,95.30538]},{"mm_name":["ေက်ာက္ဖူး"],"en_name":"Kyauk Hpu","coordinates":[21.29447,95.3247]},{"mm_name":["ေက်ာဇီ"],"en_name":"Kyaw Zi","coordinates":[21.31753,95.18023]},{"mm_name":["ေက်ာက္တလုံး"],"en_name":"Kyauk Ta Lone","coordinates":[21.91029,95.76363]},{"mm_name":["က်ီးမနား"],"en_name":"Kyee Ma Nar","coordinates":[21.90415,95.78683]},{"mm_name":["လက္ပံသာ"],"en_name":"Let Pan Thar","coordinates":[21.87226,95.53246]},{"mm_name":["ေပ်ာ့ကန္"],"en_name":"Pyawt Kan","coordinates":[21.23945,95.06496]},{"mm_name":["ၾကက္ႏွစ္ဖ"],"en_name":"Kyet Hnit Hpa","coordinates":[20.05231,95.00442]},{"mm_name":["မာန္ေျမ (အေနာက္စု)"],"en_name":"Man Myay (Ah Nauk Su)","coordinates":[20.51955,94.80222]},{"mm_name":["မိန္းမလွကၽြွန္း"],"en_name":"Mein Ma Hla Kyun","coordinates":[20.49307,94.80182]},{"mm_name":["ေညာင္ပင္သာ"],"en_name":"Nyaung Pin Thar","coordinates":[20.49303,94.85153]},{"mm_name":["ေျမာက္ရွားေတာ"],"en_name":"Myauk Shar Taw","coordinates":[20.361850000000004,94.88358]},{"mm_name":["သမ႓န္တင္"],"en_name":"Than Ban Tin","coordinates":[20.37648,94.86747]},{"mm_name":["ဆူးပန္းေခ်ာင္း"],"en_name":"Su Pan Chaung","coordinates":[20.74388,94.74303]},{"mm_name":["ဝကၤဘာ"],"en_name":"Win Ga Bar","coordinates":[20.675950000000004,94.76779]},{"mm_name":["ေတာင္ဘလူ"],"en_name":"Taung Ba Lu","coordinates":[20.64407,94.7887]},{"mm_name":["ဇီးကၽြွန္း"],"en_name":"Zee Kyun","coordinates":[20.332540000000005,94.53783]},{"mm_name":["မင္း"],"en_name":"Min","coordinates":[20.38499,94.69074000000002]},{"mm_name":["စြန္း"],"en_name":"Sun","coordinates":[20.4161,94.73766]},{"mm_name":["မႀကီးစု"],"en_name":"Ma Gyi Su","coordinates":[20.31105,94.51647]},{"mm_name":["အင္းနက္"],"en_name":"Inn Net","coordinates":[20.3528,94.6079]},{"mm_name":["ပင္းတုံးႀကီး"],"en_name":"Pin Tone Gyi","coordinates":[20.39619,94.79434]},{"mm_name":["ျမင္းၿခံစု"],"en_name":"Myin Chan Su","coordinates":[20.41579,94.85482]},{"mm_name":["နန္းေတာ္ကၽြွန္း"],"en_name":"Nan Taw Kyun","coordinates":[20.41807,94.85473]},{"mm_name":["ငါးေျခာက္ကၽြွန္းရြာမ"],"en_name":"Nga Chauk Kyun Ywar Ma","coordinates":[20.40957,94.85447]},{"mm_name":["ငါးေျခာက္ကၽြွန္းေျမာက္"],"en_name":"Nga Chauk Kyun (North)","coordinates":[20.41303,94.85397]},{"mm_name":["ေပါက္ေလးပင္"],"en_name":"Pauk Lay Pin","coordinates":[20.547040000000003,94.77577]},{"mm_name":["လက္ပန္ဦး"],"en_name":"Let Pan U","coordinates":[20.54471,94.77753]},{"mm_name":["သနပ္ကုန္း"],"en_name":"Tha Nat Kone","coordinates":[20.62636,94.75834]},{"mm_name":["ၾကည္ကုန္း"],"en_name":"Kyi Kone","coordinates":[20.62419,94.76505]},{"mm_name":["သဖန္းကုန္း"],"en_name":"Tha Hpan Kone","coordinates":[20.61497,94.74924]},{"mm_name":["အခ်င္းျပစ္ (အေနာက္)"],"en_name":"Ah Chin Pyit (West)","coordinates":[20.75484,94.71107]},{"mm_name":["အခ်င္းျပစ္ (အေရွ႕)"],"en_name":"Ah Chin Pyit (East)","coordinates":[20.75484,94.71107]},{"mm_name":["အခ်င္းျပစ္ (ေတာင္)"],"en_name":"Ah Chin Pyit (South)","coordinates":[20.75484,94.71107]},{"mm_name":["အခ်င္းျပစ္ (ေျမာက္)"],"en_name":"Ah Chin Pyit (North)","coordinates":[20.75484,94.71107]},{"mm_name":["ေက်ာက္ရဲကၽြွန္း (ကၽြွန္း)"],"en_name":"Kyauk Ye Kyun (Kyun)","coordinates":[20.58581,94.78664]},{"mm_name":["မဲရြာကၽြွန္း"],"en_name":"Me Ywar Kyun","coordinates":[20.60506,94.77806]},{"mm_name":["ရွားေတာအေရွ႕"],"en_name":"Shar Taw (East)","coordinates":[20.59339,94.77817000000002]},{"mm_name":["ဇီးကုန္း"],"en_name":"Zee Kone","coordinates":[20.64508,94.72047]},{"mm_name":["ငါးဇင္ရိုင္းကုန္း"],"en_name":"Nga Sin Yaing Kone","coordinates":[20.57009,94.77167]},{"mm_name":["ထန္းႏွစ္ပင္"],"en_name":"Htan Hnit Pin","coordinates":[20.84725,94.70049]},{"mm_name":["ေရေပၚကၽြွန္းကေလး"],"en_name":"Yae Paw Kyun Ka Lay","coordinates":[20.81921,94.69208]},{"mm_name":["ေၾကာင္သိုက္"],"en_name":"Kyaung Thaik","coordinates":[20.56746,94.24918]},{"mm_name":["သရန္ကိုင္း"],"en_name":"Tha Yan Kaing","coordinates":[20.48597,94.26556]},{"mm_name":["ေပါက္ေခ်ာင္း"],"en_name":"Pauk Chaung","coordinates":[20.53193,94.24683]},{"mm_name":["ေညာင္အိုင္"],"en_name":"Nyaung Aing","coordinates":[20.44211,94.26526]},{"mm_name":["သံဆယ္"],"en_name":"Than Se","coordinates":[20.40057,94.30431]},{"mm_name":["တယ္ဇား"],"en_name":"Tei Zar","coordinates":[20.35264,94.32492]},{"mm_name":["ေတာင္ကုန္း"],"en_name":"Taung Kone","coordinates":[20.35074,94.32005]},{"mm_name":["ခဲျပစ္"],"en_name":"Khe Pyit","coordinates":[20.35001,94.35851]},{"mm_name":["ေညာင္ကုန္း"],"en_name":"Nyaung Kone","coordinates":[20.34163,94.4026]},{"mm_name":["ခိုနန္း"],"en_name":"Kho Nan","coordinates":[20.346210000000003,94.39554]},{"mm_name":["လင္းေခ်ာင္း"],"en_name":"Lin Chaung","coordinates":[19.48913,95.16179]},{"mm_name":["စမ္းအိုင့္"],"en_name":"San Aint","coordinates":[19.34872,95.19226]},{"mm_name":["ကမ္းနီ"],"en_name":"Kan Ni","coordinates":[19.21404,95.16959]},{"mm_name":["မင္းျပင္"],"en_name":"Min Pyin","coordinates":[19.11872,95.15436]},{"mm_name":["အင္းဘဲ"],"en_name":"Inn Be","coordinates":[19.08793,95.11046]},{"mm_name":["ျမင္းကၽြွန္း"],"en_name":"Myin Kyun","coordinates":[21.33689,95.16036]},{"mm_name":["ၾကားကၽြွန္း"],"en_name":"Kyar Kyun","coordinates":[21.26293,94.98659]},{"mm_name":["ဂဝံေလးတိုင္"],"en_name":"Ga Wun Lay Taing","coordinates":[21.26057,94.67654]},{"mm_name":["ဇီးေတာ (ေရလဲ)"],"en_name":"Zee Taw (Yae Le)","coordinates":[21.24403,94.96699]},{"mm_name":["မယ္ဇလီပင္ကုန္း"],"en_name":"Mei Za Li Pin Kone","coordinates":[21.27964,94.97456]},{"mm_name":["ေရႊဒါး"],"en_name":"Shwe Dar","coordinates":[21.41117,95.20634]},{"mm_name":["ကူကၽြွန္း"],"en_name":"Ku Kyun","coordinates":[21.23839,94.92934]},{"mm_name":["ကမ္းျဖဴ"],"en_name":"Kan Hpyu","coordinates":[21.82098,95.14807000000002]},{"mm_name":["မင္း"],"en_name":"Min","coordinates":[21.81013,95.15749]},{"mm_name":["ေက်ာမၾကား"],"en_name":"Kyaw Ma Kyar","coordinates":[21.62244,95.25871]},{"mm_name":["ေညာင္ေတာ (ေျမာက္)"],"en_name":"Nyaung Taw (North)","coordinates":[21.65015,95.23695]},{"mm_name":["ေညာင္ေတာ (ေတာင္)"],"en_name":"Nyaung Taw (South)","coordinates":[21.64324,95.23864]},{"mm_name":["ပရိမ္သာ"],"en_name":"Pa Rein Thar","coordinates":[21.76209,95.18613]},{"mm_name":["ေက်ာက္ဖူး"],"en_name":"Kyauk Hpu","coordinates":[21.59463,95.31561]},{"mm_name":["မီးေလာင္ကၽြွန္း"],"en_name":"Mee Laung Kyun","coordinates":[21.60583,95.299]},{"mm_name":["ေပါက္ေတာကၽြွန္း"],"en_name":"Pauk Taw Kyun","coordinates":[21.61532,95.28042]},{"mm_name":["ခ်င္းယား"],"en_name":"Chin Yar","coordinates":[21.564660000000003,95.26859]},{"mm_name":["မိုးျဖဴ"],"en_name":"Moe Hpyu","coordinates":[21.5649,95.29489]},{"mm_name":["ေျမေတာ္"],"en_name":"Myay Taw","coordinates":[21.56893,95.33273]},{"mm_name":["မအူေအာက္ဆိပ္"],"en_name":"Ma Au Auk Seik","coordinates":[21.75255,95.19469]},{"mm_name":["ဝါယာ"],"en_name":"War Yar","coordinates":[21.707,95.21159000000002]},{"mm_name":["ကံစြယ္"],"en_name":"Kan Swei","coordinates":[21.70055,95.19984]},{"mm_name":["ၿဖဳံဘူး"],"en_name":"Hpyon Bu","coordinates":[21.60765,95.30976]},{"mm_name":["ေႏွာပင္"],"en_name":"Hnaw Pin","coordinates":[21.67503,95.22118]},{"mm_name":["ေက်ာက္ခပ္"],"en_name":"Kyauk Khat","coordinates":[21.68814,95.21742]},{"mm_name":["သင့္သည္"],"en_name":"Thint Thei","coordinates":[21.53115,95.2471]},{"mm_name":["ခ်စ္သူရွာ"],"en_name":"Chit Thu Shar","coordinates":[21.55001,95.25192]},{"mm_name":["ဇယမ"],"en_name":"Za Ya Ma","coordinates":[21.411790000000003,95.20738]},{"mm_name":["ေခြးေတာင့္"],"en_name":"Khway Taunt","coordinates":[21.42413,95.22208]},{"mm_name":["ေႏွာင္းဘ"],"en_name":"Hnaung Ba","coordinates":[21.45517,95.2288]},{"mm_name":["ေသာင္အေရွ႕ဘက္"],"en_name":"Thaung Ah Shey Bat","coordinates":[21.49013,95.26936]},{"mm_name":["ႏြဲ႕နီ"],"en_name":"Nwet Ni","coordinates":[21.46999,95.27145]},{"mm_name":["ေအာင္ပန္းေခ်ာင္း"],"en_name":"Aung Pan Chaung","coordinates":[21.46265,95.2721]},{"mm_name":["နတ္ၫႊန္း"],"en_name":"Nat Hnyun","coordinates":[21.48236,95.31181]},{"mm_name":["ဆင္တဲ"],"en_name":"Sin Te","coordinates":[21.50787,95.312]},{"mm_name":["ၿခံရံ"],"en_name":"Chan Yan","coordinates":[21.50244,95.30599]},{"mm_name":["ႏြားေဘး"],"en_name":"Nwar Bay","coordinates":[21.49795,95.30335]},{"mm_name":["ကၽြွန္းၫို"],"en_name":"Kyun Nyo","coordinates":[21.48945,95.29983]},{"mm_name":["ေလွခုတ္"],"en_name":"Hlay Khoke","coordinates":[21.50297,95.29358]},{"mm_name":["တလိုင္းကုန္း (ေပါက္ေတာ)"],"en_name":"Ta Lin Kone (Pauk Taw)","coordinates":[21.51641,95.31815]},{"mm_name":["သရက္ေလးပင္"],"en_name":"Tha Yet Lay Pin","coordinates":[21.42119,94.48941]},{"mm_name":["ေရျပာ"],"en_name":"Yae Pyar","coordinates":[21.42681,94.61839000000002]},{"mm_name":["ဆူးေလကုန္း"],"en_name":"Su Lay Kone","coordinates":[20.85174,94.70641]},{"mm_name":["ကိုး"],"en_name":"Koe","coordinates":[21.21906,94.68942]}]';
  var locations2 = JSON.parse(locationJSON2);

  var map2 = new google.maps.Map(document.getElementById('kokoye-map'), {
    zoom: 6,
    center: new google.maps.LatLng(21.9403599, 96.0758242),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var infowindow2 = new google.maps.InfoWindow();
  
  var marker2, i2;
  var markers2 = [];
  for (i2 = 0; i2 < locations2.length; i2++) { 
    marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(locations2[i2].coordinates[0], locations2[i2].coordinates[1]),
      map: map2,
      icon: window.location.origin + "/img/home_flood_icon_small.svg"
    });
    google.maps.event.addListener(marker2, 'click', (function(marker2, i2) {
      return function() {
        infowindow2.setContent(locations2[i2].en_name);
        infowindow2.open(map2, marker2);
      }
    })(marker2, i2));
    markers2.push(marker2);
  }
  var markerCluster2 = new MarkerClusterer(map2, markers2, {gridSize: 50, maxZoom: 15});
}