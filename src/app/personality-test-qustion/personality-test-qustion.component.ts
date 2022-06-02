import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personality-test-qustion',
  templateUrl: './personality-test-qustion.component.html',
  styleUrls: ['./personality-test-qustion.component.css'],
})
export class PersonalityTestQustionComponent implements OnInit {
  constructor(private router: Router) {}
  selectedValue: any = '';
  items: MenuItem[] = [];
  activeIndex: number = 0;
  newArray: any[] = [];
  message: any;
  sum: any;
  radio: any;
  allvalue: any;
  button: boolean = true;
  previousbtn: boolean = true;
  questionOne: any[] = [
    { Option: '  Don’t dare to interrupt them', value: 2, selected: false },
    {
      Option:
        '  Think it’s more important to give them some of your time; work can wait',
      value: 3,
      selected: false,
    },
    { Option: '  Listen, but with only with half an ear', value: 4 },
    {
      Option: '  Interrupt and explain that you are really busy at the moment',
      value: 6,
      selected: false,
    },
  ];
  questionTwo: any[] = [
    {
      Option: '  Look at your watch every two minutes',
      value: 2.5,
      selected: false,
    },
    {
      Option: '  Bubble with inner anger, but keep quiet',
      value: 1.5,
      selected: false,
    },
    {
      Option:
        '  Explain to other equally impatient people in the room that the doctor is always running late',
      value: 7,
      selected: false,
    },
    {
      Option: '  Complain in a loud voice, while tapping your foot impatiently',
      value: 9,
      selected: false,
    },
  ];
  questionThree: any[] = [
    { Option: '  Don’t dare contradict them', value: 1, selected: false },
    {
      Option: '  Think that they are obviously right',
      value: 3.5,
      selected: false,
    },
    {
      Option: '  Defend your own point of view, tooth and nail',
      value: 5,
      selected: false,
    },
    {
      Option: '  Continuously interrupt your colleague',
      value: 10.5,
      selected: false,
    },
  ];
  questionFour: any[] = [
    {
      Option:
        '  Are a bit too far towards the back so don’t really hear what the guide is saying',
      value: 5.5,
      selected: false,
    },
    {
      Option: '  Follow the group without question',
      value: 4.5,
      selected: false,
    },
    {
      Option: '  Make sure that everyone is able to hear properly',
      value: 3,
      selected: false,
    },
    {
      Option:
        '  Are right up the front, adding your own comments in a loud voice',
      value: 10,
      selected: false,
    },
  ];
  questionFive: any[] = [
    {
      Option: '  Ask you to tell a story in front of everyone else',
      value: 8.5,
      selected: false,
    },
    {
      Option: '  Talk privately between themselves',
      value: 7.5,
      selected: false,
    },
    { Option: '  Hang around you all evening', value: 2.7, selected: false },
    {
      Option: '  Always drag the conversation back to themselves',
      value: 2.3,
      selected: false,
    },
  ];
  ngOnInit(): void {
    this.items = [
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
    ];
  }

  read(e: any) {
    console.log(e);
  }

  next() {
    this.activeIndex++;
    this.button = true;
  }

  previous() {
    this.activeIndex--;
  }
  changevalue(data: any) {
    let obj = {
      Q: data.value,
    };
    this.newArray.push(obj);
    data.selected = true;
    console.log(this.newArray);
    this.button = false;
  }
  addvalue() {
    this.activeIndex++;
    let initialValue = 0;
    this.sum = this.newArray.reduce((a, b) => {
      return a + b.Q;
    }, initialValue);
    console.log('sum', this.sum);
    if (this.sum > 17) {
      this.message = 'You are Extrovert';
    } else {
      this.message = 'You are Introvert';
    }
    this.router.navigate(['/result'], { state: { data: this.message } });
  }
}
