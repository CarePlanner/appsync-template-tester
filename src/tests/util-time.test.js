"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_time_1 = require("../util-time");
test('nowISO8601', () => {
    const res = util_time_1.nowISO8601();
    expect(res).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
});
test('nowEpochSeconds', () => {
    const res = util_time_1.nowEpochSeconds();
    expect(res.toString().length).toBe(10);
});
test('nowEpochMilliSeconds', () => {
    const res = util_time_1.nowEpochMilliSeconds();
    expect(res.toString().length).toBe(13);
});
describe('nowFormatted', () => {
    test('format only', () => {
        const res = util_time_1.nowFormatted('yyyy-MM-dd HH:mm:ssZ');
        expect(res).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\+\d{4}$/);
    });
    test('format and timezone', () => {
        const res = util_time_1.nowFormatted('yyyy-MM-dd HH:mm:ssZ', 'Australia/Perth');
        expect(res).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\+0800$/);
    });
});
describe('parseFormattedToEpochMilliSecond', () => {
    test('time and format', () => {
        const format = 'yyyy-MM-ddTHH:mm:ssZ';
        const time = util_time_1.nowFormatted(format);
        const res = util_time_1.parseFormattedToEpochMilliSeconds(time, format);
        expect(res.toString().length).toBe(13);
    });
    test('time and format and timezone', () => {
        const format = 'yyyy-MM-ddTHH:mm:ssZ';
        const time = util_time_1.nowFormatted(format);
        const res = util_time_1.parseFormattedToEpochMilliSeconds(time, format, 'Australia/Perth');
        expect(res.toString().length).toBe(13);
    });
});
test('parseISO8601ToEpochMilliSeconds', () => {
    const time = '2018-02-01T17:21:05.180+08:00';
    const res = util_time_1.parseISO8601ToEpochMilliSeconds(time);
    expect(res.toString().length).toBe(13);
});
test('epochMilliSecondsToSeconds', () => {
    const time = 1517943695750;
    const expected = 1517943695;
    const res = util_time_1.epochMilliSecondsToSeconds(time);
    expect(res).toBe(expected);
});
test('epochMilliSecondsToISO8601', () => {
    const time = 1517943695750;
    const expected = '2018-02-06T19:01:35.750Z';
    const res = util_time_1.epochMilliSecondsToISO8601(time);
    expect(res).toBe(expected);
});
describe('epochMilliSecondsToFormatted', () => {
    test('time & format', () => {
        const time = 1417943695859;
        const format = 'yyyy-MM-dd HH:mm:ssZ';
        const expected = '2014-12-07 00:00:00+0000';
        const res = util_time_1.epochMilliSecondsToFormatted(time, format);
        expect(res).toBe(expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC10aW1lLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvdXRpbC10aW1lLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FVc0I7QUFFdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDdEIsTUFBTSxHQUFHLEdBQUcsc0JBQVUsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDM0IsTUFBTSxHQUFHLEdBQUcsMkJBQWUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUNoQyxNQUFNLEdBQUcsR0FBRyxnQ0FBb0IsRUFBRSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7UUFDdkIsTUFBTSxHQUFHLEdBQUcsd0JBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7UUFDL0IsTUFBTSxHQUFHLEdB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ODYwMSxcbiAgbm93RXBvY2hTZWNvbmRzLFxuICBub3dFcG9jaE1pbGxpU2Vjb25kcyxcbiAgbm93Rm9ybWF0dGVkLFxuICBwYXJzZUZvcm1hdHRlZFRvRXBvY2hNaWxsaVNlY29uZCxcbiAgcGFyc2VJU084NjAxVG9FcG9jaE1pbGxpU2Vjb25kcyxcbiAgZXBvY2hNaWxsaVNlY29uZHNUb1NlY29uZHMsXG4gIGVwb2NoTWlsbGlTZWNvbmRzVG9JU084NjAxLFxuICBlcG9jaE1pbGxpU2Vjb25kc1RvRm9ybWF0dGVkLFxufSBmcm9tICcuLi91dGlsLXRpbWUnO1xuXG50ZXN0KCdub3dJU084NjAxJywgKCkgPT4ge1xuICBjb25zdCByZXMgPSBub3dJU084NjAxKCk7XG4gIGV4cGVjdChyZXMpLnRvTWF0Y2goL15cXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfS5cXGR7M31aJC8pO1xufSk7XG5cbnRlc3QoJ25vd0Vwb2NoU2Vjb25kcycsICgpID0+IHtcbiAgY29uc3QgcmVzID0gbm93RXBvY2hTZWNvbmRzKCk7XG4gIGV4cGVjdChyZXMudG9TdHJpbmcoKS5sZW5ndGgpLnRvQmUoMTApO1xufSk7XG5cbnRlc3QoJ25vd0Vwb2NoTWlsbGlTZWNvbmRzJywgKCkgPT4ge1xuICBjb25zdCByZXMgPSBub3dFcG9jaE1pbGxpU2Vjb25kcygpO1xuICBleHBlY3QocmVzLnRvU3RyaW5nKCkubGVuZ3RoKS50b0JlKDEzKTtcbn0pO1xuXG5kZXNjcmliZSgnbm93Rm9ybWF0dGVkJywgKCkgPT4ge1xuICB0ZXN0KCdmb3JtYXQgb25seScsICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBub3dGb3JtYXR0ZWQoJ3l5eXktTU0tZGQgSEg6bW06c3NaJyk7XG4gICAgZXhwZWN0KHJlcykudG9NYXRjaCgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9IFxcZHsyfTpcXGR7Mn06XFxkezJ9XFwrXFxkezR9JC8pO1xuICB9KTtcblxuICB0ZXN0KCdmb3JtYXQgYW5kIHRpbWV6b25lJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5vd0Zvcm1hdHRlZCgneXl5eS1NTS1kZCBISDptbTpzc1onLCAnQXVzdHJhbGlhL1BlcnRoJyk7XG4gICAgZXhwZWN0KHJlcykudG9NYXRjaCgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9IFxcZHsyfTpcXGR7Mn06XFxkezJ9XFwrMDgwMCQvKTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ3BhcnNlRm9ybWF0dGVkVG9FcG9jaE1pbGxpU2Vjb25kJywgKCkgPT4ge1xuICB0ZXN0KCd0aW1lIGFuZCBmb3JtYXQnLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0ID0gJ3l5eXktTU0tZGRUSEg6bW06c3NaJztcbiAgICBjb25zdCB0aW1lID0gbm93Rm9ybWF0dGVkKGZvcm1hdCk7XG4gICAgY29uc3QgcmVzID0gcGFyc2VGb3JtYXR0ZWRUb0Vwb2NoTWlsbGlTZWNvbmQodGltZSwgZm9ybWF0KTtcbiAgICBleHBlY3QocmVzLnRvU3RyaW5nKCkubGVuZ3RoKS50b0JlKDEzKTtcbiAgfSk7XG5cbiAgdGVzdCgndGltZSBhbmQgZm9ybWF0IGFuZCB0aW1lem9uZScsICgpID0+IHtcbiAgICBjb25zdCBmb3JtYXQgPSAneXl5eS1NTS1kZFRISDptbTpzc1onO1xuICAgIGNvbnN0IHRpbWUgPSBub3dGb3JtYXR0ZWQoZm9ybWF0KTtcbiAgICBjb25zdCByZXMgPSBwYXJzZUZvcm1hdHRlZFRvRXBvY2hNaWxsaVNlY29uZChcbiAgICAgIHRpbWUsXG4gICAgICBmb3JtYXQsXG4gICAgICAnQXVzdHJhbGlhL1BlcnRoJ1xuICAgICk7XG4gICAgZXhwZWN0KHJlcy50b1N0cmluZygpLmxlbmd0aCkudG9CZSgxMyk7XG4gIH0pO1xufSk7XG5cbnRlc3QoJ3BhcnNlSVNPODYwMVRvRXBvY2hNaWxsaVNlY29uZHMnLCAoKSA9PiB7XG4gIGNvbnN0IHRpbWUgPSAnMjAxOC0wMi0wMVQxNzoyMTowNS4xODArMDg6MDAnO1xuICBjb25zdCByZXMgPSBwYXJzZUlTTzg2MDFUb0Vwb2NoTWlsbGlTZWNvbmRzKHRpbWUpO1xuICBleHBlY3QocmVzLnRvU3RyaW5nKCkubGVuZ3RoKS50b0JlKDEzKTtcbn0pO1xuXG50ZXN0KCdlcG9jaE1pbGxpU2Vjb25kc1RvU2Vjb25kcycsICgpID0+IHtcbiAgY29uc3QgdGltZSA9IDE1MTc5NDM2OTU3NTA7XG4gIGNvbnN0IGV4cGVjdGVkID0gMTUxNzk0MzY5NTtcbiAgY29uc3QgcmVzID0gZXBvY2hNaWxsaVNlY29uZHNUb1NlY29uZHModGltZSk7XG4gIGV4cGVjdChyZXMpLnRvQmUoZXhwZWN0ZWQpO1xufSk7XG5cbnRlc3QoJ2Vwb2NoTWlsbGlTZWNvbmRzVG9JU084NjAxJywgKCkgPT4ge1xuICBjb25zdCB0aW1lID0gMTUxNzk0MzY5NTc1MDtcbiAgY29uc3QgZXhwZWN0ZWQgPSAnMjAxOC0wMi0wNlQxOTowMTozNS43NTBaJztcbiAgY29uc3QgcmVzID0gZXBvY2hNaWxsaVNlY29uZHNUb0lTTzg2MDEodGltZSk7XG4gIGV4cGVjdChyZXMpLnRvQmUoZXhwZWN0ZWQpO1xufSk7XG5cbmRlc2NyaWJlKCdlcG9jaE1pbGxpU2Vjb25kc1RvRm9ybWF0dGVkJywgKCkgPT4ge1xuICB0ZXN0KCd0aW1lICYgZm9ybWF0JywgKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSAxNDE3OTQzNjk1ODU5O1xuICAgIGNvbnN0IGZvcm1hdCA9ICd5eXl5LU1NLWRkIEhIOm1tOnNzWic7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSAnMjAxNC0xMi0wNyAwMDowMDowMCswMDAwJztcbiAgICBjb25zdCByZXMgPSBlcG9jaE1pbGxpU2Vjb25kc1RvRm9ybWF0dGVkKHRpbWUsIGZvcm1hdCk7XG4gICAgZXhwZWN0KHJlcykudG9CZShleHBlY3RlZCk7XG4gIH0pO1xufSk7XG4iXX0=
