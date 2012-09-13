(function(){
F1.WorldBank.extractives = {
    var iconhost="jimduncan4.github.com/EIMap_rebuild/images/icons/worldbank"
    "Mineral deposits": {},
    "Population density": {},
     "Oil wells": {
"infoWindowFilter": {"title": "$[Oil field name]","subtitle": "Total production: $[Lift total] barrels","tabs": [{"title": "About","type": "text","value": "Estimated size: $[Estimated size] million barrels\nOther companies: $[Other companies]\nPrimary company: $[Primary company]\nPrimary company stake: $[Primary company stake]\nGNPC stake: $[GNPC stake]"},{"title": "Sales","type": "text","value": "Sale total: GHC $[Sale total]\nThese data are preliminary, and represent the GNPC-reported sale value of their single oil lift on the market. These data do not reflect the actual amount of money received by the government of Ghana from the sale. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"http://maps.worldbank.org/extractives/about\"\u003EAbout page \u003C/a\u003E"},{"title": "Production","type": "text","value": "Lift total: $[Lift total] barrels\nThe data here were gathered from GNPC and media sources, and represent the total amount of crude oil lifted from the selected oil field. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"http://maps.worldbank.org/extractives/about\"\u003EAbout page \u003C/a\u003E"},{"title": "Environment","type": "text","value": "This data is not available yet, but will be added as it becomes available."}]
        },
        "Lift total": {"infoWindowFilter": {"subtitle": "Lift total: $[Lift total] barrels"},"icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1.4,"dropShadow": true,"selectedAttribute": "LiftTotal","categories": 2,"color": 542100,"lineStyle": "normal","classificationNumClasses": 3},"type": "GRADUATED","stroke": {"alpha": 1,"weight": 1,"color": 137011},"fill": {"opacity": 0.75,"color": 542100}},
        "Sale total": {"infoWindowFilter": {"subtitle": "Sale total: GHC $[Sale total]"},"icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1.4,"dropShadow": true,"selectedAttribute": "SaleTotal","categories": 2,"color": 8160950,"lineStyle": "normal","classificationNumClasses": 3},"type": "GRADUATED","stroke": {"alpha": 1,"weight": 1,"color": 137011},"fill": {"opacity": 0.75,"color": 8160950}},
        "Location": {"infoWindowFilter": {"title": "$[Oil field name]","subtitle": "Total production: $[Lift total] barrels","tabs": [{"title": "About","type": "text","value": "Estimated size: $[Estimated size] million barrels\nOther companies: $[Other companies]\nPrimary company: $[Primary company]\nPrimary company stake: $[Primary company stake]\nGNPC stake: $[GNPC stake]"},{"title": "Sales","type": "text","value": "Sale total: GHC $[Sale total]\nThese data are preliminary, and represent the GNPC-reported sale value of their single oil lift on the market. These data do not reflect the actual amount of money received by the government of Ghana from the sale. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"http://maps.worldbank.org/extractives/about\"\u003EAbout page \u003C/a\u003E"},{"title": "Production","type": "text","value": "Lift total: $[Lift total] barrels\nThe data here were gathered from GNPC and media sources, and represent the total amount of crude oil lifted from the selected oil field. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"http://maps.worldbank.org/extractives/about\"\u003EAbout page \u003C/a\u003E"},{"title": "Environment","type": "text","value": "This data is not available yet, but will be added as it becomes available."}]
        }, "icon": {"symbol":"http://wbstaging.geocommons.com/images/icons/round/OilWell-14.png"}}
    },
    "Oil fields": {},
    "Mines": {
        infoWindowFilter: {"title": "$[Company name]","subtitle": "Total production: $[Total production] ounces","tabs": [{"title": "About","type": "text","value": "Company name: \u003Ca target=\"_new\" href=\"$[CompanyURL]\"\u003E$[Company name] \u003C/a\u003E\nMineral type: $[Mineral type]\nSustainability reports available: \u003Ca target=\"_new\" href=\"$[CSR_Url]\"\u003E$[Sustainability reports available] \u003C/a\u003E"},{"title": "Revenue","type": "text","value": "Total government receipts (2004 to 2008): GHC $[Total government receipts]\nTotal company payments (2004 to 2008): GHC $[Total company payments]\nTotal difference (2004 to 2008)*: GHC $[Total difference]\n2008 Government receipts: GHC $[2008 Government receipts]\n2008 Company payments: GHC $[2008 Company payments]\n2008 Difference: GHC $[2008 Difference]\n2007 Government receipts: GHC $[2007 Government receipts]\n2007 Company payments: GHC $[2007 Company payments]\n2007 Difference*: GHC $[2007 Difference]\n2006 Government receipts: GHC $[2006 Government receipts]\n2006 Company payments: GHC $[2006 Company payments]\n2006 Difference*: GHC $[2006 Difference]\n2005 Government receipts: GHC $[2005 Government receipts]\n2005 Company payments: GHC $[2005 Company payments]\n2005 Difference*: GHC $[2005 Difference]\n2004 Government receipts: GHC $[2004 Government receipts]\n2004 Company payments: GHC $[2004 Company payments]\n2004 Difference*: GHC $[2004 Difference]\nThese data represent the total amount mining companies reported paying in royalties, taxes and fees (company payments) and the total amount the government reported receiving (governmnet receipts). These data were compiled from EITI reports. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"/extractives/about_extractives\"\u003EAbout page \u003C/a\u003E. \n* Differences are reported as the difference between the amount government reported receiving from mining companies and the amount mining companies reported paying to the government"},{"title": "Production","type": "text","value": "Total production: $[Total production] ounces\n2009 Production: $[2009 Production] ounces\n2008 Production: $[2008 Production] ounces\n2007 Production: $[2007 Production] ounces"},{"title": "Environment","type": "text","value": "Legal requirements: $[Legal_Rating], $[Legal_Desc]\nHazrdous waste management: $[Haz_Rating], $[Haz_Desc]\nToxic releases: $[Toxics_Rating], $[Toxics_Desc]Non-toxic releases: $[NonTox_Rating], $[NonTox_Desc]Monitoring and reporting: $[EnvMR_Rating], $[EnvMR_Desc]\nEnvironmental best practices: $[EnvMgmt_Rating], $[EnvMgmt_Desc]\nCommunity relations: $[Relations_Rating], $[Relations_Desc]\nCorporate social responsibility: $[CSR_Rating], $[CSR_Desc]\nFinal rating: $[Final_Color], $[Final_Rating]\nThese ratings are repeated from the \u003Ca target=\"_new\" href=\"http://www.epa.gov.gh/\"\u003EGhana Environmental Protection Agency\u003C/a\u003E 's \u003Ca target=\"_new\" href=\"http://www.epaghanaakoben.org/\"\u003EAkoben \u003C/a\u003E score card reports on environmental practices in mining and manufacturing. You can view the mining scorecard \u003Ca target=\"_new\" href=\"http://www.epaghanaakoben.org/rating/listmines2\"\u003Ehere\u003C/a\u003E."}]},
        "Total production": {"infoWindowFilter": {subtitle: "Total production: $[Total production] ounces"},"icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1,"dropShadow": true,"selectedAttribute": "total prod","categories": 5, "classificationNumClasses": 6, "color": 16687913},"type": "GRADUATED","stroke": {"alpha": 1,"weight": 1,"color": 12611072},"fill": {"opacity": 0.75,"color": 16687913}},
        "Total company payments": {"infoWindowFilter": {subtitle: "Total company payments: GHC $[Total company payments]"},"icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1,"dropShadow": true,"selectedAttribute": "total comp","categories": 5,"color": 16709541},"type": "GRADUATED","stroke": {"alpha": 1,"weight": 1,"color": 16687913},"fill": {"opacity": 0.75,"color": 16709541}},
        "Total government receipts": {"infoWindowFilter": {subtitle: "Total government receipts: GHC $[Total government receipts]"}, "icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1,"dropShadow": true,"selectedAttribute": "total gove","categories": 5,"color": 16698989},"type": "GRADUATED","stroke": {"alpha": 1,"weight": 1,"color": 16698989},"fill": {"opacity": 0.75,"color": 16698989}},
        "Total employment": {"infoWindowFilter": {title: "$[Company name]", subtitle: "Total employment at mine: $[total empl] people (2010)", tabs: []}, "icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1,"dropShadow": true,"selectedAttribute": "total empl","categories": 5,"color": 16698989},"type": "GRADUATED","stroke": {"alpha": 1,"weight": 1,"color": 16698989},"fill": {"opacity": 0.75,"color": 16698989}},
        "Icons": {"infoWindowFilter": {"subtitle":"$[Mineral type]"}, attribute:"Mineral type",categories:{"Gold": "http://wbstaging.geocommons.com/images/icons/worldbank/gold-14.png","Manganese": "http://wbstaging.geocommons.com/images/icons/worldbank/manganese-14.png","Bauxite": "http://wbstaging.geocommons.com/images/icons/worldbank/bauxite-14.png","Other": "http://wbstaging.geocommons.com/images/icons/worldbank/other-14.png"}},
        "Location": {"infoWindowFilter": {"subtitle":"$[Mineral type]"}, "icon": {"symbol":iconhost+"other-14.png"}}
    },
    "District revenues": {
        infoWindowFilter: {"title": "$[District name]","subtitle": "Total revenues received: $[Total revenues received]","tabs": [{"title": "Revenues","type": "text","value": "Total revenues due: $[Total revenues due]\nTotal difference*: $[Total difference]\n2010 Due: $[2010 Due]\n2010 Received: $[2010 Received]\n2010 Difference* : $[2010 Difference] \n2009 Due: $[2009 Due]\n2009 Received: $[2009 Received]\n2009 Difference* : $[2009 Difference] \n2008 Due: $[2008 Due]\n2008 Received: $[2008 Received]\n2008 Difference* : $[2008 Difference] \n2007 Due: $[2007 Due]\n2007 Received: $[2007 Received]\n2007 Difference* : $[2007 Difference] \n2006 Due: $[2006 Due]\n2006 Received: $[2006 Received]\n2006 Difference* : $[2006 Difference] \n2005 Due: $[2005 Due]\n2005 Received: $[2005 Received]\n2005 Difference* : $[2005 Difference] \n2004 Due: $[2004 Due]\n2004 Received: $[2004 Received]\n2004 Difference* : $[2004 Difference] These data represent the total amount districts were owed from mining company payments (due), and the amount they reported receiving (received). These data were compiled from EITI reports. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"/extractives/about_extractives\"\u003EAbout page \u003C/a\u003E. \n* Differences are reported as the amount owed to the district minus the amount received by the district"}]},
        "Total revenues received": {infoWindowFilter: {"title": "$[District name]","subtitle": "Total revenues received: $[Total revenues received]","tabs": [{"title": "Revenues","type": "text","value": "Total revenues due: $[Total revenues due]\nTotal difference*: $[Total difference]\n2010 Due: $[2010 Due]\n2010 Received: $[2010 Received]\n2010 Difference* : $[2010 Difference] \n2009 Due: $[2009 Due]\n2009 Received: $[2009 Received]\n2009 Difference* : $[2009 Difference] \n2008 Due: $[2008 Due]\n2008 Received: $[2008 Received]\n2008 Difference* : $[2008 Difference] \n2007 Due: $[2007 Due]\n2007 Received: $[2007 Received]\n2007 Difference* : $[2007 Difference] \n2006 Due: $[2006 Due]\n2006 Received: $[2006 Received]\n2006 Difference* : $[2006 Difference] \n2005 Due: $[2005 Due]\n2005 Received: $[2005 Received]\n2005 Difference* : $[2005 Difference] \n2004 Due: $[2004 Due]\n2004 Received: $[2004 Received]\n2004 Difference* : $[2004 Difference] These data represent the total amount districts were owed from mining company payments (due), and the amount they reported receiving (received). These data were compiled from EITI reports. For more information on this data, please refer to the \u003Ca target=\"_new\" href=\"/extractives/about_extractives\"\u003EAbout page \u003C/a\u003E. \n* Differences are reported as the amount owed to the district minus the amount received by the district"}]}, "icon": {"opacity": 0.75,"size": 1,"symbol": "propCircle","propSize": null,"classificationType": "Equal Interval","gradSize": 1,"dropShadow": true,"selectedAttribute": "TOTAL_REC","categories": 5,"color": 11422722},"type": "GRADUATED","fill": {"opacity": 0.75,"color": 11422722}}
    },
    "Regional socioeconomic indicators": {}
    };
})();
