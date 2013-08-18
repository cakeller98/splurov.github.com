(function(mk, Hogan) {

    'use strict';

    var setDefaults = function() {
        mk.calc.allBarracks.units.setDefaults();
        mk.calc.allBarracks.dark.setDefaults();

        var armyCampsSaved = mk.calc.savedData.get('armyCamps', mk.calc.armyCamps.value);
        var armyCampsOption = mk.calc.armyCamps.querySelector('option[value="' + armyCampsSaved + '"]');
        if (armyCampsOption) {
            armyCampsOption.selected = true;
        }

        var spellFactoryIndex = mk.calc.savedData.get('spellFactoryLevel', mk.calc.spellFactoryLevel.selectedIndex);
        mk.calc.spellFactoryLevel.options[spellFactoryIndex].selected = true;

        var setItems = function(type) {
            mk.objectIterate(mk.calc.types[type], function(name) {
                var levelId = name + '-level';
                var levelEl = document.getElementById(levelId);
                levelEl.options[mk.calc.savedData.get(levelId, levelEl.selectedIndex)].selected = true;

                var valueEl = document.getElementById(name);
                if (type === 'spells') {
                    valueEl.options[mk.calc.savedData.get(name, valueEl.selectedIndex)].selected = true;
                } else {
                    valueEl.value = mk.calc.savedData.get(name) || 0;

                    var subtractId = name + '-subtract';
                    document.getElementById(subtractId).value = mk.calc.savedData.get(subtractId) || 0;
                }
            });
        };

        setItems('units');
        setItems('spells');
        setItems('dark');
    };

    mk.Events.listen('setDefaults', setDefaults);

    mk.objectIterate(mk.calc.allBarracks, function(k, v) {
        v.getElements().forEach(function(el) {
            el.addEventListener('change', mk.Events.trigger.bind(null, 'calculate', 'barrack-' + k), false);
        });
    });
    mk.calc.armyCamps.addEventListener('change', mk.Events.trigger.bind(null, 'calculate', 'all'), false);
    mk.calc.spellFactoryLevel.addEventListener('change', mk.Events.trigger.bind(null, 'calculate', 'spells'), false);

    var rowTemplate = new Hogan.Template(/* build:hogan:mustache/item_row.mustache */);

    var createRows = function(type, tabIndexMultiplier) {
        var createLevelOption = function(value, index) {
            return {'value': value, 'text': (index + 1)};
        };

        var spellsValuesContent = [];
        if (type === 'spells') {
            var i;
            for (i = 0; i < 6; i++) {
                spellsValuesContent.push({'value': i, 'text': i});
            }
        }

        var itemsBody = document.getElementById(type + '-body');
        mk.objectIterate(mk.calc.types[type], function(name, value) {
            var convertedName = mk.convertToTitle(name);
            var templateVars = {
                'id': name,
                'title': convertedName,
                'titleLink': 'http://clashofclans.wikia.com/wiki/' +
                             (convertedName + (type === 'spells' ? '_Spell' : '')).replace(' ', '_'),
                'levelId': name + '-level',
                'levelContent': value[1].map(createLevelOption),
                'summaryId': name + '-summary',
                'rowId': type + '-building-level-' + value[3],
                'tabIndexLevel': tabIndexMultiplier + value[3],
                'tabIndexValue': tabIndexMultiplier + 1000 + value[3],
                'objectType': type
            };
            if (type === 'spells') {
                templateVars.spells = {
                    'options': spellsValuesContent
                };
            }

            if (type === 'units' || type === 'dark') {
                var i;
                var barracksTimes = [];
                for (i = 1; i <= mk.calc.allBarracks[type].getMaxCount(); i++) {
                    barracksTimes.push({
                        'barrackQuantityId': 'quantity-' + name + '-' + i
                    });
                }
                templateVars.barracksTimes = barracksTimes;

                templateVars.subtractId = name + '-subtract';
                templateVars.tabIndexSubtract = tabIndexMultiplier + 4000 + value[3];
            }

            var rowHTML = rowTemplate.render(templateVars);

            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = '<table>' + rowHTML + '</table>';

            var itemRow = tempDiv.querySelector('tr');
            itemsBody.appendChild(itemRow);

            document.getElementById(templateVars.levelId).addEventListener(
                'change',
                mk.Events.trigger.bind(null, 'calculate', type),
                false
            );
            document.getElementById(templateVars.id).addEventListener(
                (type === 'spells' ? 'change' : 'input'),
                mk.Events.trigger.bind(null, 'calculate', type),
                false
            );

            if (type === 'units' || type === 'dark') {
                document.getElementById(templateVars.subtractId).addEventListener(
                    'input',
                    mk.Events.trigger.bind(null, 'calculate', type),
                    false
                );
            }
        });
    };

    createRows('units', 100);
    createRows('dark', 200);
    createRows('spells', 300);

    setDefaults();

    mk.Events.trigger('calculate', 'all');

}(window.mk, window.Hogan));
