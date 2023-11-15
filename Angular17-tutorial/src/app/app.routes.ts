import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';

import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
	// {path: '',component:UserComponent,title:'Home'}, 
	{ path: 'blog-post', component: BlogPostComponent, title: 'Blog Post' },
	{ path: 'user', component: UserComponent, title: 'User' },
	{ path: 'contact', component: ContactComponent, title: 'Contact' }
];
