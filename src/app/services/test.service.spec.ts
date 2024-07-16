import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestDataService } from "./test.service";

describe('Test Data Service', () => {
    let service: TestDataService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TestDataService]
        });

        service = TestBed.inject(TestDataService);
        httpMock = TestBed.inject(HttpTestingController);
    })

    it('should fetch data from the API', () => {
        const dummyData = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];

        service.getData().subscribe(data => {
            expect(data.length).toBe(2);
            expect(data).toEqual(dummyData);
        });

        const req = httpMock.expectOne(`${service.apiUrl}`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyData);
    });

    afterEach(() => {
        httpMock.verify();
    });
})