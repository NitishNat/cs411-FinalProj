
# # In[2]:


import sqlite3
conn = sqlite3.connect('google-scholar-10k.db')


# # In[3]:


c = conn.cursor()


# # In[8]:


paper_tuple_list = []
for row in c.execute('SELECT * FROM articles'):
        paper_tuple_list.append(row)
        
        
print(len(paper_tuple_list))


# # In[14]:


import mysql.connector

cnx = mysql.connector.connect(user='admin', password='106126', 
                              database='GoogleScholar', auth_plugin='mysql_native_password', charset='utf8mb4')
cursor = cnx.cursor()
add_article = ("INSERT INTO paper"
               "(article_id, author_name, affiliation, total_citations, title, pub_year, citations, pub_author, print_link, pub_number, pub_publisher, pub_link, journal_name)"
               "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")
for data_article in paper_tuple_list:
    cursor.execute(add_article, data_article)
    

cnx.commit()
cursor.close()
cnx.close()


# In[16]:


# researcher_tuple_list = []
# for row in c.execute('SELECT * FROM authors where id IN (select MIN(id) from authors Group BY name)'):
#         researcher_tuple_list.append(row)
        
# print(len(researcher_tuple_list))


# # In[17]:


# cnx = mysql.connector.connect(user='admin', password='106126', 
#                               database='GoogleScholar', auth_plugin='mysql_native_password')
# cursor = cnx.cursor()


# add_researcher = ("INSERT INTO researcher"
#                  "(author_id, author_name, affiliation, total_citations, attributes, page, email, interests, url_picture)"
#                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)")

# for data_researcher in researcher_tuple_list:
#     cursor.execute(add_researcher, data_researcher)


# cnx.commit()
# cursor.close()
# cnx.close()


# In[ ]:




