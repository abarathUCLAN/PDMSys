'use strict';

angular.module('pdmsys.milestone', [, 'gantt', // angular-gantt.
    'gantt.sortable',
    'gantt.movable',
    'gantt.drawtask',
    'gantt.tooltips',
    'gantt.bounds',
    'gantt.progress',
    'gantt.table',
    'gantt.tree',
    'gantt.overlap',
    'gantt.resizeSensor',
    'mgcrea.ngStrap'
  ])
  .config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false); // Remove debug info (angularJS >= 1.3)
  }])
  .controller('MilestoneCtrl', ['$scope', '$timeout', '$log', 'ganttUtils', 'GanttObjectModel', 'ganttMouseOffset', 'ganttDebounce', 'moment', 'preliminaryStudyFactory', '$stateParams',
    function($scope, $timeout, $log, utils, ObjectModel, mouseOffset, debounce, moment, preliminaryStudyFactory, $stateParams) {
      var objectModel;
      var dataToRemove;

      $scope.projectId;

      $scope.data = [{"name":"Milestones","height":"3em","sortable":false,"classes":"gantt-row-milestone","color":"#45607D","tasks":[{"name":"Example Task","from":"2016-01-15T09:00:00.000Z","color":"#93C47D","to":"2016-01-30T09:00:00.000Z","id":"c0114c42-0533-42e5-5dd4-5b7f24628748"}],"id":"3fb4c9c0-4206-3a15-c530-ea9a206b7085"}]
test: [{"name":"Milestones","height":"3em","sortable":false,"classes":"gantt-row-milestone","color":"#45607D","tasks":[{"name":"Example Task","from":"2016-01-15T09:00:00.000Z","color":"#93C47D","to":"2016-01-30T09:00:00.000Z","id":"c0114c42-0533-42e5-5dd4-5b7f24628748"}],"id":"3fb4c9c0-4206-3a15-c530-ea9a206b7085"}];
      $scope.test = {};

      $scope.emptyMilestone = {
        name: '',
        tasks: []
      };
      $scope.dropdownOptions = [];

      $scope.taskOptions = [];

      $scope.getMilestone = function() {
        preliminaryStudyFactory.insertMilestone($scope.projectId, {
            "content": $scope.data
          })
          .then(function(response) {
            $scope.showDeleteButton = true;
            $scope.projectDescriptionStatusMessage = 'Milestone saved.'
          }, function() {
            $scope.projectDescriptionStatusMessage = 'An error occured.';
          });
      };

      $scope.insertMilestone = function() {
        $scope.projectId = $stateParams.projectId;
        preliminaryStudyFactory.getMilestone($scope.projectId)
          .then(function(response) {
            $scope.showDeleteButton = true;
            $scope.test = JSON.parse(response.data);
            $scope.data = $scope.test;
          }, function() {
            $scope.showDeleteButton = false;
          });

      };

      $scope.deleteMilestone = function() {
        preliminaryStudyFactory.deleteMilestone($scope.projectId)
          .then(function(response) {
            $scope.showDeleteButton = false;
            $scope.data = {};
          }, function() {});
      };




      $scope.initMilestoneAndTaskDropdown = function() {
        for (var i = 0; i < $scope.data.length; i++) {
          var option = {
            "id": i,
            "name": $scope.data[i].name
          };
          $scope.dropdownOptions.push(option);
          if ($scope.data[i].tasks != undefined) {
            for (var a = 0; a < $scope.data[i].tasks.length; a++) {
              var task = {
                "name": $scope.data[i].tasks[a].name
              };
              $scope.taskOptions.push(task);
            }
          }
        }
      };


      $scope.deleteTask = function(task) {
        for (var i = 0; i < $scope.data.length; i++) {
          if ($scope.data[i].tasks != undefined) {
            for (var a = 0; a < $scope.data[i].tasks.length; a++) {
              if ($scope.data[i].tasks[a].name == task.task) {
                $scope.data[i].tasks.splice(a, 1);
              }
            }
          }
        }
      };

      $scope.addTask = function(task) {
        var newTask = {};
        newTask.name = task.name;
        if (task.milestone == 0)
          newTask.color = '#93C47D';
        else
          newTask.color = '#F1C232';

        newTask.from = new Date(task.from);
        newTask.to = new Date(task.to);
        console.log($scope.data[task.milestone]);
        $scope.data[task.milestone].tasks.push(newTask);
        $scope.taskOptions.push({
          "name": newTask.name
        });
      };

      $scope.addMilestone = function(milestone) {
        var val = {
          id: $scope.dropdownOptions.length,
          name: '',
          tasks: []
        };
        val.name = milestone.name;
        $scope.data.push(val);
        $scope.dropdownOptions.push(val);
      };

      $scope.deleteMilestone = function(milestone) {
        for (var i = 0; i < $scope.data.length; i++) {
          if ($scope.data[i].name == milestone.milestone) {
            $scope.data.splice(i, 1);
            $scope.dropdownOptions.splice(i, 1);
          }
        }
      };


      $scope.options = {
        mode: 'custom',
        scale: 'day',
        sideMode: 'TreeTable',
        daily: false,
        maxHeight: false,
        width: false,
        zoom: 1,
        columns: ['model.name', 'from', 'to'],
        treeTableColumns: ['from', 'to'],
        columnsHeaders: {
          'model.name': 'Name',
          'from': 'From',
          'to': 'To'
        },
        columnsClasses: {
          'model.name': 'gantt-column-name',
          'from': 'gantt-column-from',
          'to': 'gantt-column-to'
        },
        columnsFormatters: {
          'from': function(from) {
            return from !== undefined ? from.format('lll') : undefined;
          },
          'to': function(to) {
            return to !== undefined ? to.format('lll') : undefined;
          }
        },
        treeHeaderContent: '<i class="fa fa-align-justify"></i> {{getHeader()}}',
        columnsHeaderContents: {
          'model.name': '<i class="fa fa-align-justify"></i> {{getHeader()}}',
          'from': '<i class="fa fa-calendar"></i> {{getHeader()}}',
          'to': '<i class="fa fa-calendar"></i> {{getHeader()}}'
        },
        autoExpand: 'none',
        taskOutOfRange: 'truncate',
        fromDate: moment(null),
        toDate: undefined,
        rowContent: '<i class="fa fa-align-justify"></i> {{row.model.name}}',
        taskContent: '<i class="fa fa-tasks"></i> {{task.model.name}}',
        allowSideResizing: true,
        labelsEnabled: true,
        currentDate: 'line',
        currentDateValue: new Date(),
        draw: false,
        readOnly: false,
        groupDisplayMode: 'group',
        filterTask: '',
        filterRow: '',
        timeFrames: {
          'day': {
            start: moment('8:00', 'HH:mm'),
            end: moment('20:00', 'HH:mm'),
            color: '#ACFFA3',
            working: true,
            default: true
          },
          'noon': {
            start: moment('12:00', 'HH:mm'),
            end: moment('13:30', 'HH:mm'),
            working: false,
            default: true
          },
          'closed': {
            working: false,
            default: true
          },
          'weekend': {
            working: false
          },
        },
        timeFramesWorkingMode: 'hidden',
        timeFramesNonWorkingMode: 'visible',
        columnMagnet: '15 minutes',
        timeFramesMagnet: true,
        canDraw: function(event) {
          var isLeftMouseButton = event.button === 0 || event.button === 1;
          return $scope.options.draw && !$scope.options.readOnly && isLeftMouseButton;
        },
        drawTaskFactory: function() {
          return {
            id: utils.randomUuid(), // Unique id of the task.
            name: 'Drawn task', // Name shown on top of each task.
            color: '#AA8833' // Color of the task in HEX format (Optional).
          };
        },
        api: function(api) {
          // API Object is used to control methods and events from angular-gantt.
          $scope.api = api;

          api.core.on.ready($scope, function() {
            // Log various events to console
            api.scroll.on.scroll($scope);
            api.core.on.ready($scope);

            api.data.on.remove($scope, addEventName('data.on.remove'));
            api.data.on.load($scope, addEventName('data.on.load'));
            api.data.on.clear($scope, addEventName('data.on.clear'));
            api.data.on.change($scope, addEventName('data.on.change'));

            api.tasks.on.add($scope, addEventName('tasks.on.add'));
            api.tasks.on.change($scope, addEventName('tasks.on.change'));
            api.tasks.on.rowChange($scope, addEventName('tasks.on.rowChange'));
            api.tasks.on.remove($scope, addEventName('tasks.on.remove'));

            if (api.tasks.on.moveBegin) {
              api.tasks.on.moveBegin($scope, addEventName('tasks.on.moveBegin'));
              //api.tasks.on.move($scope, addEventName('tasks.on.move', logTaskEvent));
              api.tasks.on.moveEnd($scope, addEventName('tasks.on.moveEnd'));

              api.tasks.on.resizeBegin($scope, addEventName('tasks.on.resizeBegin'));
              //api.tasks.on.resize($scope, addEventName('tasks.on.resize', logTaskEvent));
              api.tasks.on.resizeEnd($scope, addEventName('tasks.on.resizeEnd'));
            }

            api.rows.on.add($scope, addEventName('rows.on.add'));
            api.rows.on.change($scope, addEventName('rows.on.change'));
            api.rows.on.move($scope, addEventName('rows.on.move'));
            api.rows.on.remove($scope, addEventName('rows.on.remove'));

            api.side.on.resizeBegin($scope, addEventName('labels.on.resizeBegin'));
            //api.side.on.resize($scope, addEventName('labels.on.resize', logLabelsEvent));
            api.side.on.resizeEnd($scope, addEventName('labels.on.resizeEnd'));

            api.timespans.on.add($scope, addEventName('timespans.on.add'));
            api.columns.on.generate($scope);

            api.rows.on.filter($scope);
            api.tasks.on.filter($scope);

            api.data.on.change($scope, function(newData) {

            });

            // When gantt is ready, load data.
            // `data` attribute could have been used too.


            // Add some DOM events
            api.directives.on.new($scope, function(directiveName, directiveScope, element) {
              if (directiveName === 'ganttTask') {
                element.bind('click', function(event) {
                  event.stopPropagation();
                });
                element.bind('mousedown touchstart', function(event) {
                  event.stopPropagation();
                  $scope.live.row = directiveScope.task.row.model;
                  if (directiveScope.task.originalModel !== undefined) {
                    $scope.live.task = directiveScope.task.originalModel;
                  } else {
                    $scope.live.task = directiveScope.task.model;
                  }
                  $scope.$digest();
                });
              } else if (directiveName === 'ganttRow') {
                element.bind('click', function(event) {
                  event.stopPropagation();
                });
                element.bind('mousedown touchstart', function(event) {
                  event.stopPropagation();
                  $scope.live.row = directiveScope.row.model;
                  $scope.$digest();
                });
              } else if (directiveName === 'ganttRowLabel') {
                element.bind('click', function() {});
                element.bind('mousedown touchstart', function() {
                  $scope.live.row = directiveScope.row.model;
                  $scope.$digest();
                });
              }
            });

            api.tasks.on.rowChange($scope, function(task) {
              $scope.live.row = task.row.model;
            });

            objectModel = new ObjectModel(api);
          });
        }
      };

      $scope.handleTaskIconClick = function(taskModel) {
        alert('Icon from ' + taskModel.name + ' task has been clicked.');
      };

      $scope.handleRowIconClick = function(rowModel) {
        alert('Icon from ' + rowModel.name + ' row has been clicked.');
      };

      $scope.expandAll = function() {
        $scope.api.tree.expandAll();
      };

      $scope.collapseAll = function() {
        $scope.api.tree.collapseAll();
      };

      $scope.$watch('options.sideMode', function(newValue, oldValue) {
        if (newValue !== oldValue) {
          $scope.api.side.setWidth(undefined);
          $timeout(function() {
            $scope.api.columns.refresh();
          });
        }
      });

      $scope.canAutoWidth = function(scale) {
        if (scale.match(/.*?hour.*?/) || scale.match(/.*?minute.*?/)) {
          return false;
        }
        return true;
      };

      $scope.getColumnWidth = function(widthEnabled, scale, zoom) {
        if (!widthEnabled && $scope.canAutoWidth(scale)) {
          return undefined;
        }

        if (scale.match(/.*?week.*?/)) {
          return 150 * zoom;
        }

        if (scale.match(/.*?month.*?/)) {
          return 300 * zoom;
        }

        if (scale.match(/.*?quarter.*?/)) {
          return 500 * zoom;
        }

        if (scale.match(/.*?year.*?/)) {
          return 800 * zoom;
        }

        return 40 * zoom;
      };

      // Reload data action
      $scope.load = function() {
        dataToRemove = undefined;

        $scope.timespans = {
          from: new Date(2016, 9, 21, 8, 0, 0),
          to: new Date(2016, 9, 25, 15, 0, 0),
          name: 'Sprint 1 Timespan'
            //priority: undefined,
            //classes: [],
            //data: undefined
        };
      };

      $scope.reload = function() {
        $scope.load();
      };

      // Remove data action
      $scope.remove = function() {
        $scope.api.data.remove(dataToRemove);
      };

      // Clear data action
      $scope.clear = function() {
        $scope.data = [];
      };


      // Visual two way binding.
      $scope.live = {};

      var debounceValue = 1000;

      var listenTaskJson = debounce(function(taskJson) {
        if (taskJson !== undefined) {
          var task = angular.fromJson(taskJson);
          objectModel.cleanTask(task);
          var model = $scope.live.task;
          angular.extend(model, task);
        }
      }, debounceValue);
      $scope.$watch('live.taskJson', listenTaskJson);

      var listenRowJson = debounce(function(rowJson) {
        if (rowJson !== undefined) {
          var row = angular.fromJson(rowJson);
          objectModel.cleanRow(row);
          var tasks = row.tasks;

          delete row.tasks;
          var rowModel = $scope.live.row;

          angular.extend(rowModel, row);

          var newTasks = {};
          var i, l;

          if (tasks !== undefined) {
            for (i = 0, l = tasks.length; i < l; i++) {
              objectModel.cleanTask(tasks[i]);
            }

            for (i = 0, l = tasks.length; i < l; i++) {
              newTasks[tasks[i].id] = tasks[i];
            }

            if (rowModel.tasks === undefined) {
              rowModel.tasks = [];
            }
            for (i = rowModel.tasks.length - 1; i >= 0; i--) {
              var existingTask = rowModel.tasks[i];
              var newTask = newTasks[existingTask.id];
              if (newTask === undefined) {
                rowModel.tasks.splice(i, 1);
              } else {
                objectModel.cleanTask(newTask);
                angular.extend(existingTask, newTask);
                delete newTasks[existingTask.id];
              }
            }
          } else {
            delete rowModel.tasks;
          }

          angular.forEach(newTasks, function(newTask) {
            rowModel.tasks.push(newTask);
          });
        }
      }, debounceValue);
      $scope.$watch('live.rowJson', listenRowJson);

      $scope.$watchCollection('live.task', function(task) {
        $scope.live.taskJson = angular.toJson(task, true);
        $scope.live.rowJson = angular.toJson($scope.live.row, true);
      });

      $scope.$watchCollection('live.row', function(row) {
        $scope.live.rowJson = angular.toJson(row, true);
        if (row !== undefined && row.tasks !== undefined && row.tasks.indexOf($scope.live.task) < 0) {
          $scope.live.task = row.tasks[0];
        }
      });

      $scope.$watchCollection('live.row.tasks', function() {
        $scope.live.rowJson = angular.toJson($scope.live.row, true);
      });

      // Event utility function
      var addEventName = function(eventName, func) {
        return function(data) {
          //  return func(eventName, data);
        };
      };
    }
  ]).directive('modal', function() {
    return {
      template: '<div class="modal fade">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 class="modal-title">{{ title }}</h4>' +
        '</div>' +
        '<div class="modal-body" ng-transclude></div>' +
        '</div>' +
        '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value) {
          if (value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function() {
          scope.$apply(function() {
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function() {
          scope.$apply(function() {
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
