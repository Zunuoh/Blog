import React from 'react';
import {Link} from 'react-router-dom';

const HomeScreen = () =>{
    return(
    
        <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              One of the more popular frugal blogs in the UK, Miss Thrifty is targeting young mums with her money saving, frugal tips and articles. 
              </p>
            </div>
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-indigo-600">
                        <Link to='/third'>
                        <a href="#" class="hover:underline">
                        Article
                      </a></Link>
                     
                    </p>
                    <a href="#" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                      The Mythbuster’s Guide to Saving Money on Energy Bills
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                      If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.
                      </p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <span class="sr-only">Roel Aufderehar</span>
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Roel Aufderehar
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-03-16">
                          Mar 16, 2020
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <span>
                          6 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-indigo-600">
                    <Link to ="/third">
                    <a href="#" class="hover:underline">
                       Article
                      </a>
                    </Link>   
                    </p>
                    <a href="#" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                      How to make a reverse advent calendar
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                      Answers to all your questions about reverse advent calendars: what are they and how much should you spend? Here is my reverse advent calendar for this year, with a show-and-tell of everything I have packed.
                      </p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <span class="sr-only">Brenna Goyette</span>
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Brenna Goyette
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-03-10">
                          Mar 10, 2020
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <span>
                          4 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-indigo-600">
                      <a href="#" class="hover:underline">
                        Article
                      </a>
                    </p>
                    <a href="#" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                        Improve your customer experience
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                      Last month, J. Money announced the site was looking for 20 bloggers to take $100 each and turn it into some some joy and happiness.
                      </p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <span class="sr-only">Daniela Metz</span>
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Daniela Metz
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-02-12">
                          Feb 12, 2020
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <span>
                          11 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default HomeScreen;