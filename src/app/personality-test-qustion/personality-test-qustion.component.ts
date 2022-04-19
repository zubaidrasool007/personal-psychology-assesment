import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personality-test-qustion',
  templateUrl: './personality-test-qustion.component.html',
  styleUrls: ['./personality-test-qustion.component.css'],
})
export class PersonalityTestQustionComponent implements OnInit {
  constructor(private router: Router) { }

  selectedValue: any = '';
  items: MenuItem[] = [];
  activeIndex: number = 0;
  newarray: any[] = [];
  message: any;
  sum: any;
  radio: any;
  allvalue: any;
  button: boolean = true;
  previousbtn: boolean = true;
  questionOne: any[] = [
    { Option: '  Don’t dare to interrupt them', value: 2 },
    { Option: '  Think it’s more important to give them some of your time; work can wait', value: 3, },
    { Option: '  Listen, but with only with half an ear', value: 4 },
    {
      Option: '  Interrupt and explain that you are really busy at the moment', value: 6,
    },
  ];
  questionTwo: any[] = [
    { Option: '  Look at your watch every two minutes', value: 2.5 },
    { Option: '  Bubble with inner anger, but keep quiet', value: 1.5 },
    { Option: '  Explain to other equally impatient people in the room that the doctor is always running late', value: 7, },
    { Option: '  Complain in a loud voice, while tapping your foot impatiently', value: 9, },
  ];
  questionThree: any[] = [
    { Option: '  Don’t dare contradict them', value: 1 },
    { Option: '  Think that they are obviously right', value: 3.5 },
    { Option: '  Defend your own point of view, tooth and nail', value: 5 },
    { Option: '  Continuously interrupt your colleague', value: 10.5 },
  ];
  questionFour: any[] = [
    { Option: '  Are a bit too far towards the back so don’t really hear what the guide is saying', value: 5.5, },
    { Option: '  Follow the group without question', value: 4.5 },
    { Option: '  Make sure that everyone is able to hear properly', value: 3 },
    { Option: '  Are right up the front, adding your own comments in a loud voice', value: 10, },
  ];
  questionFive: any[] = [
    { Option: '  Ask you to tell a story in front of everyone else', value: 8.5 },
    { Option: '  Talk privately between themselves', value: 7.5 },
    { Option: '  Hang around you all evening', value: 2.7 },
    { Option: '  Always drag the conversation back to themselves', value: 2.3 },
  ];

  ngOnInit(): void {
    this.items = [
      { label: 'Q 1' },
      { label: 'Q 2' },
      { label: 'Q 3' },
      { label: 'Q 4' },
      { label: 'Q 5' },
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

  changevalue(value: any) {
    let obj = {
      Q: value,
    };
    this.newarray.push(obj);
    console.log(this.newarray);
    this.button = false;
  }

  addvalue() {
    this.activeIndex++;
    let initialValue = 0;
    this.sum = this.newarray.reduce((a, b) => {
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
