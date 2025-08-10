import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list.js';
import { NotFound } from './pages/not-found/not-found.js';
import { Monster } from './pages/monster/monster.js';
import { MonsterTwo } from './pages/monster-two/monster-two.js';
import { MonsterThree } from './pages/monster-three/monster-three.js';
import { MonsterFour } from './pages/monster-four/monster-four.js';
import { MonsterMaterial } from './pages/monster-material/monster-material.js';
import { Login } from './pages/login/login.js';
import { isLoggedInGuard } from './guards/is-logged-in-guard.js';
import { MonsterListApi } from './pages/monster-list-api/monster-list-api.js';
import { MonsterApi } from './pages/monster-api/monster-api.js';

export const routes: Routes = [{
	path: '',
	redirectTo: 'home',
	pathMatch: 'full'
},{
	path: 'home',
	component: MonsterList,
	// canActivate:[isLoggedInGuard]
},{
	path: 'homeapi',
	component: MonsterListApi,
	// canActivate:[isLoggedInGuard]
},{
	path: 'login',
	component: Login
}, {
	path: 'monster',
	children: [{
		path: '',
		component: Monster,
		canActivate:[isLoggedInGuard]
	}, {
		path: ':id',
		component: Monster
	}]
}, {
	path: 'monsterTwo',
	children: [{
		path: '',
		component: MonsterTwo,
		canActivate:[isLoggedInGuard]
	}, {
		path: ':id',
		component: MonsterTwo
	}]
}, {
	path: 'monsterThree',
	children: [{
		path: '',
		component: MonsterThree,
		// canActivate:[isLoggedInGuard]
	}, {
		path: ':id',
		component: MonsterThree
	}]
}, {
	path: 'monsterFour',
	children: [{
		path: '',
		component: MonsterFour,
		// canActivate:[isLoggedInGuard]
	}, {
		path: ':id',
		component: MonsterFour
	}]
}, {
	path: 'monsterMaterial',
	children: [{
		path: '',
		component: MonsterMaterial
	}, {
		path: ':id',
		component: MonsterMaterial
	}]
}, {
	path: 'monsterApi',
	children: [{
		path: '',
		component: MonsterApi
	}, {
		path: ':id',
		component: MonsterApi
	}]
},{
	path: '**',
	component: NotFound
}];
