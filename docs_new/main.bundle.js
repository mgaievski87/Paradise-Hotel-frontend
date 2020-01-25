webpackJsonp([1,4],{

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 154;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(175);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export Room */
/* unused harmony export ReserveRoomRequest */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        //private baseUrl = 'http://localhost:8080';
        this.baseUrl = 'http://220.240.101.236:8080';
        this.isSelfSetup = false;
        this.showBookingSection = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomsearch = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            checkin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            checkout: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            showParam: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('availableOnly'),
            sortBy: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('price,asc'),
            pageSize: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('10')
        });
        this.roomReserve = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            clientFirstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            clientLastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            clientEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            clientPhone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        // Setting the default values that we display in the form
        this.checkinDate = new Date();
        this.checkoutDate = new Date();
        this.checkoutDate.setDate(new Date().getDate() + 1);
        this.currentPageNumber = 0;
        this.showSpinner = false;
        // Keeping track of any changes in the forms
        var roomsearchValueChanges$ = this.roomsearch.valueChanges;
        var roomReserveValueChanges$ = this.roomReserve.valueChanges;
        roomsearchValueChanges$.subscribe(function (valChange) {
            _this.currentCheckInVal = valChange.checkin;
            _this.currentCheckOutVal = valChange.checkout;
            _this.currentShowParamVal = valChange.showParam;
            _this.currentPageSize = valChange.pageSize;
            _this.currentSort = {
                property: valChange.sortBy.split(',')[0],
                direction: valChange.sortBy.split(',')[1]
            };
        });
        roomReserveValueChanges$.subscribe(function (valChange) {
            _this.currentClientFirstName = valChange.clientFirstName;
            _this.currentClientLastName = valChange.clientLastName;
            _this.currentClientEmail = valChange.clientEmail;
            _this.currentClientPhone = valChange.clientPhone;
        });
    };
    AppComponent.prototype.searchRooms = function (pageNumber, pageSize, sort) {
        var _this = this;
        this.showSpinner = true;
        this.searchResultMessage = undefined;
        this.reservedRoomsBuffer = []; // Cleaning the buffer
        this.getAll(pageNumber, pageSize, sort)
            .subscribe(function (roomsPage) {
            _this.showSpinner = false;
            var rooms = roomsPage.content;
            if (rooms.length > 0 && rooms[0].resMsg !== 'ok') {
                //Displaying error message from server if any occured
                _this.searchResultMessage = rooms[0].resMsg;
                _this.showBookingSection = true;
            }
            else {
                //In this case everything is ok on the server and 'roomsPage' gets populated with data
                _this.showBookingSection = false;
                _this.roomsPage = roomsPage;
                if (!_this.isSelfSetup) {
                    _this.self = _this;
                    _this.isSelfSetup = true;
                }
                //window.scrollTo(0, 0);
            }
        }, function (err) {
            _this.showSpinner = false;
            _this.showBookingSection = true;
            console.log(err);
            _this.searchResultMessage = 'Please, make sure you specify check-in and check-out dates correctly.';
        });
    };
    AppComponent.prototype.getAll = function (pageNumber, pageSize, sort) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* URLSearchParams */]();
        params.set('checkin', "" + this.currentCheckInVal);
        params.set('checkout', "" + this.currentCheckOutVal);
        params.set('showParam', "" + this.currentShowParamVal);
        params.set('size', "" + pageSize);
        params.set('page', "" + pageNumber);
        if (sort !== null) {
            params.set('sort', sort.property + "," + sort.direction);
        }
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({
            search: params
        });
        return this.http.get(this.baseUrl + '/room/reservation/v1', options)
            .map(function (response) { return response.json(); });
    };
    AppComponent.prototype.reserveRoom = function (roomId) {
        this.showSpinner = true;
        this.reservedRoomsBuffer.push(parseInt(roomId));
        this.request = new ReserveRoomRequest(roomId, this.currentCheckInVal, this.currentCheckOutVal, this.currentClientFirstName, this.currentClientLastName, this.currentClientEmail, this.currentClientPhone);
        this.createReservation(this.request);
    };
    AppComponent.prototype.createReservation = function (body) {
        var _this = this;
        var bodyString = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var postRequest = this.http.post(this.baseUrl + '/room/reservation/v1', body, option);
        postRequest.map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.showSpinner = false;
            console.log(res);
            _this.bookingResultMessage = "" + res.resMsg;
        }, function (err) {
            _this.showSpinner = false;
            console.log(err);
            _this.bookingResultMessage = "Unfortunately, the booking service is temporary unavailable";
        });
    };
    AppComponent.prototype.isInBuffer = function (roomId) {
        return this.reservedRoomsBuffer.indexOf(roomId) >= 0;
    };
    AppComponent.prototype.setCurrentRoomId = function (roomId) {
        this.currentRoomId = roomId;
    };
    AppComponent.prototype.showReservationForm = function (roomId) {
        return roomId === this.currentRoomId;
    };
    AppComponent.prototype.resetReservationForm = function () {
        this.currentRoomId = null;
    };
    AppComponent.prototype.toggleBookingSection = function () {
        this.showBookingSection = !this.showBookingSection;
    };
    var _a;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(337),
            styles: [__webpack_require__(329), __webpack_require__(336)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
}());

var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());

var ReserveRoomRequest = /** @class */ (function () {
    function ReserveRoomRequest(roomId, checkin, checkout, clientFirstName, clientLastName, clientEmail, clientPhone) {
        this.roomId = roomId;
        this.checkin = checkin;
        this.checkout = checkout;
        this.clientFirstName = clientFirstName;
        this.clientLastName = clientLastName;
        this.clientEmail = clientEmail;
        this.clientPhone = clientPhone;
    }
    return ReserveRoomRequest;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_pagination_rooms_pagination_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slide_show_slide_show_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enquire_form_enquire_form_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__rooms_pagination_rooms_pagination_component__["a" /* RoomsPaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__slide_show_slide_show_component__["a" /* SlideShowComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_10__enquire_form_enquire_form_component__["a" /* EnquireFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBFOP35kh9BHc0E9prfgn9nId-PA2WfB7c'
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquireFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnquireFormComponent = /** @class */ (function () {
    function EnquireFormComponent() {
    }
    EnquireFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-enquire-form',
            template: __webpack_require__(338),
            styles: [__webpack_require__(330)]
        })
    ], EnquireFormComponent);
    return EnquireFormComponent;
}());

//# sourceMappingURL=enquire-form.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* unused harmony export Image */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.imgLargeArr = [
            { index: 1, URL: './src/app/images/rooms/Double_large.jpg', caption: 'Double room' },
            { index: 2, URL: './src/app/images/rooms/Family_large.jpg', caption: 'Family room' },
            { index: 3, URL: './src/app/images/rooms/Presidential_large.jpg', caption: 'Presidential apartment' },
            { index: 4, URL: './src/app/images/rooms/Single_large.jpg', caption: 'Single room' },
            { index: 5, URL: './src/app/images/rooms/Twin_large.jpg', caption: 'Twin room' }
        ];
        this.imgSmallArr = [
            { index: 1, URL: './src/app/images/rooms/Double.jpg', caption: 'Double room' },
            { index: 2, URL: './src/app/images/rooms/Family.jpg', caption: 'Family room' },
            { index: 3, URL: './src/app/images/rooms/Presidential.jpg', caption: 'Presidential apartment' },
            { index: 4, URL: './src/app/images/rooms/Single.jpg', caption: 'Single room' },
            { index: 5, URL: './src/app/images/rooms/Twin.jpg', caption: 'Twin room' }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.showSlide(1);
    };
    GalleryComponent.prototype.showSlide = function (index) {
        if (index > this.imgLargeArr.length) {
            this.currentSlideIndex = 1;
        }
        else {
            if (index < 1) {
                this.currentSlideIndex = this.imgLargeArr.length;
            }
            else {
                this.currentSlideIndex = index;
            }
        }
        this.currentImg = this.imgLargeArr[this.currentSlideIndex - 1];
    };
    GalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-gallary',
            template: __webpack_require__(339),
            styles: [__webpack_require__(331)]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());

var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.lat = 49.2331;
        this.lng = 28.4682;
    }
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__(340),
            styles: [__webpack_require__(332)]
        })
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__table__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomsPaginationComponent = /** @class */ (function () {
    function RoomsPaginationComponent() {
        this.pagesIndexes = [];
    }
    RoomsPaginationComponent.prototype.ngOnInit = function () { };
    RoomsPaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes['page']) {
            var pagesindexes_ = [];
            if (this.page.totalPages !== undefined && this.page.totalPages !== null) {
                for (var i = 0; i < this.page.totalPages; i++) {
                    pagesindexes_.push(i + 1);
                }
            }
            this.pagesIndexes = pagesindexes_;
        }
    };
    RoomsPaginationComponent.prototype.fetchPageNumber = function (pageNumber) {
        this.table.searchRooms(pageNumber - 1, this.page.size, this.getSort());
        console.log('fetchPageNumber() finished');
    };
    RoomsPaginationComponent.prototype.fetchNextPage = function () {
        if (this.page.number + 1 >= this.page.totalPages) {
            return;
        }
        this.table.searchRooms(this.page.number + 1, this.page.size, this.getSort());
    };
    RoomsPaginationComponent.prototype.fetchPreviousPage = function () {
        if (this.page.number === 0) {
            return;
        }
        this.table.searchRooms(this.page.number - 1, this.page.size, this.getSort());
    };
    RoomsPaginationComponent.prototype.getSort = function () {
        if (this.page.sort != null && this.page.sort.length > 0) {
            return this.page.sort[0];
        }
        else {
            return null;
        }
    };
    var _a, _b;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__table__["Table"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__table__["Table"]) === "function" && _a || Object)
    ], RoomsPaginationComponent.prototype, "table", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pagination__["PaginationPage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pagination__["PaginationPage"]) === "function" && _b || Object)
    ], RoomsPaginationComponent.prototype, "page", void 0);
    RoomsPaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-rooms-pagination',
            template: __webpack_require__(341),
            styles: [__webpack_require__(333)]
        })
    ], RoomsPaginationComponent);
    return RoomsPaginationComponent;
}());

//# sourceMappingURL=rooms-pagination.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(342),
            styles: [__webpack_require__(334)]
        })
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideShowComponent = /** @class */ (function () {
    function SlideShowComponent() {
        this.imgURLArr = ['./src/app/images/slide-show/Header-Qualia-Resort-Luxury-Australia-Holidays-1-1.jpg',
            './src/app/images/slide-show/whitsundays-apartments-room.jpg',
            './src/app/images/slide-show/heart-hotel-lobby.jpg',
            './src/app/images/slide-show/shingley-resort-airlie-beach-night.jpg',
            './src/app/images/slide-show/Whitsundays-Wedding-Venue-4-1024x512.jpg'
        ];
        this.slideIndex = 0;
    }
    SlideShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentImgURL = this.imgURLArr[0];
        setInterval(function () { _this.showSlides(); }, 3000);
    };
    SlideShowComponent.prototype.showSlides = function () {
        var index = this.slideIndex;
        this.slideIndex = ++index % this.imgURLArr.length;
        this.currentImgURL = this.imgURLArr[this.slideIndex];
    };
    SlideShowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-slide-show',
            template: __webpack_require__(343),
            styles: [__webpack_require__(335)]
        })
    ], SlideShowComponent);
    return SlideShowComponent;
}());

//# sourceMappingURL=slide-show.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

//# sourceMappingURL=table.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Exo+2:400,200,600,800);", ""]);

// module
exports.push([module.i, "* {\n  font-size: 16px;\n}\n#main-part {\n  padding-bottom: 2em;\n}\n#navbar_container {\n  margin: 0;\n  width: 100%;\n}\n#navbar .search-container {\n  display: none;\n}\n#navbar-reserveBtn {\n  margin-left: 1em;\n  margin-top: 0.3rem;\n  color: white;\n  float: right;\n}\n#booking-section {\n  background: linear-gradient(to bottom, rgba(12,13,13,0.9), rgba(60,56,61,0.7));\n  margin: 0;\n}\n.navbar_link {\n  font-size: 1em;\n}\n.bookingResultMessage {\n  text-align: center;\n}\n#booking-section .bookingResultMessage {\n  color: red;\n}\n.booking-form-label {\n  color: white;\n  font-size: 1.1em;\n  text-align: right;\n  white-space: nowrap;\n  font-weight: 100;\n  padding: 0;\n  padding-top: 0.5ex;\n  margin-left: 1em;\n  height: 4ex;\n}\n.form-control {\n  padding: 0;\n  height: 4ex;\n  margin: 0;\n  margin-bottom: 1ex;\n}\n#booking-form-SearchBtn-container {\n  width: 50%;\n  margin: 0 auto;\n}\n.form-horizontal{\n  padding-top: 2ex;\n}\n.main_section {\n  padding: 0 1em 1em 1em;\n}\n.section-header {\n  text-align: center;\n  font: 3em \"Times New Roman\", Times, serif;\n  padding: 2ex;\n  margin-top: 0;\n}\n#room_list {\n  list-style-type: none;\n}\n#room_list li {\n  margin-bottom: 1em;\n  border-bottom: 1px solid #777;\n}\n#room_list li:last-child {\n  border-bottom: none;\n}\n.room-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.room-row_item {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-bottom: 1em;\n}\n#reservation-form {\n  padding-bottom: 1em;\n}\n.buttons-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n#searchResult-section .bookingResultMessage {\n  color: darkslateblue;\n  font-size: 3rem;\n}\n.main_section_img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 0.5em;\n}\n.section-header {\n  font-size: 3em;\n  font-weight: bold;\n  margin: 0;\n}\n.section_subheader {\n  margin-top: 0;\n  color: #b5b7e1;\n  font-size: 1.5em;\n}\n.standOutContainer {\n  padding: 1.5em;\n  border-radius: 2em;\n}\n#greenprogram {\n  background-color: green;\n}\n#dining-section {\n  background: linear-gradient(to bottom, rgba(91,89,128,1), rgba(181,158,155,1));\n  color: white;\n}\n#diningDescription {\n  font-style: italic;\n  font-size: 1.5em;\n  margin-bottom: 2em;\n}\n.wallpapers {\n  max-width: 100%;\n}\n#generalInfo-section {\n  background: linear-gradient(to bottom, rgba(91,89,128,1), rgba(181,158,155,1));\n  color: white;\n}\n#generalinfo {\n  padding: 0 2em;\n}\n#arrivalInfo_list {\n  list-style-type: none;\n}\n.generalInfo_list {\n  padding-left: 1em;\n}\n#arrivalInfo_list strong {\n  color: yellow;\n}\n#gallary-section {\n  background-color: #222;\n}\n#gallary-section .section-header {\n  color: #dddddd;\n}\n#info-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.info-group {\n  margin: 1em;\n  -ms-flex-preferred-size: calc(100%/3);\n      flex-basis: calc(100%/3);\n}\n#footer-part {\n  padding: 1em;\n  background-color: #222222;\n}\n.socialmedia-group {\n  list-style-type: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 0;\n}\n.socialmedia-group_item {\n  background-color: #aaa;\n  border-radius: 100%;\n}\n.socialmedia-group_item:hover {\n  background-color: #0a5c71;\n}\n.socialmedia-group_icon{\n  border-radius: 10%;\n}\n.room_thumb_container-bookedOut {\n  display: inline-block;\n  background-color: rgba(50,153,84, 1.0);\n  position: relative;\n}\n.room_thumb_img-bookedOut {\n  opacity: 0.4;\n}\n.room_thumb_text-bookedOut {\n  color: white;\n  top: calc(50% - (1rem/2));\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  z-index: 1;\n  font: bold 2rem Arial;\n  margin: 0 auto;\n}\n\n\n@media (min-width: 769px) {\n  .navbar .navbar-nav {\n    display: inline-block;\n    float: none;\n    vertical-align: top;\n  }\n\n  .navbar .navbar-collapse {\n    text-align: center;\n  }\n  .booking-form-label {\n    margin-left: 0;\n  }\n  #booking-form-SearchBtn-container {\n    width: 20%;\n  }\n  .room-row {\n    -ms-flex-direction: row;\n        flex-direction: row;\n  }\n  .room-row_item {\n    -ms-flex-preferred-size: calc(100%/5);\n        flex-basis: calc(100%/5);\n  }\n  #info-container {\n    height: 400px;\n\n  }\n  #navbar .dropdown {\n    float: left;\n    display: block;\n    position: relative;\n    box-sizing: content-box;\n  }\n  #navbar .dropdown:hover .dropdown-menu{\n    opacity: 1;\n    visibility: visible;\n    margin: 0;\n  }\n  #navbar .dropdown-toggle {\n    display: block;\n    padding: 15px 15px;\n    text-align: center;\n    text-decoration: none;\n  }\n  #navbar .dropdown-menu{\n    left: auto;\n    right: 0;\n    list-style-type: none;\n    display: block;\n    position: absolute;\n    opacity: 0;\n    visibility: hidden;\n    margin: 30px 0 0 0;\n    float: left;\n    transition: all 500ms ease-out;\n    background-color: #222;\n\n    min-width: 160px;\n    box-shadow: 0 8px 10px 0 rgba(0,0,0, 0.5);\n    z-index: 10;\n  }\n  #navbar .dropdown-menu_item a{\n    color: white;\n  }\n  .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n    background-image:none !important; /*Overriding Bootstrap rule*/\n    background-color: #444\n  }\n  .dropdown-toggle:active, .open .dropdown-toggle {\n    background: none !important; /*Overriding Bootstrap rule*/\n    color: white !important; /*Overriding Bootstrap rule*/\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "#inputComments {\n  resize: none;\n  overflow-y: hidden;\n  overflow-x: hidden; }\n\n#enquire-form {\n  width: 100%; }\n\n/*# sourceMappingURL=enquire-form.component.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Position the image container (needed to position the left and right arrows) */\n.gallery-container {\n  position: relative;\n  background-color: #222; }\n\n.currentSlide {\n  max-width: 450px;\n  margin: 0 auto; }\n\n.currentSlide_img {\n  max-width: 100%; }\n\n/* Add a pointer when hovering over the thumbnail images */\n.cursor {\n  cursor: pointer; }\n\n/* Next & previous buttons */\n.prev,\n.next {\n  cursor: pointer;\n  text-decoration: none;\n  position: absolute;\n  top: 40%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none; }\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover,\n.next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 30px; }\n\n/* Number text (1/3 etc) */\n.currentSlide_text {\n  color: #f2f2f2;\n  font-size: 1em;\n  padding: 1ex 1em;\n  position: absolute;\n  top: 0; }\n\n/* Container for image text */\n.caption-container {\n  text-align: center;\n  background-color: #222;\n  font: 1.5em Arial;\n  padding-top: 1ex;\n  padding-bottom: 0;\n  color: white; }\n\n.gallery-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.gallery-row:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n/* Five columns side by side */\n.smallImg-container {\n  padding: 0 1em;\n  -ms-flex-preferred-size: calc(100%/5);\n      flex-basis: calc(100%/5); }\n\n/* Add a transparency effect for thumnbail images */\n.demo {\n  opacity: 0.5;\n  width: 100%; }\n\n.active,\n.demo:hover {\n  opacity: 1; }\n\n/*# sourceMappingURL=gallery.component.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "agm-map {\n  height: 400px; }\n\n/*# sourceMappingURL=map.component.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".pagination {\n  list-style-type: none;\n  width: 90%;\n  margin: 0 auto;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n\n}\n.pagination_item {\n\n}\n.pagination_item_link {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  cursor: pointer;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin: 0 4px;\n}\n\n.pagination_item_link-active {\n  background-color: #4CAF50;\n  color: white;\n  border-radius: 5px;\n}\n\n.pagination_item_link:hover:not(.active) {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n.unclickable {\npointer-events: none;\n}\n.unclickable .pagination_item_link {\n  border: none;\n}\n\n@media (min-width: 768px) {\n  .pagination {\n    width: 50%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "* {\n  font-size: 16px; }\n\n#search-container {\n  display: none; }\n\n@media (min-width: 769px) {\n  #search-container_form {\n    display: inline-block; }\n\n  #search-container {\n    display: inline-block;\n    float: right; }\n\n  #search-container button {\n    float: right;\n    padding: 0.3rem 0.6rem;\n    margin-top: 1rem;\n    margin-right: 1rem;\n    background: #ddd;\n    font-size: 1.7rem;\n    border: none;\n    cursor: pointer; }\n\n  #search-container button:hover {\n    background: #ccc; }\n\n  #search-container input:focus {\n    width: 20rem; }\n\n  #searchInput {\n    padding: 0.3rem 0.3rem;\n    margin-top: 1rem;\n    font-size: 1.7rem;\n    border: none;\n    width: 2rem; } }\n@media (min-width: 1023px) {\n  #searchInput {\n    width: 12rem; } }\n\n/*# sourceMappingURL=search.component.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".slide-show_image-container {\n  width: 100%; }\n\n.slide-show_image-container img {\n  display: block;\n  width: 100%;\n  max-width: 100%; }\n\n/* Fading animation */\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1s;\n  animation-name: fade;\n  animation-duration: 1s; }\n@keyframes fade {\n  0% {\n    opacity: 0.1; }\n  25% {\n    opacity: 0.5; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 0.5; }\n  100% {\n    opacity: 0.1; } }\n\n/*# sourceMappingURL=slide-show.component.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".spinnerContainer {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100; }\n\n.sk-fading-circle {\n  top: calc(50% - 50px);\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #000;\n  border-radius: 100%;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  animation-delay: -0.1s; }\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n/*# sourceMappingURL=spinner.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<header id=\"header-part\">\n  <nav class=\"navbar navbar-fixed-top\">\n    <div class=\"navbar-inverse\">\n      <div id=\"navbar_container\" class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <button id=\"navbar-reserveBtn\" type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"toggleBookingSection()\">\n            Reserve\n          </button>\n          <a id=\"paradise-logo\" class=\"navbar-brand\" href=\"#\">Paradise Hotel</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a class=\"navbar_link\" href=\"index.html#\">Home</a></li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"navbar_link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"dropdown-menu_item\"><a class=\"navbar_link\" id=\"dropdown-menu_item_link\" href=\"index.html#generalInfo-section\">General Information</a></li>\n                <li class=\"dropdown-menu_item\"><a class=\"navbar_link\" href=\"index.html#dining-section\">Dining</a></li>\n                <li class=\"dropdown-menu_item\"><a class=\"navbar_link\" href=\"index.html#specialEvents-section\">Special Events</a></li>\n              </ul>\n            </li>\n            <li><a class=\"navbar_link\" href=\"index.html#gallary-section\">Gallery</a></li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"navbar_link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Contact Us</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"dropdown-menu_item\"><a class=\"navbar_link\" href=\"index.html#location-section\">Location</a></li>\n                <li class=\"dropdown-menu_item\"><a class=\"navbar_link\" href=\"index.html#enquireNow-section\">Enquire Now</a></li>\n              </ul>\n            </li>\n          </ul>\n          <app-search></app-search>\n        </div>\n      </div>\n    </div>\n    <section *ngIf=\"showBookingSection\" id=\"booking-section\">\n      <article class=\"container\">\n        <div class=\"row\" *ngIf=\"searchResultMessage\">\n          <h5 class=\"bookingResultMessage\">{{searchResultMessage}}</h5>\n        </div>\n        <form class=\"form-horizontal\" [formGroup]=\"roomsearch\" #searchRoomsForm=\"ngForm\"\n              (ngSubmit)=\"searchRooms(currentPageNumber, currentPageSize, currentSort)\">\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\"></div>\n            <label for=\"checkin\" class=\"col-sm-1 booking-form-label\">Check-In:</label>\n            <div class=\"col-sm-3\">\n              <input id=\"checkin\" type=\"date\" name=\"checkinDate\" [ngModel]=\"checkinDate | date: 'yyyy-MM-dd'\" class=\"form-control\" formControlName=\"checkin\" />\n            </div>\n            <label for=\"checkout\" class=\"col-sm-1 booking-form-label\">Check-Out:</label>\n            <div class=\"col-sm-3\">\n              <input id=\"checkout\" type=\"date\" name=\"checkoutDate\" [ngModel]=\"checkoutDate | date: 'yyyy-MM-dd'\" class=\"form-control\" formControlName=\"checkout\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-2\"></div>\n            <label for=\"showParam\" class=\"col-sm-1 booking-form-label\">Show: </label>\n            <div class=\"col-sm-2\">\n              <select id=\"showParam\" class=\"form-control\" formControlName=\"showParam\">\n                <option value=\"availableOnly\">Available</option>\n                <option value=\"all\">All</option>\n              </select>\n            </div>\n            <label for=\"sortByParam\" class=\"col-sm-1 booking-form-label\">Sort by: </label>\n            <div class=\"col-sm-2\">\n              <select id=\"sortByParam\" class=\"form-control\" formControlName=\"sortBy\">\n                <option value=\"price,asc\">Price (low)</option>\n                <option value=\"price,desc\">Price (high)</option>\n                <option value=\"roomNumber,asc\">Room # (low)</option>\n                <option value=\"roomNumber,desc\">Room # (high)</option>\n                <option value=\"roomType,asc\">Category (low)</option>\n                <option value=\"roomType,desc\">Category (high)</option>\n              </select>\n            </div>\n            <label for=\"roomsPerPageParam\" class=\"booking-form-label\">rooms per page: </label>\n            <div class=\"col-sm-1\">\n              <select id=\"roomsPerPageParam\" class=\"form-control\" formControlName=\"pageSize\">\n                <option value=\"5\">5</option>\n                <option value=\"10\">10</option>\n                <option value=\"15\">15</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div id=\"booking-form-SearchBtn-container\">\n              <button type=\"submit\" id=\"booking-form-SearchBtn\" class=\"btn btn-primary form-control\" [disabled]=\"searchRoomsForm.invalid\">Search</button>\n            </div>\n          </div>\n        </form>\n      </article>\n    </section><!-- booking-section -->\n  </nav>\n</header>\n<main id=\"main-part\">\n  <!-- Showing loading spinner *ngIf=\"showSpinner\" -->\n  <div class=\"spinnerContainer\" *ngIf=\"showSpinner\">\n      <div class=\"sk-fading-circle\">\n        <div class=\"sk-circle1 sk-circle\"></div>\n        <div class=\"sk-circle2 sk-circle\"></div>\n        <div class=\"sk-circle3 sk-circle\"></div>\n        <div class=\"sk-circle4 sk-circle\"></div>\n        <div class=\"sk-circle5 sk-circle\"></div>\n        <div class=\"sk-circle6 sk-circle\"></div>\n        <div class=\"sk-circle7 sk-circle\"></div>\n        <div class=\"sk-circle8 sk-circle\"></div>\n        <div class=\"sk-circle9 sk-circle\"></div>\n        <div class=\"sk-circle10 sk-circle\"></div>\n        <div class=\"sk-circle11 sk-circle\"></div>\n        <div class=\"sk-circle12 sk-circle\"></div>\n      </div>\n  </div>\n  <div id=\"wallpapers\">\n    <app-slide-show></app-slide-show>\n  </div>\n\n  <section id=\"searchResult-section\" class=\"main_section\" *ngIf=\"roomsPage\">\n    <h1 class=\"section-header\">Rooms</h1>\n    <ul id=\"room_list\">\n      <li *ngFor=\"let room of roomsPage.content\">\n        <div class=\"room-row\">\n          <div class=\"room-row_item\">\n            <div class=\"room-row_item_content\" [ngClass]=\"{'room_thumb_container-bookedOut': !room.available}\">\n              <img [ngClass]=\"{'room_thumb_img-bookedOut': !room.available}\" src=\"{{room.imgURL}}\" alt=\"Intro Gallery Room Sample Pictures\">\n              <h3 *ngIf=\"!room.available\" [ngClass]=\"{'room_thumb_text-bookedOut': !room.available}\">Booked Out</h3>\n            </div>\n          </div>\n          <div class=\"room-row_item\">\n            <strong>Room #: {{room.roomNumber}}</strong><br />\n          </div>\n          <div class=\"room-row_item\">\n            <strong>Type: {{room.roomType}}</strong><br />\n          </div>\n          <div class=\"room-row_item\">\n            <strong>Description: {{room.description}}</strong><br />\n          </div>\n          <div class=\"room-row_item\">\n            <strong>Price: ${{room.price}}</strong>\n          </div>\n          <div class=\"room-row_item\">\n            <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"room.available && !isInBuffer(room.id) && room.id!==currentRoomId\" (click)=\"setCurrentRoomId(room.id)\">Reserve</button>\n          </div>\n        </div>\n        <div *ngIf=\"showReservationForm(room.id)\">\n          <!--Beginning -- Reservation_client-details_form -->\n          <form class=\"container\" id=\"reservation-form\" [formGroup]=\"roomReserve\" #reservationForm=\"ngForm\" (ngSubmit)=\"reserveRoom(room.id)\">\n            <div [hidden]=\"reservationForm.submitted\">\n              <div class=\"form-row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for = \"clientFirstName\">First name:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"clientFirstName\" formControlName=\"clientFirstName\" placeholder=\"First name\" required />\n                    <div *ngIf=\"clientFirstName !== undefined && clientFirstName.invalid && (clientFirstName.dirty || clientFirstName.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"clientFirstName !== undefined && clientFirstName.errors.required\">First name is required.</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for = \"clientLastName\">Last name:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"clientLastName\" formControlName=\"clientLastName\" placeholder=\"Last name\" required />\n                    <div *ngIf=\"clientLastName !== undefined && clientLastName.invalid && (clientLastName.dirty || clientLastName.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"clientLastName !== undefined && clientLastName.errors.required\">Last name is required.</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for = \"clientEmail\">Email:</label>\n                    <input type=\"email\" class=\"form-control\" id=\"clientEmail\" formControlName=\"clientEmail\" placeholder=\"Email\" required />\n                    <div *ngIf=\"clientEmail !== undefined && clientEmail.invalid && (clientEmail.dirty || clientEmail.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"clientEmail !== undefined && clientEmail.errors.required\">Valid email is required.</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for = \"clientPhone\">Phone:</label>\n                    <input type=\"tel\" class=\"form-control\" id=\"clientPhone\" formControlName=\"clientPhone\" placeholder=\"Phone\" required />\n                    <div *ngIf=\"clientPhone !== undefined && clientPhone.invalid && (clientPhone.dirty || clientPhone.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"clientPhone !== undefined && clientPhone.errors.required\">Phone is required.</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"col-sm-offset-3 col-sm-6\">\n                  <div class=\"buttons-container\">\n                    <button type=\"reset\" class=\"btn btn-primary mb-2\" (click)=\"resetReservationForm()\">Go back</button>\n                    <button type=\"submit\" class=\"btn btn-primary mb-2\" [disabled]=\"reservationForm.invalid\">Submit</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div *ngIf=\"reservationForm.submitted\">\n            <h2 class=\"bookingResultMessage\" >{{bookingResultMessage}}</h2>\n          </div>\n        <!--END -- Reservation_client-details_form -->\n        </div>\n      </li>\n    </ul>\n\n      <!-- Inserting Pagination component 'rooms-pagination.component' -->\n      <div *ngIf=\"self\">\n        <app-rooms-pagination [table]=\"self\" [page]=\"roomsPage\"></app-rooms-pagination>\n      </div>\n    <!--END-- Inserting Pagination component 'rooms-pagination.component' -->\n  </section>\n\n  <section class=\"main_section\" id=\"generalInfo-section\">\n    <h1 class=\"section-header\">General Information</h1>\n    <article id=\"generalinfo\" class=\"row\">\n      <section class=\"col-sm-4\" id=\"arrivalinfo\">\n        <h2 class=\"section_subheader\">Arrival Information</h2>\n        <ul id=\"arrivalInfo_list\">\n          <li><strong>Check-in:</strong> 3:00 PM</li>\n          <li><strong>Check-out:</strong> 11:00 AM</li>\n          <li><strong>Parking:</strong> Self-parking in the underground garage is $10 per day.\n          </li>\n          <li><strong>Airport Shuttle:</strong> Our complimentary airport shuttles leave every hour on the hour, and\n            make trips to Gavryshivka airport.\n          </li>\n          <li><strong>Trains:</strong> The nearest train station is at Independance Square.</li>\n          <li><strong>Pet Policy:</strong> Pets of all sizes and types are allowed in designated pet rooms, and the\n            specified common areas. Service animals are allowed everywhere.\n          </li>\n        </ul>\n      </section>\n      <section class=\"col-sm-4\" id=\"services\">\n        <h2 class=\"section_subheader\">Services and Amenities</h2>\n          <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience\n            one-of-a-kind.</p>\n          <ul class=\"generalInfo_list\">\n            <li>Indoor pool</li>\n            <li>24-hour fitness center</li>\n            <li>Massage therapy</li>\n            <li>Full service spa</li>\n            <li>In-room jacuzzi tubs</li>\n            <li>Rooftop café &amp; smoothie bar</li>\n            <li>Coffee bar &amp; pastry shop</li>\n            <li>Traditional continental breakfast</li>\n            <li>24-hour concierge service</li>\n            <li>Business center</li>\n            <li>Complimentary wireless service</li>\n            <li>Laundry &amp; dry cleaning service</li>\n            <li>Daily paper</li>\n            <li>Certified \"green\" hotel</li>\n            <li>Pet-friendly rooms &amp; common areas</li>\n          </ul>\n      </section>\n      <section class=\"col-sm-4\" id=\"accessibility\">\n        <h2 class=\"section_subheader\">Accessibility</h2>\n        <p>We're committed to maintaining the same quality of service for every individual. We offer the following\n          facilities for those with special needs:</p>\n        <ul class=\"generalInfo_list\">\n          <li>Grab bars on tub walls</li>\n          <li>Shower chairs</li>\n          <li>Hand held shower sprayers</li>\n          <li>Higher toilets &amp; toilet modifiers</li>\n          <li>Lower sink faucet handles</li>\n          <li>Wheelchair clearance under sinks &amp; vanity</li>\n          <li>Lower racks in closet</li>\n          <li>TDD machines</li>\n          <li>Telephone light signalers &amp; smoke alarms</li>\n          <li>Telephone amplification handsets</li>\n          <li>Closed captioned television converters</li>\n          <li>Vibrating alarm clocks</li>\n          <li>Telephones with volume control</li>\n        </ul>\n      </section>\n    </article>\n    <article id=\"greenprogram\" class=\"standOutContainer\">\n      <h2 class=\"section_subheader\">Green Program</h2>\n      <p><strong>The Paradise Hotel - Vinnytsia</strong> was recently renovated, and we considered the impact on the earth\n        the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances\n        throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling\n        and composting program that reduces the load to local landfills, while providing valuable raw material for use\n        in new products, or in the case of compost, for use in local gardens and landscapes.</p>\n    </article>\n  </section><!-- hotelinfo -->\n\n  <section class=\"main_section\" id=\"dining-section\">\n    <h1 class=\"section-header\">Dining</h1>\n    <p id=\"diningDescription\">Vinnytsia is a foodie’s paradise, and the Paradise Hotel is in the center of it all. With options for\n      traditional English, Italian, Indian, American, Chinese, and French cuisines, all within two blocks of the\n      hotel, and a variety of tasty culinary delights from many other countries, within a half-mile radius, the only\n      trouble you’ll have is choosing! </p>\n\n    <article class=\"row\" id=\"inhotel\">\n      <section class=\"col-sm-4\" id=\"rooftopcafe\">\n        <h2 class=\"section_subheader\">Rooftop Café</h2>\n        <img class=\"main_section_img\" src=\"src/app/images/dining_rooftop.jpg\" alt=\"Dining\">\n        <p>Rooftop Café is the destination for five star dining. Our master chefs are trained to meet special\n          dietary needs, and we offer a range of vegetarian/vegan, kosher, gluten, and dairy free selections to\n          accommodate our guests. Whether you’re in the mood for our award winning roast beef, fresh select salads,\n          appetizing lunch entrees, or delectable desserts, we have you covered.</p>\n      </section>\n\n      <section class=\"col-sm-4\" id=\"smoothiebar\">\n        <h2 class=\"section_subheader\">Smoothie Bar</h2>\n        <img class=\"main_section_img\" src=\"src/app/images/dining_smoothiebar.jpg\" alt=\"Dining\">\n        <p>The Rooftop Smoothie Bar gives you panoramic views of the city, where you can have one of our specialty\n          smoothies while you wait for your table. Our top mixologists are constantly bringing new and unique offerings\n          to our smoothie menu. We have a wide range of locally grown, fresh fruit and vegetable choices to make you\n          custom blended drinks. We also have seasonal selections that you won’t find anywhere else.</p>\n      </section>\n\n      <section class=\"col-sm-4\" id=\"coffeebar\">\n        <h2 class=\"section_subheader\">Breakfast &amp; Coffee Bar</h2>\n        <img class=\"main_section_img\" src=\"src/app/images/dining_lattes.jpg\" alt=\"Dining\">\n        <p>Our traditional breakfast and coffee bar, located adjacent to our lounge, are the perfect way to start your\n          morning. We offer a wide selection of seasonal fresh fruit, a variety of cereals, croissants, crusty sourdough\n          bread, cook-to-order eggs and omelettes, fresh juice, coffee, and teas. Breakfast is served from 7:00 am to\n          10:00 am daily. Our coffee bar is open until 6:30 pm daily.</p>\n      </section>\n    </article><!-- inhotel -->\n    <article id=\"roomservice\">\n      <h2 class=\"section_subheader\">Room Service</h2>\n      <p>If you’d rather stay in your room and enjoy a quiet evening in, or a relaxing breakfast in bed, room service\n        options are available for all of our dining choices.</p>\n    </article>\n  </section><!-- dining -->\n\n  <section class=\"main_section\" id=\"specialEvents-section\">\n    <h1 class=\"section-header\">Special Events</h1>\n  </section>\n\n  <section class=\"main_section\" id=\"gallary-section\">\n    <h1 class=\"section-header\">Gallary</h1>\n    <app-gallary></app-gallary>\n  </section>\n  <section class=\"main_section\" id=\"location-section\">\n    <h1 class=\"section-header\">Location</h1>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <app-map></app-map>\n        </div>\n        <div class=\"col-sm-4\" id=\"info-container\">\n          <div class=\"info-group\">\n            <img class=\"info-group_icon-thumb\" src=\"./src/app/images/icons/LocationIcon.png\" alt=\"Address\" title=\"Address\" />\n            <div class=\"info-group_item\">Vinnytsia, Ukraine</div>\n          </div>\n          <div class=\"info-group\">\n            <a class=\"mail-link\" href=\"mailto:hello@gmail.com?Subject=Request\" style=\"color:#222;\" target=\"_top\">\n              <img class=\"info-group_icon-thumb\" src=\"./src/app/images/icons/MailIcon.png\" alt=\"Address\" title=\"Address\" />\n              <div class=\"info-group_item\">mgaievski87@gmail.com</div>\n            </a>\n          </div>\n          <div class=\"info-group\">\n            <img class=\"info-group_icon-thumb\" src=\"./src/app/images/icons/PhoneIcon.png\" alt=\"Address\" title=\"Address\" />\n            <div class=\"info-group_item\">+38(099)123-45-67</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </section>\n  <section class=\"main_section\" id=\"enquireNow-section\">\n    <h1 class=\"section-header\">Enquire Now</h1>\n    <app-enquire-form></app-enquire-form>\n  </section>\n\n</main>\n<footer id=\"footer-part\">\n      <ul class=\"socialmedia-group\">\n        <li class=\"socialmedia-group_item\"><a href=\"https://twitter.com/\"><img class=\"socialmedia-group_icon\" src=\"src/app/images/twitter.png\"\n                                                alt=\"icon for twitter\"></a></li>\n        <li class=\"socialmedia-group_item\"><a href=\"http://www.facebook.com/\"><img class=\"socialmedia-group_icon\" src=\"src/app/images/facebook.png\"\n                                                    alt=\"icon for facebook\"></a></li>\n        <li class=\"socialmedia-group_item\"><a href=\"http://www.youtube.com/\"><img class=\"socialmedia-group_icon\" src=\"src/app/images/youtube.png\" alt=\"icon for youtube\"></a>\n        </li>\n      </ul>\n</footer>\n\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" id=\"enquire-form\">\n  <div class=\"form-row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label for = \"inputFullName\">Full Name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputFullName\" placeholder=\"Full Name\" />\n      </div>\n      <div class=\"form-group\">\n        <label for = \"inputEmail\">Email:</label>\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" />\n      </div>\n      <div class=\"form-group\">\n        <label for = \"inputTel\">Telephone:</label>\n        <input type=\"tel\" class=\"form-control\" id=\"inputTel\" placeholder=\"Telephone\" />\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label for = \"inputComments\">COMMENTS / REQUESTS:</label>\n        <textarea class=\"form-control\" rows=\"9\" cols=\"30\" id=\"inputComments\" placeholder=\"Your Comments, Requests or Questions\">\n        </textarea>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-sm-offset-5 col-sm-2\">\n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Submit Enquiry</button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-container\">\n  <div class=\"currentSlide\">\n    <div class=\"currentSlide_text\">{{currentImg.index}} / {{imgLargeArr.length}}</div>\n    <img class=\"currentSlide_img\" src=\"{{currentImg.URL}}\">\n  </div>\n\n  <a class=\"prev\" (click)=\"showSlide(currentImg.index - 1)\">❮</a>\n  <a class=\"next\" (click)=\"showSlide(currentImg.index + 1)\">❯</a>\n\n  <div class=\"caption-container\">\n    <p id=\"currentSlide_caption\">{{currentImg.caption}}</p>\n  </div>\n\n  <div class=\"gallery-row\">\n    <div class=\"smallImg-container\" *ngFor=\"let imgSmall of imgSmallArr\">\n      <img class=\"demo cursor\" [ngClass]=\"{'active': imgSmall.index === currentImg.index}\" src=\"{{imgSmall.URL}}\"  (click)=\"showSlide(imgSmall.index)\" alt=\"The rooms\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "\n    <ul class=\"pagination\">\n      <li [ngClass]=\"{'unclickable': page.first}\" class=\"pagination_item\">\n        <a href=\"#searchResult-section\" class=\"pagination_item_link\" (click)=\"fetchPreviousPage()\">&laquo;</a>\n      </li>\n\n      <li *ngFor=\"let pageIndex of pagesIndexes\" [ngClass]=\"{'unclickable': pageIndex == page.number+1 }\" class=\"pagination_item\">\n        <a href=\"#searchResult-section\" class=\"pagination_item_link\" [ngClass]=\"{'pagination_item_link-active': pageIndex == page.number+1 }\" (click)=\"fetchPageNumber(pageIndex)\" >{{pageIndex}}</a>\n      </li>\n\n      <li [ngClass]=\"{'unclickable': page.last}\" class=\"pagination_item\">\n        <a href=\"#searchResult-section\" class=\"pagination_item_link\" (click)=\"fetchNextPage()\">&raquo;</a>\n      </li>\n    </ul>\n\n\n\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div id=\"search-container\">\n  <form id=\"search-container_form\">\n    <button id=\"searchBtn\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n    <input id=\"searchInput\" type=\"text\" placeholder=\"Search...\" name=\"search\">\n  </form>\n</div>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"slide-show_image-container\">\n  <img src=\"{{this.currentImgURL}}\" alt=\"hotel-photo\" />\n</div>\n"

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ })

},[376]);
//# sourceMappingURL=main.bundle.js.map