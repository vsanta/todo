class BoringOldRailsTasksController < ApplicationController
  # GET /boring_old_rails_tasks
  # GET /boring_old_rails_tasks.xml
  def index
    @boring_old_rails_tasks = BoringOldRailsTask.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @boring_old_rails_tasks }
    end
  end

  # GET /boring_old_rails_tasks/1
  # GET /boring_old_rails_tasks/1.xml
  def show
    @boring_old_rails_task = BoringOldRailsTask.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @boring_old_rails_task }
    end
  end

  # GET /boring_old_rails_tasks/new
  # GET /boring_old_rails_tasks/new.xml
  def new
    @boring_old_rails_task = BoringOldRailsTask.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @boring_old_rails_task }
    end
  end

  # GET /boring_old_rails_tasks/1/edit
  def edit
    @boring_old_rails_task = BoringOldRailsTask.find(params[:id])
  end

  # POST /boring_old_rails_tasks
  # POST /boring_old_rails_tasks.xml
  def create
    @boring_old_rails_task = BoringOldRailsTask.new(params[:boring_old_rails_task])

    respond_to do |format|
      if @boring_old_rails_task.save
        format.html { redirect_to(@boring_old_rails_task, :notice => 'Boring old rails task was successfully created.') }
        format.xml  { render :xml => @boring_old_rails_task, :status => :created, :location => @boring_old_rails_task }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @boring_old_rails_task.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /boring_old_rails_tasks/1
  # PUT /boring_old_rails_tasks/1.xml
  def update
    @boring_old_rails_task = BoringOldRailsTask.find(params[:id])

    respond_to do |format|
      if @boring_old_rails_task.update_attributes(params[:boring_old_rails_task])
        format.html { redirect_to(@boring_old_rails_task, :notice => 'Boring old rails task was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @boring_old_rails_task.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /boring_old_rails_tasks/1
  # DELETE /boring_old_rails_tasks/1.xml
  def destroy
    @boring_old_rails_task = BoringOldRailsTask.find(params[:id])
    @boring_old_rails_task.destroy

    respond_to do |format|
      format.html { redirect_to(boring_old_rails_tasks_url) }
      format.xml  { head :ok }
    end
  end
end
