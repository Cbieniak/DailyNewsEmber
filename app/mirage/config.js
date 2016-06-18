export default function() {
  this.get('/news-items', function() {
    return {
      data: [{
        type: 'news_items',
        id: 1,
        attributes: {
          url: 'http://emberjs.com/'
        }
        }, {
        type: 'news_items',
        id: 3,
        attributes: {
          url: 'http://www.theage.com.au/'
        }
      }]
    };
  });
}