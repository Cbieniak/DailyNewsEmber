import Ember from 'ember';

var index = 0;
var currentNewsItem = null;
export default Ember.Component.extend({
  index: index,
  currentNewsItem: currentNewsItem,
  attributeBindings: ['currentNewsItem', 'index', 'current'],
  willRender: function() {
    this.updateNewsItemForIndex(this, this.get('index'));
    this.updateIndexOnTime(this);
  },
  indexObserver: Ember.observer('index', function() {
    this.updateNewsItemForIndex(this, this.get('index'));
  }),
  updateNewsItemForIndex: function(self, index) {
    currentNewsItem = self.get('model').objectAt(index);
    self.set('currentNewsItem', currentNewsItem);
  },
  updateIndex: function(self) {
    var modelLength = self.get('model').get('length');
    var proposedIndex =  self.get('index') + 1;
    if (proposedIndex >= modelLength) {
      proposedIndex = 0;
    }
    self.set('index', proposedIndex);
  },
  updateIndexOnTime: function(self) {
    Ember.run.later((function() {
        self.updateIndex(self);
    }), 10000);
  }
});


