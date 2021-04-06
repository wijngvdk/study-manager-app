import { SurveyItem } from "survey-engine/lib/data_types";
import { QuestionGenerators } from "../../../../editor-engine/utils/question-type-generator";
import { generateLocStrings } from "../../../../editor-engine/utils/simple-generators";
import { GroupItemEditor } from "../../../../editor-engine/utils/survey-group-editor-helper";

export class MedicineGroup extends GroupItemEditor {

    constructor(parentKey: string, keyOverride?: string) {
        const groupKey = keyOverride ? keyOverride : 'MED';
        super(parentKey, groupKey);
        this.initQuestions();
    }

    initQuestions() {
        this.addItem(Q1(this.key, true))
        this.addItem(Q2a(this.key, true))
        this.addItem(Q2b(this.key, true))
        this.addItem(Q3(this.key, true))
        this.addItem(Q4(this.key, true))
    }
}

const Q1 = (parentKey: string, isRequired?: boolean, keyOverride?: string): SurveyItem => {
    const itemKey = keyOverride ? keyOverride : 'Q1';
    return QuestionGenerators.singleChoice({
        parentKey: parentKey,
        itemKey: itemKey,
        isRequired: isRequired,
        questionText: new Map([
            ["nl", "Heb je in de afgelopen 3 maanden contact gehad met een zorgverlener?"],
        ]),
        topDisplayCompoments: [{
            role: 'text',
            style: [{ key: 'variant', value: 'p' }],
            content: generateLocStrings(new Map([
                ["nl", "Met zorgverleners bedoelen wij je huisarts, specialist, fysiotherapeut, psycholoog, maatschappelijk werker, homeopaat, logopedist of andere arts, therapeut of zorgconsulent."],
            ]))
        },
    ],
        responseOptions: [
            {
                key: 'ja', role: 'option',
                content: new Map([
                    ["nl", "Ja"],
                ])
            },
            {
                key: 'nee', role: 'option',
                content: new Map([
                    ["nl", "Nee"],
                ])
            },
        ]
    });
}

const Q2a = (parentKey: string, isRequired?: boolean, keyOverride?: string): SurveyItem => {
    const itemKey = keyOverride ? keyOverride : 'Q2a';
    return QuestionGenerators.dropDown({
        parentKey: parentKey,
        itemKey: itemKey,
        isRequired: isRequired,
        questionText: new Map([
            ["nl", "Met welke zorgverleners heb je contact gehad in de afgelopen 3 maanden? "],
        ]),
        responseOptions: [
            {
                key: '1', role: 'option',
                content: new Map([
                    ["nl", "Cardioloog"],
                ])
            },
            {
                key: '2', role: 'option',
                content: new Map([
                    ["nl", "Dermatoloog"],
                ])
            },
            {
                key: '3', role: 'option',
                content: new Map([
                    ["nl", "Endocrinoloog"],
                ])
            },
            {
                key: '4', role: 'option',
                content: new Map([
                    ["nl", "Fysiotherapeut"],
                ])
            },
            {
                key: '5', role: 'option',
                content: new Map([
                    ["nl", "Gynaecoloog"],
                ])
            },
            {
                key: '6', role: 'option',
                content: new Map([
                    ["nl", "Homeopaat"],
                ])
            },
            {
                key: '7', role: 'option',
                content: new Map([
                    ["nl", "Huisarts"],
                ])
            },
           
            {
                key: '8', role: 'option',
                content: new Map([
                    ["nl", "Immunoloog"],
                ])
            },
            {
                key: '9', role: 'option',
                content: new Map([
                    ["nl", "Internist"],
                ])
            },
            {
                key: '10', role: 'option',
                content: new Map([
                    ["nl", "Maatschappelijk werker"],
                ])
            },
            {
                key: '11', role: 'option',
                content: new Map([
                    ["nl", "Neuroloog"],
                ])
            },
            {
                key: '12', role: 'option',
                content: new Map([
                    ["nl", "Oogarts"],
                ])
            },
            {
                key: '13', role: 'option',
                content: new Map([
                    ["nl", "Oncoloog"],
                ])
            },
            {
                key: '14', role: 'option',
                content: new Map([
                    ["nl", "Psychiater"],
                ])
            },
            {
                key: '15', role: 'option',
                content: new Map([
                    ["nl", "Psycholoog"],
                ])
            },
            {
                key: '16', role: 'option',
                content: new Map([
                    ["nl", "Reumatoloog"],
                ])
            },
            {
                key: '17', role: 'option',
                content: new Map([
                    ["nl", "Plastisch chirurg"],
                ])
            },
            {
                key: '18', role: 'option',
                content: new Map([
                    ["nl", "Uroloog"],
                ])
            },
            {
                key: '19', role: 'option',
                content: new Map([
                    ["nl", "Revalidatiearts"],
                ])
            },
            {
                key: '20', role: 'option',
                content: new Map([
                    ["nl", "Andere zorgverlener"],
                ])
            },
        ]
    });
}

const Q2b = (parentKey: string, isRequired?: boolean, keyOverride?: string): SurveyItem => {
    const itemKey = keyOverride ? keyOverride : 'Q2b';
    return QuestionGenerators.dropDown({
        parentKey: parentKey,
        itemKey: itemKey,
        isRequired: isRequired,
        questionText: new Map([
            ["nl", "Hoe vaak heb je met deze zorgverleners contact gehad in de afgelopen 3 maanden?"],
        ]),
        topDisplayCompoments: [
            {
            role: 'text',
            style: [{ key: 'variant', value: 'p' }],
            content: generateLocStrings(new Map([
                ["nl", "Tel voor het aantal contacten alle controles, spreekuren, bezoeken op afspraak, telefonische contacten en huisbezoeken mee."],
            ]))
        },
        {
            role: 'text',
            style: [{ key: 'variant', value: 'p' }],
            content: generateLocStrings(new Map([
                ["nl", "Telefonische contacten om een afspraak te maken dienen niet meegeteld te worden. Als je een antwoord niet precies weet, mag je gerust een schatting geven."],
            ]))
        },
    ],
        responseOptions: [
            {
                key: '1', role: 'option',
                content: new Map([
                    ["nl", "1 keer"],
                ])
            },
            {
                key: '2', role: 'option',
                content: new Map([
                    ["nl", "2 keer"],
                ])
            },
            {
                key: '3', role: 'option',
                content: new Map([
                    ["nl", "3 keer"],
                ])
            },
            {
                key: '4', role: 'option',
                content: new Map([
                    ["nl", "4 keer"],
                ])
            },
            {
                key: '5', role: 'option',
                content: new Map([
                    ["nl", "5 keer"],
                ])
            },
            {
                key: '6', role: 'option',
                content: new Map([
                    ["nl", "6 keer"],
                ])
            },
            {
                key: '7', role: 'option',
                content: new Map([
                    ["nl", "7 keer"],
                ])
            },
            {
                key: '8', role: 'option',
                content: new Map([
                    ["nl", "8 keer"],
                ])
            },
            {
                key: '9', role: 'option',
                content: new Map([
                    ["nl", "9 keer"],
                ])
            },
            {
                key: '10', role: 'option',
                content: new Map([
                    ["nl", "10 keer"],
                ])
            },
            {
                key: '11', role: 'option',
                content: new Map([
                    ["nl", "11 keer"],
                ])
            },
            {
                key: '12', role: 'option',
                content: new Map([
                    ["nl", "12 keer"],
                ])
            },
            {
                key: '13', role: 'option',
                content: new Map([
                    ["nl", "13 keer"],
                ])
            },
            {
                key: '14', role: 'option',
                content: new Map([
                    ["nl", "14 keer"],
                ])
            },
            {
                key: '15', role: 'option',
                content: new Map([
                    ["nl", "15 keer"],
                ])
            },
            {
                key: '16', role: 'option',
                content: new Map([
                    ["nl", "16 keer"],
                ])
            },
            {
                key: '17', role: 'option',
                content: new Map([
                    ["nl", "17 keer"],
                ])
            },
            {
                key: '18', role: 'option',
                content: new Map([
                    ["nl", "18 keer"],
                ])
            },
            {
                key: '19', role: 'option',
                content: new Map([
                    ["nl", "19 keer"],
                ])
            },
            {
                key: '20', role: 'option',
                content: new Map([
                    ["nl", "20 keer of meer"],
                ])
            },
        ]
    });
}

const Q3 = (parentKey: string, isRequired?: boolean, keyOverride?: string): SurveyItem => {
    const itemKey = keyOverride ? keyOverride : 'Q3';
    return QuestionGenerators.singleChoice({
        parentKey: parentKey,
        itemKey: itemKey,
        isRequired: isRequired,
        questionText: new Map([
            ["nl", "Gebruik je op dit moment medicijnen?"],
        ]),
        responseOptions: [
            {
                key: 'ja', role: 'option',
                content: new Map([
                    ["nl", "Ja"],
                ])
            },
            {
                key: 'nee', role: 'option',
                content: new Map([
                    ["nl", "Nee"],
                ])
            },
        ]
    });
}

const Q4 = (parentKey: string, isRequired?: boolean, keyOverride?: string): SurveyItem => {
    const itemKey = keyOverride ? keyOverride : 'Q4';
    return QuestionGenerators.multipleChoice({
        parentKey: parentKey,
        itemKey: itemKey,
        isRequired: isRequired,
        questionText: new Map([
            ["nl", "Welke medicijnen zijn dit?"],
        ]),
        topDisplayCompoments: [{
            role: 'text',
            style: [{ key: 'className', value: 'mb-2' }],
            content: generateLocStrings(new Map([
                ["nl", "Meerdere antwoorden mogelijk"],
            ]))
        }],
        responseOptions: [
            {
                key: '1', role: 'option',
                content: new Map([
                    ["nl", "Medicijnen vanwege een infectie/ontsteking (bijvoorbeeld antibiotica, antivirale middelen)"],
                ])
            },
            {
                key: '2', role: 'option',
                content: new Map([
                    ["nl", "Afweerremmende medicatie/immunosuppressiva (bijvoorbeeld prednison)"],
                ])
            },
            {
                key: '3', role: 'option',
                content: new Map([
                    ["nl", "Maagbeschermers/maagzuurremmers (bijvoorbeeld omeprazol)"],
                ])
            },
            {
                key: '4', role: 'option',
                content: new Map([
                    ["nl", "Cholesterolverlagers (bijvoorbeeld atorvastatine, simvastatine)"],
                ])
            },
            {
                key: '5', role: 'option',
                content: new Map([
                    ["nl", "Chemokuur/chemotherapie"],
                ])
            },
            {
                key: '6', role: 'option',
                content: new Map([
                    ["nl", "Medicijnen voor diabetes (bijvoorbeeld insuline of metformine)"],
                ])
            },
            {
                key: '7', role: 'option',
                content: new Map([
                    ["nl", "Hormoonbehandeling"],
                ])
            },
            {
                key: '8', role: 'option',
                content: new Map([
                    ["nl", "Bloeddrukverlagers (angiotensine convertering enzyme (ACE)-remmers en angiotensine receptorblokkers (ARB’s))"],
                ])
            },
            {
                key: '9', role: 'option',
                content: new Map([
                    ["nl", "Bloedverdunners (bijvoorbeeld clopidogrel)"],
                ])
            },
            {
                key: '10', role: 'input',
                content: new Map([
                    ["nl", "Andere medicijnen, namelijk:"],
                ])
            },
        ]
    });
}
