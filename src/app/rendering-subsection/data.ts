export const CONTENT = [
    { 
        title: 'ngOnChanges()', 
        sub_title_first: 'purpose', 
        text_first: 'Respond when data-bound input properties data is setted or resetted. Method receive SimpleChanges object of current and previous properties values.', 
        sub_title_second: 'timing', 
        text_second: 'Called before ngOnInit(). And one or more data-bound input properties is changeed.',
        sub_title_third: 'how it works',
        text_third: 
        `
        prvo definisemo varijablu u parent ts file-u: clickMe: string = 'click'; 
        onda u parent template-u (html) nadjemo gde se renderuje children 
        ubacujemo vrednost definisane varijable u argumentu, kao svojevrsni props, koji cemo koristiti u metodama u child-u (ngOnChange, onOnInit itd) <app-rendering-child [text]="clickMe"></app-rendering-child>. 
        [text] cemo koristiti u children ts file-u, tako sto cemo ga uvesti pomocu @Input() metoda.
        U children komponenti prvo u construct-oru definisemo predefinisan argument kojim se vezujemo sa parent uslovom this.text = '' i, kao sto smo vec rekli, bind-ujemo ga za Input pomocu @Input build-in metoda: @Input() text: string; 
        Ispod construct-ora, na mestu gde definisemo lifecycle metode definisemo ngOnChanges metod sa argumentom (changes: SimpleChanges) (SimpleChanges je build-in metoda). 
        Changes je objekat koji sadrzi sledece parametre: 
        {
            "currentValue": false,
            "firstChange": true,
            "previousValue": undefined
        }
        Every time ngOnChanges() is called, the SimpleChanges instance captures the parentData's
        ! only changes from parent component will trigger this function
        `
    },
    { 
        title: 'ngOnInit()', 
        sub_title_first: 'purpose', 
        text_first: `Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties.`, 
        sub_title_second: 'timing', 
        text_second: 'Called once, after the first ngOnChanges()',
        sub_title_third: 'how it works',
        text_third: '' 
    },
    { 
        title: 'ngDoCheck()', 
        sub_title_first: 'purpose', 
        text_first: 'Detect changes that is not detectable by default, like user click on input field.', 
        sub_title_second: 'timing', 
        text_second: 'Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run' ,
        sub_title_third: 'how it works',
        text_third: ''
    },
    { 
        title: 'ngAfterContentInit()', 
        sub_title_first: 'purpose', 
        text_first: 'Respond after some external component or non-default action init.', 
        sub_title_second: 'timing', 
        text_second: 'Called once after the first ngDoCheck()',
        sub_title_third: 'how it works',
        text_third: ''
    },
    { 
        title: 'ngAfterContentChecked()', 
        sub_title_first: 'purpose', 
        text_first: 'Respond after Angular checks the content projected into the directive or component.', 
        sub_title_second: 'timing', 
        text_second: 'Called after ngAfterContentInit() and every subsequent ngDoCheck()',
        sub_title_third: 'how it works',
        text_third: '' 
    },
    { 
        title: 'ngAfterViewInit()', 
        sub_title_first: 'purpose', 
        text_first: `Respond after Angular initializes the component's views and child views, or the view that contains the directive.`, 
        sub_title_second: 'timing', 
        text_second: 'Called once after the first ngAfterContentChecked()',
        sub_title_third: 'how it works',
        text_third: '' 
    },
    { 
        title: 'ngAfterViewChecked()', 
        sub_title_first: 'purpose', 
        text_first: `Respond after Angular checks the component's views and child views`, 
        sub_title_second: 'timing', 
        text_second: `Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked()`,
        sub_title_third: 'how it works',
        text_third: '' 
    },
    { 
        title: 'ngOnDestroy()', 
        sub_title_first: 'purpose', 
        text_first: 'Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.', 
        sub_title_second: 'timing', 
        text_second: 'Called immediately before Angular destroys the directive or component.',
        sub_title_third: 'how it works',
        text_third: '' 
    }
  ]

